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
      // (template)
      //----------------------------------------------------------------------
      // {
      //   name: "",
      //   photo: "themes/seccom/img/",
      //   bio: "",
      //   company: "",
      //   link: {
      //     href: "",
      //     text: ""
      //   },
      //   presentation: {
      //     title: "",
      //     description: "",
      //     day: "",
      //     time: ""
      //   }
      // },
      //----------------------------------------------------------------------
      // Segunda-feira
      //----------------------------------------------------------------------
      {
        name: "Josué Ramos",
        photo: "themes/seccom/img/josueRamos.jpg",
        bio: "Formação Academica: Graduação Eng Eletrica UFSC-1979; Mestrado em Robótica Unicamp 1986; Doutorado - Dirigiveis Robóticos UFSC 2002, com estágio sanduíche na Carnegie Mellon University (CMU); Pós Doutorados: 2004 - Veiculos Robóticos (CMU) e 2013 -Interação Humano Robô (CMU). Area de atuação: Desde 1983 é pesquisador ná área de robótica no CTI (Centro Tecnologia  da Informação Renato Archer) do Ministério da Ciência e Tecnologia e Inovação. Atua em robôs manipuladores, veículos aéreos não tripulados, veículos robóticos terrestres, robótica pedagógica de baixo custo, e interação humano robô. Participou do Projeto AURORA (dirigivel robótico)  que realizou um dos primeiros ôos de VANT no Brasil em 2000. Atualmente é Tecnologista Senior do CTI Renato Archer, pesquisador principal do projeto Fapesp Informações Não Verbais aplicado a um Robô Recepcionista, iniciado em 2014, que objetiva o desenvolvimento de atividades na área de Interação Humano Robô.",
        company: "",
        link: {
          href: "https://sites.google.com/site/josuejgramos/",
          text: "Página pessoal"
        },
        presentation: {
          title: "Temos Empatia por Robôs? E a area Interação Humano Robô com isso?",
          description: "Objetivo da palestra é apresentar a área de Interação Humano Robô e tratar dos aspectos relacionados ao desenvolvimento de Empatia, que a diferencia de outras áreas.",
          day: "Segunda",
          time: "13h30"
        }
      },
      {
        name: "Coffe-break",
        day: "Segunda",
        time: "15h30"
      },
      //----------------------------------------------------------------------
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
          day: "Segunda",
          time: "16h00"
        }
      },
      {
        name: "Coffe-break",
        day: "Segunda",
        time: "18h00"
      },
      //----------------------------------------------------------------------
      {
        name: "Alex Sandro Roschildt Pinto",
        photo: "themes/seccom/img/Alex-Pinto1.jpg",
        bio: "Alex Sandro Roschildt Pinto é bacharel em Ciências da Computação (UFPel), Mestre em Ciências da Computação (UFSC) e Doutor em Engenharia Elétrica (UFSC). Realizou Pós-Doutorado no ICMC-USP. Atualmente é professor do curso de Engenharia de Controle e Automação da UFSC Blumenau. Já publicou mais de 50 papers (artigos em periódicos, capítulos de livro e artigos em eventos) e recebeu 3 prêmios IEEE.",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Fusão de Dados Para Internet das Coisas (IoT)",
          description: "Ambientes de Internet das Coisas (IoT) usualmente geram uma grande massa de dados. Se em ambientes restritos, como em uma Rede de Sensores sem Fio, o volume de dados já é uma preocupação, em ambientes integrados com a Internet, como o conceito de IoT, essa preocupação é ainda maior. Atualmente as estimativas são que 9 bilhões de dispositivos estejam conectados a Internet e que este numero possa chegar entre 24 bilhões e 50 bilhões em 2020. O volume de dados que estes dispositivos podem gerar tanto no processo de armazenamento e processamento como no processo de transmissão são incalculáveis, pois teremos desde dados binários até dados multimídia. O consumo de energia envolvido nos dias atuais com todo o tráfego de dados na Internet no mundo é em torno de 5% de toda a energia produzida. Logo, processos de agregação e fusão de dados em sensores podem ajudar a diminuir e controlar estes dados em ambientes IoT. Nesta Palestra serão apresentados os principais desafios e oportunidades em Fusão de Dados para Internet das Coisas.",
          day: "Segunda",
          time: "18h30"
        }
      },
      //----------------------------------------------------------------------
      {
        name: "Elder Santos",
        photo: "themes/seccom/img/elder_santos.jpg",
        bio: "Possui graduação em Bacharelado em Ciência da Computação pela Universidade de Caxias do Sul (2003), mestrado em Computação pela Universidade Federal do Rio Grande do Sul (2006) e doutorado em Computação pela Universidade Federal do Rio Grande do Sul (2010). Atualmente é professor adjunto da Universidade Federal de Santa Catarina. Tem experiência na área de Ciência da Computação, com ênfase em Inteligência Artificial, atuando principalmente nos seguintes temas: agentes, sistemas multi-agentes, ontologias e informática na educação.",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Criatividade Computacional",
          description: "A palestra visa apresentar um panorama da área de criatividade computacional com ênfase nas suas aplicações mais notáveis, seus principais modelos e formas para integrar criatividade e inteligência computacional para resolver ou lidar com problemas de difícil modelagem.",
          day: "Terça",
          time: "13h30"
        }
      },
      //----------------------------------------------------------------------
      {
        name: "Renato Fileto",
        photo: "themes/seccom/img/Fileto2016.jpg",
        bio: "O professor Renato Fileto tem doutorado em Computação pelo IC/Unicamp, com estágio sanduíche no Georgia Tech (EUA), e pós-doutorado pelo ICMC/USP. Tem experiência em empresas e instituições de pesquisa e ensino superior, com mais de 60 artigos publicados e algumas contribuições para inovação na indústria. Sua área de pesquisa é bancos de dados, com foco em semântica para catalogação, recuperação, integração e análise de dados. Seus temas de pesquisa atualmente incluem anotações semânticas, contextos, sistemas baseados em conhecimento e extensões espaço-temporais e semânticas para data warehouses.",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Anotação semântica de dados na Web",
          description: "Anotações semânticas associam (trechos de) objetos digitais (tais como passagens de livros, segmentos de imagens, trechos de vídeos ou séries temporais) a recursos de bases de conhecimento com semântica bem definida (tais como objetos, conceitos ou simplesmente palavras com certo significado). Esta palestra fornece uma visão geral dos principais conceitos e técnicas relacionados com anotação semântica de textos não estruturados e de dados espaciais e temporais (conteúdos de bibliotecas digitais, trajetórias de objetos móveis e postagens em mídias sociais), com ênfase em anotações apontando para recursos de ontologias, coleções de dados ligados (DBPedia, LinkedGeoData, etc.) e bases léxicas (WordNet, VerbNet, etc.). A palestra revisa alguns métodos e ferramentas para anotação semântica automática, desafios atuais e conclui com projetos do grupo de pesquisa em bancos de dados do INE/UFSC.",
          day: "Terça",
          time: "14h30"
        }
      },
      {
        name: "Coffe-break",
        day: "Terça",
        time: "15h30"
      },
      //----------------------------------------------------------------------
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
          day: "Terça",
          time: "16h00"
        }
      },
      //----------------------------------------------------------------------
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
          day: "Terça",
          time: "17h00"
        }
      },
      {
        name: "Coffe-break",
        day: "Terça",
        time: "18h00"
      },
      //----------------------------------------------------------------------
      // Quarta-feira
      //----------------------------------------------------------------------
      {
        name: "Pedro H. Penna",
        photo: "themes/seccom/img/sem_foto.jpg",
        bio: "Pedro H. Penna é estudante de mestrado em Ciência da Computação na Universidade Federal de Santa Catarina (UFSC) e pesquisador no Laboratório de Pesquisa em Sistemas Distribuídos (LaPeSD). Recebeu seu título de Bacharel em Ciência da Computação pela Pontifícia Universidade Católica de Minas Gerais (PUC Minas) em 2015, com os prêmios de Láurea Acadêmica (Summa Cum Laude) e Aluno Destaque em Ciência da Computação pela Sociedade Brasileira de Computação (SBC). Pedro possui experiência em pesquisa na área de Sistemas Operacionais, Arquitetura de Computadores e Computação de Alto Desempenho, atuando pontualmente nos seguintes tópicos: Balanceamento de Carga de Trabalho; Mapeamento de Threads; Computação de Alto Desempenho e Eficiência Energética",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "O Sistema Operacional Nanvix",
          description: "",
          day: "Quarta",
          time: "14h30"
        }
      },
      {
        name: "Coffe-break",
        day: "Quarta",
        time: "15h30"
      },
      {
        name: "Coffe-break",
        day: "Quarta",
        time: "18h00"
      },
      //----------------------------------------------------------------------
      // Quinta-feira
      //----------------------------------------------------------------------
      {
        name: "Mário Dantas",
        photo: "themes/seccom/img/dantas.png",
        bio: "Mario Dantas é Professor Titular do Departamento de Informática e Estatística (INE), do Programa de Pós-Graduação em Ciência da Computação (PPGCC) e Engenharia e Gestão do Conhecimento (PPGEGC), no Centro Tecnológico (CTC), da Universidade Federal de Santa Catarina (UFSC). Com doutorado em Ciência da Computação pela University of Souhtampton (UK), estágio pós-doutoral e visiting professor na University of Western Ontario (Canada). O Professor Dantas é autor de três livros e inúmeros artigos científicos publicados no Brasil, Alemanha, Áustria, Bélgica, Canadá, Chipre, Croacia, Estados Unidos, Finlândia, França,Grécia, Holanda, Inglaterra, Italia, Marrocos, México, Portugal, Rússia, Suíça, Tailândia e Tunísia nas áreas de redes de computadores, computação móvel e computação paralela e distribuída de alto desempenho. Em adição aos artigos, tem treze capítulos em livros editados nos Alemanha, Canadá, EUA, Holanda e Inglaterra sobre os tópicos de computação distribuída. Estes trabalhos renderam três prêmios internacionais e três nacionais. Mario Dantas foi Professor da Universidade de Brasília (UnB), além de ter trabalhado por mais de dez anos na Petrobrás (Departamento de Produção) e no Centro Tecnológico do Exército (Ctex), no suporte a ambientes de rede e ao desenvolvimento de aplicações distribuídas. Na UFSC têm atuado nos programas de Pos-Graduação de Ciência da Computação (PPGCC) e Engenharia e Gestão do Conhecimento (PPGEGC), cursos de especialização e graduação. Prof. Dantas já orientou inúmeros trabalhos de graduação, especialização, mestrado e doutorado em tópicos relativos à área de sistema de computação. Em adição, o Prof. Dantas tem atuado como consultor em diferentes projetos de pesquisa com a indústria nas áreas de redes, sistemas distribuídos, ambientes de alto desempenho e Internet of Things (IoT).",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Fog Computing: Um novo paradigma computacional?",
          description: "Nesta palestra vamos abordar os desafios relativos ao processamento paralelo e distribuído, armazenamento e big data sob um prisma, de uma nova de abordagem de alto desempenho local, denominada de fog computing. A ideia é apresentar o diferencial da abordagem de fog computing com relação a outros paradigmas como cluster e cloud computing.",
          day: "Quinta",
          time: "13h30"
        }
      },
      //----------------------------------------------------------------------
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
          day: "Quinta",
          time: "14h30"
        }
      },
      {
        name: "Coffe-break",
        day: "Quinta",
        time: "15h30"
      },
      //----------------------------------------------------------------------
      {
        name: "Rafael Weingärtner",
        photo: "themes/seccom/img/sem_foto.jpg",
        bio: "Membro do PMC (Project management committee) e Committer do projeto Apache CloudStack. Trabalha a mais de três anos com ambientes de computação em nuvem criadas com a ferramenta de orquestração Apache CloudStack. Atuou como desenvolvedor Java Web para o projeto SAJ (sistema de automação da justiça) da empresa Softplan. Além disso, durante o mestrado, atuou como assistente de pesquisa para a Rede Nacional em Segurança da Informação e Criptografia (RENASIC). Também possui algumas certificações técnicas, como: Sun Certified Programmer para a Plataforma Java, SE 6 (CX-310-065); Oracle Certified Professional, Java EE 5 Web Component Developer (CX-310-083); A Oracle Certified Expert, Java Platform Enterprise Edition 6, Web Services Developer (1Z0-897).",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Utilização de agentes autônomos para o gerenciamento de ambientes de computação em nuvem",
          description: "Nos últimos anos, o uso de computação em nuvem (CN) tem aumentado. Para atender o aumento da demanda, a infraestrutura necessária para criar e manter ambientes de CN cresce constantemente, o que impacta nos custos de gestão. Além disso, o processo de otimização desses ambientes é inviável de ser realizado por administradores, exigindo uma abordagem autônoma. Com o intuito de fornecer uma plataforma para gerenciar os ambientes de computação em nuvem foi criado o projeto Autonomiccs. O projeto fornece uma arquitetura para criar heurísticas utilizadas por agentes para selecionar servidores físicos para serem ativados ou desativados, mapear e realizar migrações de máquinas virtuais. Além disso, a plataforma Autonomiccs é capaz de distribuir o processamento e execução de ações de maneira transparente, utilizando a tecnologia de sistemas multiagente. A palestra aborda a criação da plataforma Autonomiccs, sua arquitetura e limitações e seus pontos de extensão.",
          day: "Quinta",
          time: "17h00"
        }
      },
      {
        name: "Coffe-break",
        day: "Quinta",
        time: "18h00"
      },
      //----------------------------------------------------------------------
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
          day: "Quinta",
          time: "18h30"
        }
      },

      //----------------------------------------------------------------------
      // Sexta-feira 
      //----------------------------------------------------------------------
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
          day: "Sexta",
          time: "14h30"
        }
      },
      {
        name: "Coffe-break",
        day: "Sexta",
        time: "15h30"
      },
      //----------------------------------------------------------------------
      {
        name: "Gustavo Zomer",
        photo: "themes/seccom/img/gustavo_blueticket.jpg",
        bio: "Gustavo Zomer é Engenheiro de Controle e Automação pela Universidade Federal de Santa Catarina (UFSC). Tem mais de 5 anos de experências criando novos produtos digitais e startups, ajudando outros empreendedores a tirarem a ideia do papel e criando novos produtos Web e Mobile. Empreendedor por natureza, fundou a MoreCerto e ganhou o Programa Sinapse de Inovação, além de ter criado uma das primeiras startups de Realidade Aumentada do Brasil. Hoje atua como Head de Produto na Blueticket, ajudando a empresa a entregar novos produtos e soluções ao mesmo tempo que busca renovação da tecnologia para garantir escalabilidade dos produtos.",
        company: "blueticket",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Porquê você não deve iniciar sua Startup com Micro Services?",
          description: "Um dos temas mais discutidos atualmente é a construção de novas aplicações utilizando a arquitetura de Micro Services. Os benefícios são muitos: separação de regras de negócio em cada contexto, resiliência e flexibilidade, alta escalabilidade, facilidade de realizar deploy, flexibilidade de escolha de tecnologias e por aí vai. O problema é que muitas startups estão começando seus projetos e construindo uma arquitetura em micro-services, esquecendo um ponto fundamental: seu maior problema é construir uma aplicação que os seus usuários irão ter interesse de usar. O objetivo desta palestra é destacar os pontos positivos e negativos dessa nova arquitetura e mostrar que você não deve começar um novo projeto com micro services, mesmo que você saiba que sua aplicação irá ficar grande o bastante para valer a pena.",
          day: "Sexta",
          time: "17h00"
        }
      },
      //----------------------------------------------------------------------
      // Não-confirmados
      //----------------------------------------------------------------------
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
          day: "",
          time: ""
        }
      },
      //----------------------------------------------------------------------
      {
        name: "Rodrigo Oliveira",
        photo: "themes/seccom/img/rodrigo_supero.jpg",
        bio: "Mais de 10 anos de profissão e especialização em produtos Oracle, atuação em projetos de concepção ou melhorias de sistemas aplicativos personalizados e soluçõs Oracle Cloud para empresas da região Sul e Sudeste do país. Certificado pelo PMI® como PMP® - Project Management Professional. MBA em Gerenciamento de Projetos, Gestão Empresarial e Bacharel em Sistemas de Informação, sólidos conhecimentos em gestão de projetos de sistemas aplicativos e implementação de produtos Oracle.",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Inovação Oracle Cloud",
          description: "Nesta apresentação vou compartilhar experiências e contar um pouco do mundo de Cloud Computing para os alunos da UFSC e mostrar as tendências de TI para os futuros profissionais dessa área.",
          day: "",
          time: ""
        }
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Kryptus",
        logo: "themes/seccom/img/kryptus.png",
        url: "http://kryptus.com"
      },
      {
        name: "Supero",
        logo: "themes/seccom/img/supero.png",
        url: "http://www.supero.com.br/supero/"
      },
      {
        name: "blueticket",
        logo: "themes/seccom/img/blueticket.png",
        url: "http://www.blueticket.com.br"
      }
    ],

    // List of Partners
    partners: [
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
