import { imagens } from "../assets/imagens";
import { TbSunMoon, TbSun, TbMoon } from "react-icons/tb";
import { BiSolidLike, BiSolidDislike, BiQuestionMark } from "react-icons/bi";

export const questions = [
  {
    type: 'address',
    question: 'Onde está localizado o terreno para execução do projeto?',
  },
  {
    type: 'yes-no-upload-file',
    question: 'É localizado em algum condomínio?',
    followUp: 'Qual?',
    uploadLabel: 'Favor anexar a legislação do condomínio abaixo:',
  },
  {
    type: 'multiple-choice',
    question: 'Você já possui estudo topográfico do terreno?',
    icon: [<BiSolidLike />, <BiSolidDislike />],
    options: ['Sim', 'Não'],
  },
  {
    type: 'multiple-choice',
    question: 'Será térreo ou dois pavimentos?',
    icon: [],
    options: ['Térreo', 'Dois pavimentos', 'Mais de dois pavimentos', 'Ainda não defini'],
  },
  {
    type: 'short-open',
    inputType: 'date',
    question: 'Qual a previsão aproximada para o início do projeto?',
  },
  {
    type: 'short-open',
    inputType: 'date',
    question: 'Qual o prazo para a previsão aproximada para o início da obra?',
  },
  {
    type: 'open',
    question: 'Qual a sua maior exigência para esse projeto? Quais são suas expectativas? o que é indispensável pra você?',
  },
  {
    type: 'open',
    question: 'O que existe na sua atual residência que você não gosta e o que existe que você gostaria que tivesse nesse novo projeto?',
  },
  {
    type: 'open',
    question: 'Quantas pessoas irão morar na residência? Detalhe as idades e profissões desses moradores.',
  },
  {
    type: 'open',
    question: 'Quantos m² tem o terreno e quantos m² pretende construir?',
  },
  {
    type: 'open',
    question: 'Descreva os ambientes que possivelmente terão na residência: (exemplo: sala, cozinha, sala de jantar, 2 quartos, 1 suíte, closet, lavabo...)',
  },
  {
    type: 'multiple-choice',
    question: 'Algum portador de necessidades especiais irá utilizar a casa?',
    icon: [<BiSolidLike />, <BiSolidDislike />, <BiQuestionMark />],
    options: ['Sim', 'Não', 'Talvez'],
  },
  {
    type: 'yes-no-follow-up',
    question: 'Gostariam de piscina?',
    followup: 'Como? Com hidromassagem, com prainha, formato curvo, retangular, etc...',
  },
  {
    type: 'multiple-choice-other',
    question: 'Alguém irá trabalhar/estudar em casa? Necessidade de home office?',
    options: ['Sim', 'Não', 'Talvez'],
    icon: [<BiSolidLike />, <BiSolidDislike />, <BiQuestionMark />],
  },
  {
    type: 'yes-no-follow-up',
    question: 'Tem interesse em soluções voltadas para sustentabilidade?',
    followup: 'Quais?',
  },
  {
    type: 'yes-no-follow-up',
    question: 'Recebe amigos em casa?',
    followup: 'Quantos costuma receber?',
  },
  {
    type: 'short-open',
    inputType: 'number',
    question: 'Quantas vagas precisa na garagem?',
  },
  {
    type: 'multiple-choice',
    question: 'Gostariam de um espaço específico para assistir TV? (home cinema)',
    icon: [<BiSolidLike />, <BiSolidDislike />, <BiQuestionMark />],
    options: ['Sim', 'Não', 'Talvez'],
  },
  {
    type: 'multiple-choice',
    question: 'Gostam de cozinhar?',
    icon: [<BiSolidLike />, <BiSolidDislike />, <BiQuestionMark />],
    options: ['Sim', 'Não', 'Às vezes'],
  },
  {
    type: 'yes-no-follow-up',
    question: 'Algum utilizador da casa tem hábito de leitura?',
    followup: 'Onde costuma ler?',
  },
  {
    type: 'yes-no-follow-up',
    question: 'Gostaria de algum espaço voltado para jogos, ou algo similar?',
    followup: 'O quê? Exemplo: Sinuca, ping pong, cesta de basquete.',
  },
  {
    type: 'yes-no-follow-up',
    question: 'Tem ou pretende ter animal de estimação?',
    followup: 'Gostaria de algum espaço específico para eles? Se sim, o quê?',
  },
  {
    type: 'visual-multiple-choice',
    question: 'Selecione a(s) fachada(s) que você gosta:',
    options: [
      {
        label: 'Platibanda (telhado embutido)',
        imageUrl: imagens.telhadoplatibanda,
      },
      {
        label: 'Telhado aparente',
        imageUrl: imagens.telhadoaparente,
      },
    ]
  },
  {
    type: 'image-liking',
    question: 'Gostam de ambientes integrados?',
    imageUrl: imagens.ambientesintegrados,
    options: ['Sim', 'Não', 'Talvez'],
  },
  {
    type: 'image-liking',
    question: 'Gostam de pé direito duplo?',
    imageUrl: imagens.pedireitoduplo,
    options: ['Sim', 'Não', 'Talvez'],
  },
  {
    type: 'visual-multiple-choice-other',
    question: 'Caso a sua casa seja de 2 pavimentos qual preferência pelo modelo de escada? (Analisar apenas o formato da escada, ignorar cores/revestimentos)',
    options: [
      {
        label: 'Estilo cascata',
        imageUrl: imagens.estilocascata,
      },
      {
        label: 'Escada reta',
        imageUrl: imagens.escadareta,
      },
      {
        label: 'Escada em U',
        imageUrl: imagens.escadaemu,
      },
    ]
  },
  {
    type: 'image-liking',
    question: 'Tem interesse em lareira ou algum espaço similar?',
    imageUrl: imagens.lareira,
    options: ['Sim', 'Não', 'Talvez'],
  },
  {
    type: 'image-liking',
    question: 'Gostam de jardim de inverno?',
    imageUrl: imagens.jardimdeinverno,
    options: ['Sim', 'Não', 'Talvez'],
  },
  {
    type: 'image-liking',
    question: 'Querem banheira no banheiro master?',
    imageUrl: imagens.banheira,
    options: ['Sim', 'Não', 'Talvez'],
  },
  {
    type: 'open',
    question: 'Sobre a porta principal você tem preferência por porta amadeirada ou outro material como ACM?',
  },
  {
    type: 'image-liking',
    question: 'Você gosta desta fachada?',
    imageUrl: imagens.fachada1,
    options: ['Sim', 'Não', 'Talvez'],
  },
  {
    type: 'image-liking',
    question: 'Você gosta desta fachada?',
    imageUrl: imagens.fachada2,
    options: ['Sim', 'Não', 'Talvez'],
  },
  {
    type: 'image-liking',
    question: 'Você gosta desta fachada?',
    imageUrl: imagens.fachada3,
    options: ['Sim', 'Não', 'Talvez'],
  },
  {
    type: 'image-liking',
    question: 'Você gosta desta fachada?',
    imageUrl: imagens.fachada4,
    options: ['Sim', 'Não', 'Talvez'],
  },
  {
    type: 'image-liking',
    question: 'Você gosta desta fachada?',
    imageUrl: imagens.fachada5,
    options: ['Sim', 'Não', 'Talvez'],
  },
  {
    type: 'image-liking',
    question: 'Você gosta desta fachada?',
    imageUrl: imagens.fachada6,
    options: ['Sim', 'Não', 'Talvez'],
  },
  {
    type: 'image-liking',
    question: 'Você gosta desta fachada?',
    imageUrl: imagens.fachada7,
    options: ['Sim', 'Não', 'Talvez'],
  },
  {
    type: 'image-liking',
    question: 'Você gosta desta fachada?',
    imageUrl: imagens.fachada8,
    options: ['Sim', 'Não', 'Talvez'],
  },
  {
    type: 'image-liking',
    question: 'Você gosta desta fachada?',
    imageUrl: imagens.fachada9,
    options: ['Sim', 'Não', 'Talvez'],
  },
  {
    type: 'image-liking',
    question: 'Você gosta desta fachada?',
    imageUrl: imagens.fachada10,
    options: ['Sim', 'Não', 'Talvez'],
  },
  {
    type: 'image-liking',
    question: 'Você gosta desta fachada?',
    imageUrl: imagens.fachada11,
    options: ['Sim', 'Não', 'Talvez'],
  },
  {
    type: 'image-liking',
    question: 'Você gosta desta fachada?',
    imageUrl: imagens.fachada12,
    options: ['Sim', 'Não', 'Talvez'],
  },
  {
    type: 'multiple-choice',
    question: 'Para fachada: gosta de cores mais claras ou escuras?',
    icon: [<TbSun />, <TbMoon />, <TbSunMoon />],
    options: ['Claras', 'Escuras', 'As duas'],
  },
  {
    type: 'open',
    question: 'Há alguma observação especial ou detalhe que acha importante para a fachada?',
  },
  {
    type: 'image-liking',
    question: 'Você gosta de brises? (Brise é um elemento instalado em fachadas e janelas formado por lâminas de metal ou madeira ou outro material)',
    imageUrl: imagens.brises,
    options: ['Sim', 'Não', 'Talvez'],
  },
  {
    type: 'image-liking',
    question: 'Gostaria de um espaço voltado para exercícios físicos?',
    imageUrl: imagens.academia,
    options: ['Sim', 'Não', 'Talvez'],
  },
  {
    type: 'visual-multiple-choice',
    question: 'Prefere piscina com área verde ou deck ao redor?',
    options: [
      {
        label: 'Com deck',
        imageUrl: imagens.piscinaDeck,
      },
      {
        label: 'Com área verde',
        imageUrl: imagens.piscinaAreaVerde,
      },
    ]
  },
  {
    type: 'open',
    question: 'Como você prefere a porta de entrada principal? Exemplos: porta pivotante alta, em madeira, porta em alumínio preta, porta dupla branca.',
  },
  {
    type: 'multiple-choice',
    question: 'Qual é a média do valor que pretende investir, considerando terraplanagem, mão de obra, materiais, acabamento, etc.?',
    icon: [],
    options: ['até 250 mil', 'entre 250 mil e 700  mil', 'entre 700 mil e 1,2 milhões', 'entre 1,5 milhão a 2 milhões'],
  },
  {
    type: 'open',
    question: 'Gostaria de acrescentar mais alguma informação sobre o seu projeto?',
  },
];