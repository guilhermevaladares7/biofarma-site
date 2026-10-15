(function () {
  const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const RAIO = 30;
  const ALCANCE_MOUSE = 210;

  document.querySelectorAll("[data-colmeia]").forEach(iniciar);

  function iniciar(area) {
    const canvas = document.createElement("canvas");
    canvas.className = "colmeia-canvas";
    canvas.setAttribute("aria-hidden", "true");
    area.prepend(canvas);
    area.classList.add("colmeia-viva");

    const contexto = canvas.getContext("2d");
    let largura = 0;
    let altura = 0;
    let celulas = [];
    let quadro = null;
    let estaVisivel = true;
    const mouse = { x: -9999, y: -9999 };

    function medir() {
      const caixa = area.getBoundingClientRect();
      const densidade = Math.min(window.devicePixelRatio || 1, 2);
      largura = caixa.width;
      altura = caixa.height;
      canvas.width = Math.round(largura * densidade);
      canvas.height = Math.round(altura * densidade);
      canvas.style.width = largura + "px";
      canvas.style.height = altura + "px";
      contexto.setTransform(densidade, 0, 0, densidade, 0, 0);
      montarGrade();
      if (reduzirMovimento) {
        desenhar(0);
      }
    }

    function montarGrade() {
      celulas = [];
      const passoX = Math.sqrt(3) * RAIO;
      const passoY = RAIO * 1.5;
      for (let linha = -1; linha * passoY < altura + RAIO * 2; linha++) {
        for (let coluna = -1; coluna * passoX < largura + passoX; coluna++) {
          let x = coluna * passoX;
          if (Math.abs(linha % 2) === 1) {
            x = x + passoX / 2;
          }
          celulas.push({ x: x, y: linha * passoY, brilho: 0, fase: Math.random() * Math.PI * 2 });
        }
      }
    }

    function tracarHexagono(x, y, raio) {
      contexto.beginPath();
      for (let lado = 0; lado < 6; lado++) {
        const angulo = (Math.PI / 180) * (60 * lado - 30);
        const px = x + raio * Math.cos(angulo);
        const py = y + raio * Math.sin(angulo);
        if (lado === 0) {
          contexto.moveTo(px, py);
        } else {
          contexto.lineTo(px, py);
        }
      }
      contexto.closePath();
    }

    function desenhar(tempo) {
      contexto.clearRect(0, 0, largura, altura);
      contexto.lineWidth = 1.5;
      celulas.forEach(function (celula) {
        const onda = 0.5 + 0.5 * Math.sin(tempo * 0.0007 + celula.x * 0.004 + celula.y * 0.006);
        const dx = celula.x - mouse.x;
        const dy = celula.y - mouse.y;
        const distancia = Math.sqrt(dx * dx + dy * dy);
        let alvo = 0;
        if (distancia < ALCANCE_MOUSE) {
          alvo = 1 - distancia / ALCANCE_MOUSE;
        }
        celula.brilho = celula.brilho + (alvo - celula.brilho) * 0.08;
        const piscada = Math.pow(Math.max(0, Math.sin(tempo * 0.00035 + celula.fase * 9)), 18);

        tracarHexagono(celula.x, celula.y, RAIO - 2);
        const preenchimento = celula.brilho * 0.32 + piscada * 0.22;
        if (preenchimento > 0.01) {
          contexto.fillStyle = "rgba(157, 183, 255, " + preenchimento.toFixed(3) + ")";
          contexto.fill();
        }
        const contorno = 0.04 + onda * 0.05 + celula.brilho * 0.45 + piscada * 0.2;
        contexto.strokeStyle = "rgba(29, 59, 198, " + contorno.toFixed(3) + ")";
        contexto.stroke();
      });
    }

    function animar(tempo) {
      desenhar(tempo);
      quadro = requestAnimationFrame(animar);
    }

    function comecar() {
      if (quadro === null && !reduzirMovimento) {
        quadro = requestAnimationFrame(animar);
      }
    }

    function parar() {
      if (quadro !== null) {
        cancelAnimationFrame(quadro);
        quadro = null;
      }
    }

    area.addEventListener("pointermove", function (evento) {
      if (evento.pointerType === "mouse") {
        const caixa = area.getBoundingClientRect();
        mouse.x = evento.clientX - caixa.left;
        mouse.y = evento.clientY - caixa.top;
      }
    });

    area.addEventListener("pointerleave", function () {
      mouse.x = -9999;
      mouse.y = -9999;
    });

    if ("ResizeObserver" in window) {
      new ResizeObserver(medir).observe(area);
    } else {
      window.addEventListener("resize", medir);
    }

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entradas) {
        entradas.forEach(function (entrada) {
          estaVisivel = entrada.isIntersecting;
          if (estaVisivel) {
            comecar();
          } else {
            parar();
          }
        });
      }).observe(area);
    }

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        parar();
      } else if (estaVisivel) {
        comecar();
      }
    });

    medir();
    comecar();
  }
})();