export interface PracticeArea {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface Article {
  id: string;
  number: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  oabDisclaimer: string;
}

export interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role?: string;
  rating: number;
  timeAgo: string;
  comment: string;
  source: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: "penal" | "familia" | "trabalho" | "atendimento";
  label: string;
  iconName: string;
  items: FaqItem[];
}

export const OFFICE_INFO = {
  name: "Sonaly Cristina dos Santos Advocacia",
  shortName: "Sonaly Santos Advocacia",
  lawyerName: "Dra. Sonaly Cristina dos Santos",
  oab: "Advocacia Especializada",
  tagline: "Defesa técnica, acolhimento humano e dedicação estratégica para proteger sua liberdade, sua família e seus direitos.",
  address: "Paraná Office - Av. Paraná, 1755 - Sala 34 - Boa Vista, Curitiba - PR, CEP 82510-000",
  addressShort: "Boa Vista, Curitiba - PR",
  cityState: "Curitiba - PR",
  phone: "(41) 99164-1398",
  whatsappNumber: "5541991641398",
  whatsappFormatted: "(41) 99164-1398",
  whatsappUrl: "https://wa.me/5541991641398?text=Ol%C3%A1%2C%20Dra.%20Sonaly.%20Gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica.",
  mapsDirectionsUrl: "https://maps.google.com/?q=Av.+Paran%C3%A1,+1755+-+Sala+34+-+Boa+Vista,+Curitiba+-+PR,+82510-000",
  email: "",
  experienceYears: "10 anos",
  workingHours: {
    weekdays: "Segunda a Sexta: 09:00 às 18:00",
    weekends: "Sábado e Domingo: Fechado",
  },
  social: {
    instagram: "https://www.instagram.com/sonalysantos.adv/",
  },
  instagramUrl: "https://www.instagram.com/sonalysantos.adv/",
  pillars: {
    mission: "Proporcionar uma defesa jurídica estratégica, técnica e profundamente humanizada nas áreas do Direito Penal, Família, Sucessões e Trabalho, garantindo segurança, dignidade e proteção irrestrita aos direitos de cada cliente.",
    vision: "Ser reconhecida em Curitiba e em todo o Paraná como um escritório de referência pelo rigor técnico, atendimento próximo e ético, e dedicação incansável na busca de soluções eficazes.",
    values: [
      "Atendimento Direto e Humanizado com a Titular",
      "Rigor Técnico e Estratégia Jurídica Sob Medida",
      "Ética e Transparência Estrita (Provimento 205/2021 CFOAB)",
      "Empatia, Escuta Ativa e Defesa Firme das Liberdades e Direitos",
      "Sigilo Profissional Absoluto e Confidencialidade",
    ],
  },
  metrics: [
    { value: "10 Anos", label: "Prática jurídica forense consolidada" },
    { value: "100%", label: "Atendimento direto com a advogada titular" },
    { value: "Especialista", label: "Pós-Graduada em Direito Penal e Processo Penal" },
    { value: "Ética", label: "Conformidade integral ao CFOAB e sigilo absoluto" },
  ],
};

export const LAWYER_PROFILE = {
  name: "Dra. Sonaly Cristina dos Santos",
  role: "Advogada Titular & Fundadora",
  oab: "Advocacia Especializada",
  specialties: "Especialista em Direito Penal e Processo Penal • Família e Sucessões • Direito do Trabalho",
  photo: "/foto_perfil.jpeg",
  bioShort: "Com sólida formação acadêmica e 10 anos de experiência prática desde sua graduação em 2016, a Dra. Sonaly Cristina dos Santos conduz uma advocacia combativa, estratégica e acolhedora, com especialização em Direito Penal e Processo Penal, e sólida atuação em Direito de Família, Sucessões e Direito do Trabalho em Curitiba/PR.",
  bio: "Sonaly Cristina dos Santos é advogada com sólida formação acadêmica e trajetória profissional consolidada desde 2016, ano em que se graduou em Direito. Possui especialização em Direito Penal e Processo Penal, áreas nas quais aprofundou seu conhecimento teórico e prático ao longo dos anos.\n\nEntre 2019 e 2021, atuou como secretária da Comissão da Advocacia Criminal da OAB – Subseção de Colombo, uma vivência marcante que ampliou sua visão institucional e fortaleceu seu compromisso ético e técnico com a advocacia criminal e a defesa das garantias constitucionais.\n\nAtua com excelência nas áreas de Direito Criminal, Direito de Família e Sucessões, além de manter uma prática dedicada em Direito do Trabalho. Cada caso é conduzido com rigor analítico, seriedade e dedicação personalizada — sempre com foco em soluções jurídicas eficazes, céleres e humanas.\n\nA Dra. Sonaly acredita que a advocacia exige não apenas conhecimento doutrinário e estratégia processual, mas também empatia e escuta ativa. Por isso, oferece um atendimento exclusivo, presente em todas as fases, assegurando que cada cliente se sinta plenamente esclarecido, acolhido e representado com dignidade.",
  academicSummary: [
    {
      institution: "Especialização Lato Sensu",
      course: "Pós-Graduação em Direito Penal e Processo Penal",
      details: "Aprofundamento técnico em teoria do delito, instrução processual, recursos criminais, Tribunal do Júri e garantias fundamentais da ampla defesa.",
    },
    {
      institution: "OAB – Subseção de Colombo (2019–2021)",
      course: "Secretária da Comissão da Advocacia Criminal",
      details: "Atuação institucional relevante na defesa das prerrogativas da advocacia criminal e fortalecimento do debate jurídico especializado.",
    },
    {
      institution: "Graduação em Direito (2016)",
      course: "10 Anos de Prática Jurídica Forense",
      details: "Atuação destacada em Curitiba e Região Metropolitana em Direito Penal, Direito de Família, Sucessões e Direito do Trabalho.",
    },
    {
      institution: "Capacitação Contínua",
      course: "Direito das Famílias, Sucessões e Prática Laboral",
      details: "Constante atualização jurisprudencial em divórcios, partilhas patrimoniais, inventários em cartório e relações contratuais de trabalho.",
    },
  ],
  quote: "A advocacia exige não apenas técnica e estratégia, mas também empatia e escuta ativa. Nosso compromisso é estar ao seu lado em cada etapa, com ética, transparência e representação digna.",
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "penal-defesa",
    code: "01",
    title: "Direito Penal & Defesa Criminal",
    subtitle: "Atuação Estratégica em Todas as Fases",
    description: "Defesa criminal combativa e técnica desde o início das investigações até a fase recursal, garantindo o contraditório, a presunção de inocência e o pleno respeito aos direitos constitucionais.",
    highlights: [
      "Acompanhamento presencial em delegacias, depoimentos e investigações",
      "Defesa em flagrante e atuação estratégica em audiências de custódia",
      "Defesa técnica em processos criminais ordinários e Tribunal do Júri",
      "Interposição de recursos aos Tribunais Regionais e Tribunais Superiores",
    ],
  },
  {
    id: "processo-penal",
    code: "02",
    title: "Processo Penal & Medidas de Urgência",
    subtitle: "Habeas Corpus e Proteção da Liberdade",
    description: "Medidas urgentes para salvaguardar a liberdade de locomoção, combater ilegalidades processuais e acompanhar a fase de cumprimento de pena com rigor e humanidade.",
    highlights: [
      "Impetração de Habeas Corpus perante os Tribunais competentes",
      "Pedidos de revogação de prisão preventiva e liberdade provisória",
      "Atuação e requerimentos em sede de Execução Penal e progressão de regime",
      "Assessoria jurídica para medidas protetivas e defesas em crimes de trânsito e honra",
    ],
  },
  {
    id: "familia",
    code: "03",
    title: "Direito de Família & Proteção Patrimonial",
    subtitle: "Condução Humanizada e Soluções Seguras",
    description: "Acolhimento empático e firmeza técnica para solucionar conflitos familiares com agilidade, buscando soluções consensuais sempre que possível e protegendo os direitos e o bem-estar dos filhos.",
    highlights: [
      "Divórcio consensual em cartório (rápido e econômico) e divórcio litigioso",
      "Regulamentação de guarda compartilhada, visitas e convivência familiar",
      "Ações de fixação, revisão, exoneração e execução de pensão alimentícia",
      "Reconhecimento e dissolução de união estável com partilha de bens",
    ],
  },
  {
    id: "sucessoes-inventario",
    code: "04",
    title: "Direito das Sucessões & Inventários",
    subtitle: "Agilidade na Partilha e Preservação de Bens",
    description: "Assessoria completa para a transmissão do patrimônio familiar após o falecimento, orientando herdeiros com clareza para evitar conflitos e reduzir custos e encargos tributários.",
    highlights: [
      "Inventário extrajudicial em cartório por escritura pública de forma ágil",
      "Inventário judicial em casos de litígio entre herdeiros ou menores envolvidos",
      "Abertura e cumprimento de testamentos e planejamento sucessório",
      "Regularização de bens herdados, alvarás judiciais e sobrepartilha",
    ],
  },
  {
    id: "trabalhista-rescisao",
    code: "05",
    title: "Direito do Trabalho & Verbas Rescisórias",
    subtitle: "Garantia Integral dos Direitos Trabalhistas",
    description: "Atuação firme na apuração exata de direitos laborais, cálculo minucioso de haveres rescisórios e cobrança de valores devidos ao trabalhador em discordâncias com empregadores.",
    highlights: [
      "Conferência minuciosa de rescisão sem justa causa, aviso prévio e saldo de salário",
      "Cobrança de horas extras habituais, reflexos e intervalos suprimidos",
      "Liberação do seguro-desemprego e depósito da multa rescisória de 40% do FGTS",
      "Adicionais de insalubridade, periculosidade e horas noturnas",
    ],
  },
  {
    id: "pejotizacao-vinculo",
    code: "06",
    title: "Reconhecimento de Vínculo CLT & Falsa PJ",
    subtitle: "Nulidade de Fraudes e Proteção ao Empregado",
    description: "Ações para profissionais que atuam sob ordens, horários e subordinação direta contratados falsamente como PJ/MEI, e reparação por assédio moral e doenças ocupacionais.",
    highlights: [
      "Reconhecimento de vínculo de emprego com anotação retroativa em CTPS",
      "Nulidade de contratos fraudulentos de 'pejotização' (Art. 9º da CLT)",
      "Ação de Rescisão Indireta por falta patronal grave ou atraso salarial",
      "Indenizações por assédio moral no ambiente profissional e acidentes de trabalho",
    ],
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-01",
    author: "Vinícius J",
    role: "7 avaliações",
    rating: 5,
    timeAgo: "4 meses atrás",
    comment: "Ótima profissional, atendimento humanizado, ágil e atenciosa. Recomendo!",
    source: "Google Reviews",
  },
  {
    id: "rev-02",
    author: "Sabrina Alvarenga Nascimento",
    role: "Local Guide • 18 avaliações",
    rating: 5,
    timeAgo: "4 meses atrás",
    comment: "Profissional e pessoa incrível, responsável, atenciosa e experiente. O Ambiente acolhedor e impecável. Recomendo de olhos fechados.",
    source: "Google Reviews",
  },
  {
    id: "rev-03",
    author: "Mayara Gonçalves",
    role: "6 avaliações",
    rating: 5,
    timeAgo: "um ano atrás",
    comment: "A advogada Sonaly Cristina dos Santos se destaca pelo seu trabalho dedicado, sempre pautado pela ética, competência e excelência no atendimento ao cliente. Seu foco está em oferecer soluções jurídicas de qualidade.",
    source: "Google Reviews",
  },
  {
    id: "rev-04",
    author: "Juliano Garcia",
    role: "Local Guide • 11 avaliações",
    rating: 5,
    timeAgo: "um ano atrás",
    comment: "Indico sem sombra de dúvidas a Dra. Sonaly. É uma ótima profissional, sempre atenta às minhas dúvidas sobre os processos e está a todo momento me atualizando sobre seus movimentos. Podem confiar nessa profissional, super recomendo.",
    source: "Google Reviews",
  },
  {
    id: "rev-05",
    author: "Tayná Barbosa dos Santos",
    role: "2 avaliações",
    rating: 5,
    timeAgo: "um ano atrás",
    comment: "A Dra. Sonaly Cristina dos Santos é uma advogada excepcional! Tem uma ótima comunicação e responde rapidamente. Possui responsabilidade e atenção em atender toda e qualquer dúvida durante o processo. Indico seu trabalho de olhos fechados!",
    source: "Google Reviews",
  },
  {
    id: "rev-06",
    author: "Leni Alves",
    role: "10 avaliações",
    rating: 5,
    timeAgo: "um ano atrás",
    comment: "Excelente profissional! Muito atenciosa, dedicada, comprometida e muito idônea. Confio e super indico essa grande profissional.",
    source: "Google Reviews",
  },
  {
    id: "rev-07",
    author: "Francisco Aguiar dos Santos",
    role: "1 avaliação",
    rating: 5,
    timeAgo: "um ano atrás",
    comment: "Indico o trabalho da Dra. Sonaly Cristina dos Santos, possui ótimo profissionalismo e ética. Recomendo o trabalho dela!",
    source: "Google Reviews",
  },
  {
    id: "rev-08",
    author: "Andresa Raquel",
    role: "2 avaliações",
    rating: 5,
    timeAgo: "4 meses atrás",
    comment: "Excelente profissional!",
    source: "Google Reviews",
  },
  {
    id: "rev-09",
    author: "Cicero Junior",
    role: "Local Guide • 15 avaliações",
    rating: 5,
    timeAgo: "um ano atrás",
    comment: "Excelente profissional, muito competente, indico demais!!!",
    source: "Google Reviews",
  },
  {
    id: "rev-10",
    author: "Taiany Barbosa",
    role: "2 avaliações",
    rating: 5,
    timeAgo: "um ano atrás",
    comment: "Super indico seu trabalho, muito competente e profissional no que faz!",
    source: "Google Reviews",
  },
  {
    id: "rev-11",
    author: "Andre Franciel Gomes",
    role: "3 avaliações",
    rating: 5,
    timeAgo: "um ano atrás",
    comment: "Mega profissional, super competente, indico muito!!",
    source: "Google Reviews",
  },
  {
    id: "rev-12",
    author: "Anna Elisa Dusi Alves",
    role: "8 avaliações",
    rating: 5,
    timeAgo: "um ano atrás",
    comment: "A melhor de todas, confio de olhos fechados e recomendo.",
    source: "Google Reviews",
  },
  {
    id: "rev-13",
    author: "Nathaly Morais",
    role: "2 avaliações",
    rating: 5,
    timeAgo: "um ano atrás",
    comment: "Profissional excelente!",
    source: "Google Reviews",
  },
];

export const EDUCATIONAL_TOPICS: Article[] = [
  {
    id: "artigo-01",
    number: "01",
    title: "Direito Penal: Como Funciona a Atuação do Advogado Criminalista no Início do Caso?",
    category: "Direito Penal & Processo Penal",
    readTime: "4 min de leitura",
    summary: "Compreenda a importância do acompanhamento técnico imediato em delegacias, audiências de custódia e no inquérito policial.",
    content: [
      "Os primeiros momentos após uma intimação policial ou uma prisão em flagrante são determinantes para os rumos de toda a persecução penal. O comparecimento desacompanhado de advogado pode gerar prejuízos irreparáveis à defesa técnica.",
      "O advogado criminalista atua verificando a estrita legalidade do procedimento, garantindo o direito constitucional ao silêncio (que jamais pode ser interpretado como confissão de culpa) e requerendo de imediato a liberdade provisória ou o relaxamento de prisões ilegais.",
      "Na audiência de custódia, realizada em até 24 horas após o flagrante, o juiz avalia a integridade física do custodiado e se há real necessidade da manutenção da prisão cautelar, sendo fundamental uma argumentação técnica sólida para a concessão da liberdade.",
    ],
    oabDisclaimer: "Conteúdo meramente informativo e pedagógico, em estrita conformidade com o Provimento 205/2021 do CFOAB.",
  },
  {
    id: "artigo-02",
    number: "02",
    title: "Partilha de Bens e Imóvel do Casal: Quem Fica com a Casa Após o Divórcio?",
    category: "Direito de Família",
    readTime: "4 min de leitura",
    summary: "Entenda os critérios jurídicos sobre a posse provisória do imóvel e as compensações devidas pela ocupação exclusiva.",
    content: [
      "Uma das dúvidas mais frequentes na ruptura conjugal diz respeito à moradia. Pela legislação brasileira, nenhum cônjuge pode ser forçado a sair da residência comum sem decisão judicial fundamentada ou acordo expresso entre as partes.",
      "Existindo filhos menores ou incapazes, o Poder Judiciário costumeiramente prioriza a manutenção da rotina e estabilidade emocional das crianças, autorizando a permanência provisória daquele que ficará com a residência habitual dos filhos até a partilha definitiva.",
      "Se um dos ex-cônjuges permanecer usufruindo com exclusividade do imóvel pertencente a ambos, a jurisprudência pacificada admite o arbitramento de aluguel proporcional em favor do outro coproprietário até que se concretize a venda ou a compensação patrimonial.",
    ],
    oabDisclaimer: "Conteúdo meramente informativo e pedagógico, em estrita conformidade com o Provimento 205/2021 do CFOAB.",
  },
  {
    id: "artigo-03",
    number: "03",
    title: "Inventário em Cartório: Quando é Possível Realizar a Partilha Extrajudicial com Rapidez?",
    category: "Direito das Sucessões",
    readTime: "4 min de leitura",
    summary: "Conheça os requisitos legais da Lei nº 11.441/2007 que possibilitam a conclusão do inventário em poucas semanas.",
    content: [
      "O inventário extrajudicial em cartório de notas é uma alternativa ágil e menos onerosa para a transmissão dos bens da herança. Para ser realizado, exige-se o consenso unânime entre todos os herdeiros e que todos sejam maiores e civilmente capazes.",
      "A presença de advogado é obrigatória por lei, podendo um único profissional representar todos os herdeiros acordados, garantindo a correta lavratura da escritura pública e a justa partilha dos quinhões hereditários.",
      "Mesmo nos casos em que existe testamento válido deixado pelo falecido, a jurisprudência recente autoriza a realização do inventário em cartório após a homologação judicial prévia do testamento, conferindo celeridade e alívio burocrático à família.",
    ],
    oabDisclaimer: "Conteúdo meramente informativo e pedagógico, em estrita conformidade com o Provimento 205/2021 do CFOAB.",
  },
  {
    id: "artigo-04",
    number: "04",
    title: "Pejotização Fraudulenta: Quando o Trabalho como PJ Configura Relação de Emprego?",
    category: "Direito do Trabalho",
    readTime: "4 min de leitura",
    summary: "Como o princípio da primazia da realidade protege profissionais contratados como pessoa jurídica de forma simulada.",
    content: [
      "A contratação de profissionais por meio de CNPJ (PJ ou MEI) para desempenhar tarefas habituais com horários pré-determinados e subordinação direta a superiores hierárquicos configura fraude à legislação trabalhista (artigo 9º da CLT).",
      "No Direito do Trabalho impera o Princípio da Primazia da Realidade: a denominação do contrato ou a emissão de notas fiscais não se sobrepõem à forma real como o serviço foi prestado no cotidiano da empresa.",
      "Uma vez demonstrada a subordinação, pessoalidade, habitualidade e onerosidade, a Justiça do Trabalho declara a nulidade da contratação PJ e condena a empresa ao registro na Carteira de Trabalho e ao pagamento de todas as verbas rescisórias e reflexos devidos.",
    ],
    oabDisclaimer: "Conteúdo meramente informativo e pedagógico, em estrita conformidade com o Provimento 205/2021 do CFOAB.",
  },
  {
    id: "artigo-05",
    number: "05",
    title: "Pensão Alimentícia e Guarda Compartilhada: Como Funciona na Realidade Prática?",
    category: "Direito de Família",
    readTime: "3 min de leitura",
    summary: "Desmistificando o mito de que guarda compartilhada extingue o dever de pagar pensão aos filhos.",
    content: [
      "A guarda compartilhada, instituída como regra pelo Código Civil, tem como objetivo dividir entre pai e mãe a tomada de decisões importantes sobre a formação dos filhos (escola, saúde, viagens e convivência), e não dividir matematicamente os dias da semana.",
      "Importante esclarecer que a fixação da guarda compartilhada não isenta o genitor do dever de prestar alimentos. A pensão alimentícia é dimensionada conforme a capacidade financeira de cada um e as necessidades essenciais da criança.",
      "O valor da pensão não possui um percentual fixo em lei (como os míticos 30%), sendo calculado caso a caso mediante análise detalhada das despesas com habitação, educação, lazer, saúde e alimentação.",
    ],
    oabDisclaimer: "Conteúdo meramente informativo e pedagógico, em estrita conformidade com o Provimento 205/2021 do CFOAB.",
  },
];

export const WORK_STEPS: Step[] = [
  {
    number: "01",
    title: "Acolhimento & Escuta Atenta",
    subtitle: "Compreensão individualizada da sua situação",
    description: "Você conversa diretamente com a Dra. Sonaly Cristina dos Santos via WhatsApp ou presencialmente em Curitiba. Analisamos detalhadamente seus documentos e o contexto específico do caso.",
  },
  {
    number: "02",
    title: "Diagnóstico Jurídico & Estratégia",
    subtitle: "Clareza total sobre caminhos e possibilidades",
    description: "Apresentamos as soluções jurídicas mais seguras e eficazes: desde a viabilidade de acordos extrajudiciais ágeis até medidas judiciais contundentes de proteção.",
  },
  {
    number: "03",
    title: "Atuação Técnica & Rigor Processual",
    subtitle: "Defesa combativa e fundamentação atualizada",
    description: "Elaboração minuciosa de peças processuais, acompanhamento em audiências, diligências perante órgãos policiais e judiciais com sólido respaldo doutrinário.",
  },
  {
    number: "04",
    title: "Acompanhamento Contínuo & Transparência",
    subtitle: "Você informado em todas as etapas",
    description: "Cada movimentação relevante do seu processo é comunicada em linguagem clara e acessível, proporcionando tranquilidade e previsibilidade do início ao fim.",
  },
];

export const FAQ_DATA: FaqCategory[] = [
  {
    id: "penal",
    label: "Direito Penal & Processo Penal",
    iconName: "ShieldAlert",
    items: [
      {
        id: "faq-p1",
        question: "O que fazer ao ser intimado para prestar depoimento em delegacia?",
        answer: "Nunca compareça a uma delegacia de polícia sem o acompanhamento prévio de um advogado criminalista. O profissional terá acesso aos autos do inquérito para conhecer o teor da investigação antes do depoimento, orientando sobre o direito de permanecer em silêncio e evitando autoincriminações precipitadas.",
      },
      {
        id: "faq-p2",
        question: "Qual a diferença prática entre Furto e Roubo?",
        answer: "O furto consiste na subtração de coisa alheia móvel sem o uso de violência ou ameaça contra a pessoa. Já o roubo ocorre quando a subtração é cometida mediante violência física, grave ameaça ou após reduzir a capacidade de resistência da vítima. O roubo possui penas significativamente mais severas e critérios mais rigorosos de persecução.",
      },
      {
        id: "faq-p3",
        question: "Como funciona a Audiência de Custódia logo após uma prisão?",
        answer: "A audiência de custódia deve ocorrer em até 24 horas contadas da comunicação do flagrante. O juiz, na presença do Ministério Público e do advogado do preso, avalia a legalidade da prisão, a ocorrência de eventuais maus-tratos e decide se o investigado responderá ao processo em liberdade (com ou sem medidas cautelares) ou se há necessidade de prisão preventiva.",
      },
    ],
  },
  {
    id: "familia",
    label: "Família & Sucessões",
    iconName: "HeartHandshake",
    items: [
      {
        id: "faq-f1",
        question: "Quando o divórcio e o inventário podem ser feitos em cartório?",
        answer: "Tanto o divórcio quanto o inventário podem ser realizados extrajudicialmente em cartório de notas desde que haja consenso total entre os envolvidos e não haja menores ou incapazes (no caso do divórcio, se já houver decisão judicial prévia sobre guarda e alimentos dos filhos, também se admite). É a via mais rápida e econômica, exigindo a assistência de advogado.",
      },
      {
        id: "faq-f2",
        question: "Posso impedir a visitação dos filhos se a pensão alimentícia estiver atrasada?",
        answer: "Não. O direito de convivência entre pais e filhos e a obrigação de prestar alimentos são institutos jurídicos distintos. A inadimplência da pensão deve ser cobrada por meio da Ação de Execução de Alimentos (que pode levar à penhora de contas/bens ou prisão civil), mas não autoriza a suspensão das visitas, sob pena de caracterização de alienação parental.",
      },
      {
        id: "faq-f3",
        question: "Eu herdo as dívidas de um familiar falecido?",
        answer: "Não com os seus bens próprios. Pela legislação brasileira, as dívidas do falecido são pagas exclusivamente com o patrimônio deixado por ele (o espólio). Se as dívidas superarem o valor total dos bens, os herdeiros não recebem herança, mas também não são obrigados a pagar o saldo remanescente com seu patrimônio pessoal.",
      },
    ],
  },
  {
    id: "trabalho",
    label: "Direito do Trabalho",
    iconName: "Briefcase",
    items: [
      {
        id: "faq-t1",
        question: "Fui contratado como PJ ou MEI, mas cumpro ordens e horário. Tenho direitos?",
        answer: "Sim. Se você cumpre rotina de trabalho habitual, recebe ordens diretas de chefia, não pode enviar outra pessoa no seu lugar e depende dessa remuneração, trata-se de contratação fraudulenta (pejotização). A Justiça do Trabalho declara a nulidade do contrato e condena a empresa ao registro da CTPS e pagamento de todos os direitos celetistas retroativos.",
      },
      {
        id: "faq-t2",
        question: "Fui demitido sem justa causa. O que a empresa tem obrigação de pagar?",
        answer: "Na dispensa imotivada, o trabalhador tem direito ao saldo de salário dos dias trabalhados, aviso prévio indenizado ou trabalhado, 13º salário proporcional, férias vencidas e proporcionais com o terço constitucional, liberação do saldo do FGTS com acréscimo da multa rescisória de 40% e entrega das guias do seguro-desemprego.",
      },
      {
        id: "faq-t3",
        question: "Qual o prazo para ingressar com uma ação na Justiça do Trabalho?",
        answer: "O trabalhador dispõe de até 2 (dois) anos após o término do vínculo de trabalho para ingressar com a reclamatória trabalhista. Nesse processo, poderá cobrar os direitos e verbas devidas dos últimos 5 (cinco) anos contados a partir da data em que distribuiu a ação.",
      },
    ],
  },
  {
    id: "atendimento",
    label: "Atendimento & Consultas",
    iconName: "Scale",
    items: [
      {
        id: "faq-a1",
        question: "Como funciona o primeiro contato com a Dra. Sonaly Cristina dos Santos?",
        answer: "O atendimento inicial pode ser iniciado pelo WhatsApp ou agendado presencialmente no escritório Paraná Office, no bairro Boa Vista em Curitiba/PR. A Dra. Sonaly analisa pessoalmente a documentação e os detalhes da sua situação com absoluto sigilo profissional, discrição e transparência.",
      },
      {
        id: "faq-a2",
        question: "O escritório atende pessoas de outras cidades do Paraná ou de outros estados?",
        answer: "Sim. Por meio do processo eletrônico unificado e reuniões virtuais seguras, a Dra. Sonaly atende com total eficácia clientes de Curitiba, Região Metropolitana, litoral, interior do Paraná e de qualquer estado do Brasil em demandas consultivas ou contenciosas.",
      },
    ],
  },
];