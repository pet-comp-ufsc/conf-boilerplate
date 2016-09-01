module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "SECCOM",
      description: "Semana Acadêmica da Computação e Sistemas",
      date: "3 a 7 de outubro",
      venue: "Auditório EPS",
      address: "Universidade Federal de Santa Catarina - Campus Trindade",
      city: "Florianópolis",
      state: "Santa Catarina"
    },

    // Site info
    site: {
      theme: "seccom",
      url: "https://github.com/pet-comp-ufsc/conf-boilerplate",
      googleanalytics: "UA-3078789-2"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'schedule',
      'speakers',
      'sponsors',
      'partners',
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Local",
      schedule: "Cronograma",
      speakers: "Palestrantes",
      sponsors: "Patrocínio",
      partners: "Parcerias",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Melissa Weber Mendonça",
        photo: "themes/seccom/img/melissa.jpg",
        bio: "Sou matemática de formação, com doutorado em Otimização e Análise Numérica, e uso programação no meu trabalho diariamente. Trabalho com diversas linguagens, entre elas Fortran, MATLAB, Python e C, com muito bash e LaTeX envolvido. Usuária de Linux desde 1998, de KDE desde 1999 e evangelista de Software Livre desde os primórdios da Internet.",
        company: "",
        link: {
          href: "http://lattes.cnpq.br/1275732441716682",
          text: "Lattes"
        },
        presentation: {
          title: "Software Livre: Passado, Presente e Futuro",
          description: "Nesta palestra, apresento um breve histórico do movimento Software Livre, suas motivações e líderes. Discutiremos a diferença entre software livre e software de código aberto, apresentaremos casos de sucesso da adoção de software livre no mercado e na ciência. Por fim, faremos uma discussão de um possível futuro para o que se entende pelas 4 liverdades.",
          time: "-"
        }
      },
      {
        name: "André Dexter Bereza",
        photo: "themes/seccom/img/foto-dexter.jpg",
        bio: "André \"Dexter\" Bereza trabalha com segurança de sistemas computacionais há mais de 8 anos. Adquiriu o grau de Mestre pesquisando a segurança e auditoria de hardwares criptográficos e grau de Bacharel pesquisando o desenvolvimento de módulos de segurança criptográfica, ambos em Ciências da Computação pela UFSC. Trabalha como líder técnico de projetos na Kryptus Segurança da Informação de Campinas-SP. Lidera projetos de defesa cibernética, software embarcado, hardwares criptográficos, gerência de chaves criptográficas, segurança de redes, certificação digital, software de alto nível, desenvolvimento mobile, homologação de equipamentos de segurança da informação.",
        company: "Kryptus",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Desenvolvimento Nacional de Hardware Criptográfico",
          description: "O desenvolvimento de hardware de propósito geral é uma tarefa complexa por si só, quando adicionamos as proteções físicas necessárias em um hardware criptográfico, a complexidade é ainda maior. Essa apresentação apresenta as proteções existentes em um hardware criptográfico: evidenciação de abertura variação de tensão, variação de temperatura, sondagem, emissão eletromagnética e outras. A apresentação também demonstra quais os desafios de se desenvolver hardware criptográfico no Brasil.",
          time: "-"
        }
      },
      {
        name: "Jean Carlo Rossa Hauck",
        photo: "themes/seccom/img/jean_hauck.png",
        bio: "Jean Hauck é doutor em Engenharia do Conhecimento e mestre em Ciência da Computação pela UFSC e graduado em Ciência da Computação pela UNIVALI. Adquiriu experiência prática na indústria liderando projetos de software para grandes clientes e com essa experiência, prestou consultorias nas áreas de Modelagem, Arquitetura e Melhoria de Processos. Em paralelo foi também professor na UNISUL e UNIVALI. Ministrou ainda diversas disciplinas de Pós-Graduação na UNISUL, UNIVALI, UNIPLAC, SOCIESC e outras. Foi pesquisador visitante no Regulated Software Research Centre - Irlanda. Atualmente é Professor no INE/UFSC e vice-coordenador do Grupo de Qualidade de Software - GQS.",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Use-Case 2.0 - Incorporando práticas ágeis aos Use-Cases",
          description: "Desde que foi inicialmente proposta, em 1987, tendo sua notação posteriormente incorporada à UML, a técnica de Casos de Uso vem sendo aplicada com muito sucesso para coleta e análise de requisitos. Entretanto, com o passar dos anos, o crescimento das abordagens ágeis desafiou a adaptação dos Casos de Uso às demandas dos novos tempos da Engenharia de Software. Como resposta a essas demandas, Use-Case 2.0 incorpora princípios e práticas de gerenciamento e modelagem ágeis aos conceitos já comprovados de Casos de Uso. Nesta palestra serão apresentados: A motivação para o Use-Case 2.0; O histórico dos casos de uso; Os seis princípios; O conceito de Use-Case Slices, e; Como utilizar esses conceitos em um ambiente de desenvolvimento de software ágil",
          time: "-"
        }
      },
      {
        name: "Nadjia Jandt Feller",
        photo: "themes/seccom/img/nadjia.jpg",
        bio: "Mestre em Engenharia de Software pelo Programa de Pós-Graduação em Computação – UFRGS (2015). Analista de TI no Centro de Processamento de Dados da UFRGS, atuando como Analista de Teste na Divisão de Teste e Conformidade (2013 - atual). Trabalhando na área de Teste de Software desde 2009, com especial interesse em Automação de Teste, Testes de Aceitação de Usuário, Testes Exploratórios, Testes Ágeis e Testes Baseados em Modelos.",
        company: "",
        link: {
          href: "nadjiafeller@gmail.com",
          text: "e-mail"
        },
        presentation: {
          title: "Teste de software: um dia você precisará dele",
          description: "A palestra tem por objetivo apresentar o (nem sempre tão) maravilhoso mundo do Teste de Software, tratando dos principais conceitos envolvidos, contextos de aplicação e técnicas para criação e execução de testes em sistemas.",
          time: "-"
        }
      },
      {
        name: "Leonardo Koller Sacht",
        photo: "themes/seccom/img/leonardo_sacht_color.jpg",
        bio: "Professor Adjunto do Departamento de Matemática da UFSC. Doutor em Matemática pelo IMPA, Mestre em Matemática (opção Computação Gráfica) pelo IMPA e Bacharel em Matemática e Computação Científica pela UFSC. Áreas de pesquisa: processamento de imagens, processamento geométrico e análise numérica.",
        company: "",
        link: {
          href: "http://lattes.cnpq.br/9919593157262527",
          text: "Lattes"
        },
        presentation: {
          title: "Jaulas Aninhadas",
          description: "Muitas tarefas em processamento de geometria e simulação física se beneficiam de hierarquias em multirresolução. Uma importante característica para uma variedade de aplicações é que as malhas mais grosseiras enjaulem estritamente as mais finas, aninhando umas às outras. Técnicas existentes como decimação de malhas de superfícies ou extração de contornos de conjuntos de nível não provêm controle suficiente sobre as superfícies resultantes e não garantem aninhamento. Nós propomos uma solução que permite o uso de decimações e métricas de qualidade que dependem da aplicação. O método constroi a próxima malha mais grosseira da hierarquia usando uma sequência de decimação, fluxo geométrico e otimização que respeita colisões. Da mais grosseira para a mais fina, cada malha resultante completamente enjaula a próxima. O método é aplicável a uma variedade de superfícies com geometria e topologia complexas. Demonstramos a efetividade de nossas jaulas aninhadas para as seguintes aplicações: resolvedores em multigrid, detecção conservativa de colisões, discretização de domínios para simulação elástica e modelagem geométrica baseada em jaulas.",
          time: "-"
        }
      },
      {
        name: "Jomi Fred Hübner",
        photo: "themes/seccom/img/JomiHubner.jpg",
        bio: "Jomi F. Hübner é professor no departamento de Automação e Sistemas da Universidade Federal de Santa Catarina. Seu principal tema de pesquisa é a programação de Sistemas Multi-Agentes (SMA). Os principais projetos de pesquisa em que participa são: Jason (um interpretador para um linguagem de programação de agentes baseada no modelo Belief-Desire-Intention), Moise (um modelo e infraestrutura para organização de SMA) e JaCaMo (uma plataforma multidimensional para programação de SMA). Participou da organização de vários eventos (ProMAS@AAMAS 2012, WESAAC 2012, IEEE/WIC/ACM WI-IAT'11, LADS 2010@MALLOW 2010 , COIN 2008@AAMAS 08, Iberagents@IBERAMIA 2006) e comitês de programa (AAMAS, EUMAS, ProMAS, COIN, AT2AI, LADS, SBIA, RFIA, APLSA, SEAS) nas suas áreas de competência.",
        company: "",
        link: {
          href: "http://jomi.das.ufsc.br",
          text: "Página pessoal"
        },
        presentation: {
          title: "Programação Orientada a Agentes",
          description: "A palestra apresenta, motiva e discute o paradigma de programação orientada a agentes. Agentes, nesse caso, são entidades de software que apresentam características que facilitam a resolução de vários problemas recentes, entre elas: autonomia, decentralização, concorrência, comportamento reativo e (ao mesmo tempo) orientado a objetivos. A partir de uma conceituação introdutória, a palestra irá ilustrar esse paradigma com a linguagem de programação Jason, procurando compará-las à outras linguagens.",
          time: "-"
        }
      },
      {
        name: "Vania Bogorny",
        photo: "themes/seccom/img/vania_bogorny.gif",
        bio: "Vania Bogorny é professora do Departamento de Informática e Estatística da Universidade Federal de Santa Catarina desde Julho de 2009, e possui Bolsa de Produtividade em Pesquisa do CNPQ desde 2008. Possui doutorado (2006) e mestrado (2001) em Ciência da Computação pela Universidade Federal do Rio Grande do Sul e graduação (1995) em Ciência da Computação pela Universidade de Passo Fundo, tendo recebido da Sociedade Brasileira de Computação o prêmio de melhor tese de doutorado em Computação no Brasil no ano de 2007. Em 2014 realizou pós-doutorado no INRIA Sophia Antipolis, França; em 2008 realizou pós-doutorado no II/UFRGS e em 2007 realizou pós-doutorado na Universidade de Hasselt, Bélgica, no contexto do projeto europeu GeoPKDD, financiado pela União Européia. Em 2012 editou um livro sobre seu tema de pesquisa atual (Introdução a Trajetórias de Objetos Móveis). Em 2010 ministrou tutorial no tema de sua pesquisa em Mineração de Dados Espaciais no segundo maior congresso internacional na área de mineração de dados (IEEE ICDM). Desde 2009 tem projetos de Cooperação Internacional financiados pelo CNPq e União Européia. Nestes projetos estabeleceu parcerias de pesquisa com o CNR de Pisa/Itália, Universidade Ca’Foscari de Veneza/Itália e Universidade de Piraeus/Grécia.  ",
        company: "",
        link: {
          href: "www.inf.ufsc.br/~vania",
          text: "Página pessoal"
        },
        presentation: {
          title: "Você sabia que seu smartphone pode revelar quem você é?",
          description: "No passado, as informações sobre os hábitos das pessoas eram obtidos através de surveys e entrevistas, como o Censo do IBGE. Hoje, em virtude da tecnologia móvel, as rotinas diárias reais das pessoas estão sendo registradas e analisadas constantemente. Estamos vivendo a era do movimento. Grandes volumes de dados da nossa rotina diária estão sendo coletados das mais diversas fontes. Ao utilizarmos um smartphone, a Google ou a Apple registram detalhadamente o caminho que percorremos, os lugares que visitamos, e o tempo que permanecemos nestes lugares. O Facebook, por exemplo, armazena os lugares onde estamos, com quem nos relacionamos, o que gostamos e o que pensamos. Pelo Twitter, registramos onde estamos e o que pensamos. Ainda, nas imagens das câmeras de segurança espalhadas pelo campus da UFSC, pela cidade, por edifícios comerciais, fica registrado o nosso movimento e nosso comportamento. São tantas as fontes de coleta de dados do nosso movimento cotidiano que a ciência está desenvolvendo diversos métodos para análise e mineração destes dados. Esta palestra tem como objetivo mostrar uma breve comparação dos diferentes tipos de dados de movimento e apresentar alguns trabalhos que vem sendo desenvolvidos na UFSC em parceria com Universidades da Itália e da Grécia como, por exemplo, classificação do perfil/comportamento de motoristas no trânsito, descoberta de indivíduos com comportamentos anormais em áreas de grande fluxo de pessoas, perfil social dos indivíduos, bem como a inferência de relacionamentos entre indivíduos com base nos seus padrões de encontro com outros indivíduos.",
          time: "-"
        }
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Kryptus",
        logo: "themes/seccom/img/kryptus.png",
        url: "http://kryptus.com"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "BrazilJS",
        logo: "themes/seccom/img/partner.png",
        url: "http://braziljs.org"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
