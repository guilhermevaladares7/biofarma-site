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
  },
  {
    id: "reducose",
    foto: "img/frasco.jpg",
    nome: "Reducose® 250 mg",
    resumo: "Extrato padronizado da folha de amoreira-branca.",
    descricao: "Reducose® é um extrato padronizado da folha de amoreira-branca (Morus alba), rico em DNJ (1-desoxinojirimicina), um composto que atua sobre as enzimas que digerem os carboidratos da refeição.",
    composicao: [
      "Reducose® (extrato de folha de amoreira) 250 mg"
    ],
    beneficios: [
      "Pode contribuir para um menor pico de glicose após refeições ricas em carboidratos",
      "Atua de forma natural sobre a digestão do açúcar e do amido da refeição",
      "Estudado com a mesma dose de 250 mg desta fórmula"
    ],
    modoDeUso: "1 cápsula, 2 vezes ao dia, ou conforme orientação do farmacêutico.",
    observacao: "Quem usa medicamento para diabetes deve conversar com o médico antes, pelo risco de queda da glicose.",
    formas: [
      {
        nome: "Cápsulas",
        unidade: "cápsulas",
        opcoes: [
          { quantidade: 60, preco: 360.0 }
        ]
      }
    ]
  },
  {
    id: "colesterol-redux",
    foto: "img/frasco.jpg",
    nome: "Colesterol Redux",
    resumo: "Hexanicotinato de inositol + Red Yeast Rice.",
    descricao: "Fórmula com hexanicotinato de inositol, uma forma de vitamina B3 (niacina), e Red Yeast Rice (arroz de levedura vermelha), usada como apoio no controle do colesterol.",
    composicao: [
      "Hexanicotinato de inositol 300 mg",
      "Red Yeast Rice 300 mg"
    ],
    beneficios: [
      "O Red Yeast Rice contém monacolina K, substância estudada pela ação sobre o colesterol LDL",
      "A niacina participa do metabolismo das gorduras no organismo",
      "Apoio a hábitos saudáveis de alimentação e atividade física"
    ],
    modoDeUso: "1 cápsula, 2 vezes ao dia, ou conforme orientação médica.",
    observacao: "Contém monacolina K, a mesma substância da lovastatina. Use somente com orientação médica. Não use junto com outros remédios para colesterol, na gestação, na amamentação ou se tiver doença no fígado.",
    formas: [
      {
        nome: "Cápsulas",
        unidade: "cápsulas",
        opcoes: [
          { quantidade: 60, preco: null }
        ]
      }
    ]
  },
  {
    id: "berberina-plus",
    foto: "img/frasco.jpg",
    nome: "Berberina Plus (Bioberon®) 100 mg",
    resumo: "Berberina com tecnologia de maior absorção.",
    descricao: "Bioberon® é uma berberina com tecnologia que melhora a absorção pelo organismo em comparação com a berberina comum. A berberina é um composto natural extraído de plantas e muito estudado no metabolismo.",
    composicao: [
      "Bioberon® (berberina) 100 mg"
    ],
    beneficios: [
      "Apoio ao equilíbrio do metabolismo da glicose",
      "Apoio ao equilíbrio do metabolismo das gorduras",
      "Tecnologia que favorece a absorção da berberina"
    ],
    modoDeUso: "1 cápsula, 2 vezes ao dia, de preferência junto às refeições, ou conforme orientação do farmacêutico.",
    observacao: "Não indicada na gestação e na amamentação. Quem usa medicamentos contínuos deve consultar o médico antes, porque a berberina pode interagir com alguns remédios.",
    formas: [
      {
        nome: "Cápsulas",
        unidade: "cápsulas",
        opcoes: [
          { quantidade: 60, preco: 95.0 }
        ]
      }
    ]
  },
  {
    id: "maxsolve-q10",
    foto: "img/frasco.jpg",
    nome: "Maxsolve® Coenzima Q10 líquida",
    resumo: "Coenzima Q10 em gotas, com absorção otimizada.",
    descricao: "Maxsolve® é uma coenzima Q10 em gotas com tecnologia de nanoemulsão, que facilita a absorção de um ativo que naturalmente é pouco absorvido. Pode ser tomada pura ou misturada em líquidos.",
    composicao: [
      "Maxsolve® (coenzima Q10) — frasco de 7,5 ml"
    ],
    beneficios: [
      "A coenzima Q10 participa da produção de energia nas células",
      "Ação antioxidante",
      "Tecnologia que favorece a absorção da coenzima Q10",
      "Em gotas, fácil de tomar"
    ],
    modoDeUso: "5 gotas ao dia, puras ou diluídas em água ou suco. Agite antes de usar.",
    observacao: "Quem usa anticoagulante deve conversar com o médico antes de usar.",
    formas: [
      {
        nome: "Gotas",
        titulo: "Apresentação",
        unidade: "ml",
        opcoes: [
          { quantidade: 7.5, rotulo: "Frasco de 7,5 ml", preco: 120.0 }
        ]
      }
    ]
  },
  {
    id: "peg-4000",
    foto: "img/frasco.jpg",
    nome: "PEG 4000 em envelopes",
    resumo: "Macrogol 4000 para o intestino preso.",
    descricao: "O PEG 4000 (macrogol) é um laxativo osmótico: ele retém água no intestino, amolecendo as fezes e facilitando a evacuação. Praticamente não é absorvido pelo organismo e não tem sabor.",
    beneficios: [
      "Indicado para o alívio da prisão de ventre",
      "Amolece as fezes de forma suave, sem provocar cólicas fortes",
      "Sem sabor, dissolve fácil em água ou suco",
      "Costuma agir em 24 a 48 horas"
    ],
    modoDeUso: "Dissolva o conteúdo de 1 envelope em um copo de água ou suco. Use conforme orientação do farmacêutico ou do médico.",
    observacao: "Não use em caso de dor abdominal sem causa conhecida ou suspeita de obstrução intestinal. Se persistirem os sintomas, o médico deverá ser consultado.",
    formas: [
      {
        nome: "Envelopes",
        titulo: "Apresentação",
        unidade: "envelopes",
        opcoes: [
          { quantidade: 30, rotulo: "30 envelopes de 8 g", preco: 67.2 },
          { quantidade: 30, rotulo: "30 envelopes de 15 g", preco: 105.0 }
        ]
      }
    ]
  }
];