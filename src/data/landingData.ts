/**
 * Dados e textos oficiais da Landing Page do Combo Vitalício
 * Doces da Naty - Black Friday
 */

import docesVitrineImg from '../assets/images/doces_vitrine_course.jpg';
import bolosZeroImg from '../assets/images/bolos_do_zero_course.jpg';
import nataschaBioImg from '../assets/images/founder.jpg';

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  tag: string;
  text: string;
  highlight: string;
  rating: number;
  revenueProof?: string;
  avatarUrl?: string;
}

export const TICKER_ITEMS = [
  "OFERTA VITALÍCIA",
  "BLACK FRIDAY",
  "ACESSO IMEDIATO",
  "CURSO BOLOS DO ZERO + DOCES DE VITRINE",
  "BÔNUS EXCLUSIVOS",
  "VAGAS LIMITADAS",
  "SUPORTE EXCLUSIVO",
  "ZERO MENSALIDADES",
];

export const COURSE_DOCES_DE_VITRINE = {
  id: "doces-de-vitrine",
  title: "Curso 1: Doces de Vitrine",
  subtitle: "A estrutura completa para transformar sua vitrine em um ímã de vendas diárias",
  image: docesVitrineImg,
  quote: "Muitas confeiteiras têm o sonho de viver da confeitaria, mas começam da forma errada, o sucesso vai muito além das receitas.",
  description: "No Doces de vitrine você entende que para crescer na confeitaria é preciso saber os pilares mais importantes, e não estamos falando apenas dos doces, é preciso aprender sobre vendas, divulgação, precificação, delivery e gestão financeira.",
  highlight: "É o passo a passo que usei para construir a Doces da Naty do zero, e que você terá acesso para aplicar na sua confeitaria.",
  features: [
    "Doces que mais vendem no balcão e delivery",
    "Engenharia de vitrine e apresentação magnética",
    "Precificação à prova de prejuízo com planilhas práticas",
    "Gestão financeira simplificada para confeitaria real",
    "Estratégia de tráfego, Instagram e captação de clientes"
  ]
};

export const COURSE_BOLOS_DO_ZERO = {
  id: "bolos-do-zero",
  title: "Curso 2: Bolos do Zero",
  subtitle: "O método definitivo para nunca mais perder uma massa, recheio ou cliente",
  image: bolosZeroImg,
  quote: "Bolo foi o meu maior vilão na confeitaria, e de tanto errar por não saber fazer os processos, eu criei o bolos do zero com o passo a passo para fazer seu bolo ficar perfeito.",
  description: "Para fazer bolos com segurança você precisa da massa certa, o recheio no ponto, a montagem padronizada, a decoração impecável e o sabor irresistível.",
  highlight: "Além disso, eu te ensino como vender bolos diariamente através das fatias, que são o ponta pé para o cliente conhecer o sabor do seu bolo, é o que eu chamo de degustação paga.",
  features: [
    "Massas estruturadas, fofinhas e ultra úmidas",
    "Recheios firmes sem amido que não desmoronam",
    "Montagem e prensagem padronizada profissional",
    "Técnicas de decoração comerciais que vendem rápido",
    "A lendária estratégia de Degustação Paga com Fatias"
  ]
};

export const COMBO_DELIVERABLES = [
  {
    title: "Curso Completo Doces de Vitrine",
    desc: "Acesso total a todas as aulas de produção, vendas, delivery e gestão.",
    value: "R$ 997,00"
  },
  {
    title: "Curso Completo Bolos do Zero",
    desc: "O método passo a passo do bolo perfeito às vendas em fatias.",
    value: "R$ 1.197,00"
  },
  {
    title: "BÔNUS 1: Curso de Bolo no Pote",
    desc: "Aprenda a faturar com os bolos no pote mais vendidos e desejados do mercado.",
    value: "R$ 597,00"
  },
  {
    title: "BÔNUS 2: Curso Slices Cakes",
    desc: "Técnicas e montagens de fatias gourmet irresistíveis e lucrativas.",
    value: "R$ 349,00"
  },
  {
    title: "BÔNUS 3: Curso de Fotos e Vídeos com a Naty (Inscrições no dia 30/11)",
    desc: "Aprenda a criar conteúdos e fotos profissionais com o celular que vendem doces no ato.",
    value: "R$ 397,00"
  },
  {
    title: "SUPER BÔNUS EXCLUSIVO: Mentoria Individual de 6 Meses",
    desc: "Para a 1ª aluna que comprar: acompanhamento 1 a 1 de 6 meses com a produtora para levar seu negócio ao próximo nível.",
    value: "R$ 6.000,00"
  },
  {
    title: "Acesso Vitalício (Sem mensalidades ou anuidades)",
    desc: "Assista quantas vezes quiser, quando quiser, com acesso permanente.",
    value: "Incluso"
  },
  {
    title: "Suporte Direto com a Equipe Doces da Naty",
    desc: "Tire dúvidas de receitas e processos diretamente com a equipe da produtora.",
    value: "Incluso"
  }
];

export const COMPARISON_DATA = [
  {
    aspect: "Produção de Receitas",
    before: "Errar receitas e perder dinheiro em ingredientes caros",
    after: "Massas e recheios padronizados, testados e perfeitos de primeira"
  },
  {
    aspect: "Cobrança e Lucro",
    before: "Insegurança na precificação, vendendo no chute com medo de cobrar",
    after: "Precificação correta com lucro líquido garantido em cada fatia"
  },
  {
    aspect: "Fluxo de Caixa",
    before: "Dependência de encomendas raras aos finais de semana",
    after: "Vendas diárias com fatias lucrativas e vitrine atrativa todos os dias"
  },
  {
    aspect: "Segurança nos Processos",
    before: "Medo constante do bolo desmoronar ou chegar quebrado no cliente",
    after: "Estruturação sólida, montagem blindada e entrega 100% segura"
  },
  {
    aspect: "Gestão do Negócio",
    before: "Cansaço extremo sem saber se está tendo lucro real no final do mês",
    after: "Visão clara de empresa, loja ou delivery rodando de forma profissional"
  }
];

export const FOUNDER_INFO = {
  title: "Prazer, eu sou a Natascha, fundadora da Doces da Naty e confeiteira.",
  image: nataschaBioImg,
  bioParagraphs: [
    "Em 2017, decidi dar um passo corajoso: deixei 9 anos de estabilidade como supervisora de cobrança no regime CLT para mergulhar em um mundo onde eu não tinha nenhuma experiência, mas sobrava determinação. Comecei do zero, na cozinha do meu apartamento, e foi ali, entre erros e acertos, que conquistei meus primeiros clientes.",
    "Foram 3 anos trabalhando em casa até dar o próximo grande passo: em 2021, abri as portas da loja física da Doces da Naty. Hoje, com a loja aberta e funcionando todos os dias com delivery e balcão, transformei essa vivência real de confeitaria em método prático de ensino.",
    "Esse caminho me permitiu alcançar marcas que me enchem de orgulho: já são mais de 5 mil alunas online espalhadas pelo mundo, dezenas de alunas formadas em turmas de cursos presenciais e milhares de seguidores que acompanham nossos doces e bastidores nas redes sociais diariamente."
  ],
  metrics: [
    { number: "+ de 5 mil", label: "Alunas online", detail: "pelo Brasil e mundo" },
    { number: "Desde 2021", label: "Loja aberta", detail: "balcão & delivery ativo" },
    { number: "Dezenas", label: "De alunas no presencial", detail: "em turmas práticas" },
    { number: "Milhares", label: "De seguidores", detail: "que amam nossos bastidores" }
  ]
};

export const INITIAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Juliana Mendes",
    location: "Belo Horizonte / MG",
    tag: "Faturou R$ 4.800 no 1º mês",
    text: "Eu tinha pânico de fazer bolo para festa porque sempre afundava no centro. Com o Bolos do Zero aprendi a técnica exata da massa e o ponto do recheio. Comecei a vender fatias na quarta-feira e vendi 32 fatias em menos de 2 horas!",
    highlight: "Vendi 32 fatias em 2 horas",
    rating: 5,
    revenueProof: "R$ 4.850/mês com fatias"
  },
  {
    id: "t2",
    name: "Patrícia Albuquerque",
    location: "São Paulo / SP",
    tag: "Abriu delivery próprio",
    text: "O Doces de Vitrine abriu minha mente para o que é negócio de verdade. Antes eu só sabia enrolar brigadeiro e não sobrava 1 real. Hoje tenho minha vitrine refrigerada e faturamento diário garantido.",
    highlight: "Deixei a CLT para viver da minha cozinha",
    rating: 5,
    revenueProof: "R$ 7.200/mês recorrente"
  },
  {
    id: "t3",
    name: "Camila Rocha",
    location: "Curitiba / PR",
    tag: "Aluna Vitalícia",
    text: "A estratégia da Degustação Paga é genial! O cliente compra a fatia por curiosidade e na semana seguinte já encomenda o bolo inteiro de 2kg para o aniversário. Esse combo se paga na primeira semana.",
    highlight: "Se pagou na 1ª semana",
    rating: 5,
    revenueProof: "8 encomendas fechadas"
  },
  {
    id: "t4",
    name: "Mariana Silva",
    location: "Salvador / BA",
    tag: "Dobrou as vendas",
    text: "A Naty ensina de um jeito que qualquer pessoa entende, sem frescura e com muita verdade de quem vive a rotina de loja. O suporte é maravilhoso e as planilhas de precificação salvaram meu lucro.",
    highlight: "Aulas direto ao ponto e suporte nota 10",
    rating: 5,
    revenueProof: "+140% de lucro líquido"
  },
  {
    id: "t5",
    name: "Fernanda Costa",
    location: "Campinas / SP",
    tag: "Do zero à vitrine cheia",
    text: "Eu nunca tinha assado um bolo na vida. Segui o método à risca e meu primeiro bolo ficou tão lindo que postei no WhatsApp e recebi 4 encomendas no mesmo dia. Não troco o acesso vitalício por nada!",
    highlight: "Primeiro bolo rendeu 4 encomendas",
    rating: 5,
    revenueProof: "R$ 1.900 na semana de estreia"
  }
];

export const FAQ_ITEMS = [
  {
    question: "O que exatamente significa o Acesso Vitalício?",
    answer: "Significa que você não precisará pagar nenhuma mensalidade ou renovação anual. Uma vez inscrita nesta Black Friday, os cursos Bolos do Zero e Doces de Vitrine serão seus para sempre, incluindo todas as futuras atualizações de receitas e módulos."
  },
  {
    question: "Eu nunca fiz bolos antes, os cursos servem para iniciantes?",
    answer: "Sim! O método Bolos do Zero foi criado especificamente para quem está começando do absoluto zero ou para quem já tenta fazer bolos mas ainda erra massa, ponto de recheio ou montagem. As aulas são práticas, passo a passo e sem segredos guardados."
  },
  {
    question: "Como funciona a estratégia de vendas em Fatias (Degustação Paga)?",
    answer: "Você aprende a porcionar, embalar e precificar fatias irresistíveis que os clientes compram diariamente no impulso. Além de gerar caixa diário para o seu negócio, a fatia funciona como uma 'degustação paga', onde o cliente se apaixona pelo sabor e passa a encomendar bolos inteiros."
  },
  {
    question: "Como terei acesso aos cursos após o pagamento?",
    answer: "O acesso é imediato! Pagando por Cartão de Crédito ou PIX, você recebe um e-mail com seus dados de login em menos de 2 minutos para começar a assistir as aulas agora mesmo em qualquer celular, tablet ou computador."
  },
  {
    question: "E se eu não gostar ou achar que não é para mim?",
    answer: "Você tem 7 dias de garantia incondicional protegida por lei. Se por qualquer motivo você achar que o Combo não valeu a pena, basta nos enviar um e-mail que devolveremos 100% do seu dinheiro, sem perguntas e sem ressentimentos."
  },
  {
    question: "Quais são as formas de pagamento disponíveis?",
    answer: "Você pode parcelar em até 12x de R$ 109,18 no cartão de crédito (ou múltiplos cartões), pagar à vista no PIX com liberação instantânea por R$ 996,14, ou através de boleto bancário."
  }
];
