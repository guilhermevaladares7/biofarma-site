const PRODUTOS = [
  {
    id: "creatina",
    foto: "img/frasco.jpg",
    nome: "Creatina monohidratada",
    resumo: "Creatina pura, sem sabor e sem aditivos.",
    descricao: "Creatina monohidratada pura, em pó, sem sabor. Mistura fácil em água, suco ou no shake do pós-treino.",
    beneficios: [
      "Auxilia no aumento do desempenho físico em exercícios de alta intensidade, quando associada a treino",
      "Contribui para o ganho de força",
      "Sem sabor, combina com qualquer bebida"
    ],
    formas: [
      {
        nome: "Pó",
        unidade: "g",
        opcoes: [
          { quantidade: 150, preco: 28.0 },
          { quantidade: 300, preco: 45.0 },
          { quantidade: 500, preco: 65.0 }
        ]
      }
    ]
  },
  {
    id: "vitamina-d3",
    foto: "img/frasco.jpg",
    nome: "Vitamina D3 2.000 UI",
    resumo: "Colecalciferol em cápsulas.",
    descricao: "Vitamina D3 (colecalciferol) 2.000 UI por cápsula, a forma de vitamina D que o próprio corpo produz com a luz do sol.",
    beneficios: [
      "Auxilia na formação de ossos e dentes",
      "Auxilia na absorção de cálcio e fósforo",
      "Contribui para o funcionamento do sistema imune",
      "Auxilia no funcionamento muscular"
    ],
    formas: [
      {
        nome: "Cápsulas",
        unidade: "cápsulas",
        opcoes: [
          { quantidade: 30, preco: 32.0 },
          { quantidade: 60, preco: 53.0 },
          { quantidade: 90, preco: 75.0 },
          { quantidade: 120, preco: 95.0 }
        ]
      }
    ]
  },
  {
    id: "vitamina-c",
    foto: "img/frasco.jpg",
    nome: "Vitamina C 500 mg",
    resumo: "Ácido ascórbico em cápsulas.",
    descricao: "Vitamina C (ácido ascórbico) 500 mg por cápsula.",
    beneficios: [
      "Contribui para o funcionamento do sistema imune",
      "Tem ação antioxidante",
      "Auxilia na formação do colágeno",
      "Auxilia na absorção do ferro dos alimentos"
    ],
    formas: [
      {
        nome: "Cápsulas",
        unidade: "cápsulas",
        opcoes: [
          { quantidade: 30, preco: 27.0 },
          { quantidade: 60, preco: 53.0 },
          { quantidade: 120, preco: 95.0 }
        ]
      }
    ]
  },
  {
    id: "magnesio",
    foto: "img/frasco.jpg",
    nome: "Magnésio dimalato 300 mg",
    resumo: "Magnésio na forma dimalato, em cápsulas.",
    descricao: "Magnésio dimalato 300 mg por cápsula. Nessa forma o magnésio vem ligado ao ácido málico, que costuma ser bem tolerado pelo estômago.",
    beneficios: [
      "Auxilia no funcionamento muscular",
      "Contribui para o metabolismo energético",
      "Auxilia na manutenção de ossos e dentes",
      "Contribui para o funcionamento do sistema nervoso"
    ],
    formas: [
      {
        nome: "Cápsulas",
        unidade: "cápsulas",
        opcoes: [
          { quantidade: 30, preco: 27.0 },
          { quantidade: 60, preco: 53.0 },
          { quantidade: 120, preco: 95.0 }
        ]
      }
    ]
  },
  {
    id: "complexo-b",
    foto: "img/frasco.jpg",
    nome: "Complexo B otimizado",
    resumo: "Vitaminas do complexo B numa cápsula.",
    descricao: "Fórmula com as vitaminas do complexo B reunidas numa única cápsula.",
    beneficios: [
      "Contribui para o metabolismo energético",
      "Auxilia no funcionamento do sistema nervoso",
      "Auxilia na formação das células do sangue"
    ],
    formas: [
      {
        nome: "Cápsulas",
        unidade: "cápsulas",
        opcoes: [
          { quantidade: 30, preco: 50.0 },
          { quantidade: 60, preco: 85.0 },
          { quantidade: 90, preco: 115.0 }
        ]
      }
    ]
  },
  {
    id: "zinco-selenio-q10",
    foto: "img/frasco.jpg",
    nome: "Zinco + Exselen + Coenzima Q10",
    resumo: "Zinco 15 mg, Exselen 10 mg e Coenzima Q10 150 mg.",
    descricao: "Três ativos numa cápsula: zinco 15 mg, Exselen® 10 mg (fonte de selênio) e coenzima Q10 150 mg.",
    composicao: [
      "Zinco 15 mg",
      "Exselen® 10 mg",
      "Coenzima Q10 150 mg"
    ],
    beneficios: [
      "Zinco e selênio contribuem para o funcionamento do sistema imune",
      "Zinco e selênio auxiliam na proteção das células contra os radicais livres",
      "A coenzima Q10 participa da produção de energia nas células"
    ],
    formas: [
      {
        nome: "Cápsulas",
        unidade: "cápsulas",
        opcoes: [
          { quantidade: 30, preco: 36.5 },
          { quantidade: 60, preco: 70.0 },
          { quantidade: 90, preco: 100.0 }
        ]
      }
    ]
  },
  {
    id: "pele-oral",
    foto: "img/frasco.jpg",
    nome: "Hidroxitirosol + Polypodium leucotomos + Luteína",
    resumo: "Cápsulas com ativos antioxidantes para o cuidado da pele.",
    descricao: "Fórmula oral com ativos antioxidantes, usada como complemento no cuidado da pele exposta ao sol e com tendência a manchas.",
    composicao: [
      "Hidroxitirosol",
      "Polypodium leucotomos",
      "Luteína"
    ],
    beneficios: [
      "Ação antioxidante",
      "Complementa o cuidado da pele contra os efeitos do sol",
      "Indicada como apoio no cuidado de peles com tendência a manchas"
    ],
    observacao: "Não substitui o protetor solar.",
    formas: [
      {
        nome: "Cápsulas",
        unidade: "cápsulas",
        opcoes: [
          { quantidade: 30, preco: 38.0 },
          { quantidade: 60, preco: 70.0 },
          { quantidade: 90, preco: 100.0 }
        ]
      }
    ]
  },
  {
    id: "creme-maos",
    foto: "img/frasco.jpg",
    nome: "Creme para manchas nas mãos",
    resumo: "Creme clareador com quatro ativos, 50 g.",
    descricao: "Creme para uniformizar o tom da pele das mãos, com ativos que atuam nas manchas e na renovação da pele.",
    composicao: [
      "Ácido mandélico 8%",
      "Alfa arbutin 4%",
      "Niacinamida 4%",
      "Ácido tranexâmico 4%",
      "Base Ômega Gold qsp 50 g"
    ],
    beneficios: [
      "O ácido mandélico promove uma renovação suave da pele",
      "Alfa arbutin e ácido tranexâmico atuam no clareamento das manchas",
      "A niacinamida ajuda a uniformizar o tom e fortalece a barreira da pele"
    ],
    observacao: "Use protetor solar nas mãos durante o dia.",
    formas: [
      {
        nome: "Creme",
        unidade: "g",
        opcoes: [
          { quantidade: 50, preco: null }
        ]
      }
    ]
  }
];