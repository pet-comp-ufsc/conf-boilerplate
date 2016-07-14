module.exports = {
    prompts: false,

    // These are variables will be accessible via our templates
    templateData: {

        // Conference info
        conf: {
            name: "SECCOM",
            description: "Semana Acadêmica de Ciência da Computação",
            date: "3 a 7 de outubro",
            // If your event is free, just comment this line
            // price: "$100",
            venue: "Auditório EPS - UFSC",
            address: "Universidade Federal de Santa Catarina",
            city: "Florianópolis",
            state: "Santa Catarina"
        },

        // The Call To Action button at the header,
        // If you don't want this, just remove the callToAction property.
        // callToAction: {
        //     text: "Register now!",
        //     link: "http://eventick.com.br"
        // },

        // "Fork me on GitHub", if you don't want this, just remove the forkButton property
        // forkButton: {
        //     repository: "https://github.com/pet-comp-ufsc/conf-boilerplate"
        // },

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
            'partners'
            // 'contact'
        ],

        // Labels which you can translate to other languages
        labels: {
            about: "Sobre",
            location: "Localização",
            speakers: "Palestrantes",
            schedule: "Agenda",
            sponsors: "Patrocínio",
            partners: "Apoio",
            contact: "Contato"
        },

        speakers: {
          "Vania Bogorny": {
            photo: "themes/seccom/img/vania_bogorny.png",
            bio: "Vania Bogorny é professora do Departamento de Informática e Estatística da Universidade Federal de Santa Catarina desde Julho de 2009, e possui Bolsa de Produtividade em Pesquisa do CNPQ desde 2008. Possui doutorado (2006) e mestrado (2001) em Ciência da Computação pela Universidade Federal do Rio Grande do Sul e graduação (1995) em Ciência da Computação pela Universidade de Passo Fundo, tendo recebido da Sociedade Brasileira de Computação o prêmio de melhor tese de doutorado em Computação no Brasil no ano de 2007. Em 2014 realizou pós-doutorado no INRIA Sophia Antipolis, França; em 2008 realizou pós-doutorado no II/UFRGS e em 2007 realizou pós-doutorado na Universidade de Hasselt, Bélgica, no contexto do projeto europeu GeoPKDD, financiado pela União Européia. Em 2012 editou um livro sobre seu tema de pesquisa atual (Introdução a Trajetórias de Objetos Móveis). Em 2010 ministrou tutorial no tema de sua pesquisa em Mineração de Dados Espaciais no segundo maior congresso internacional na área de mineração de dados (IEEE ICDM). Desde 2009 tem projetos de Cooperação Internacional financiados pelo CNPq e União Européia. Nestes projetos estabeleceu parcerias de pesquisa com o CNR de Pisa/Itália, Universidade Ca’Foscari de Veneza/Itália e Universidade de Piraeus/Grécia.",
            company: "UFSC",
            link: {
              href: "http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4703628P9",
              text: "currículo lattes"
            }
          },
          "Leonardo Koller Sacht": {
              photo: "themes/seccom/img/leonardo_sacht_color.jpg",
              bio: "Professor Adjunto do Departamento de Matemática da UFSC. Doutor em Matemática pelo IMPA, Mestre em Matemática (opção Computação Gráfica) pelo IMPA e Bacharel em Matemática e Computação Científica pela UFSC. Áreas de pesquisa: processamento de imagens, processamento geométrico e análise numérica.",
              company: "UFSC",
              link: {
                  href: "http://lattes.cnpq.br/9919593157262527",
                  text: "currículo lattes"
              }
          },
          "Renato Fileto": {
              photo: "themes/seccom/img/leonardo_sacht_color.jpg",
              bio: "O professor Renato Fileto tem doutorado em Computação pelo IC/Unicamp, com estágio sanduíche no Georgia Tech (EUA), e pós-doutorado pelo ICMC/USP. Tem experiência em empresas e instituições de pesquisa e ensino superior, com mais de 60 artigos publicados e algumas contribuições para inovação na indústria. Sua área de pesquisa é bancos de dados, com foco em semântica para catalogação, recuperação, integração e análise de dados. Seus temas de pesquisa atualmente incluem anotações semânticas, contextos, sistemas baseados em conhecimento e extensões espaço-temporais e semânticas para data warehouses.",
              company: "UFSC",
              // link: {
              //     href: "",
              //     text: "currículo lattes"
              // }
          },
        },

        // The entire schedule
        schedule: [
            {
                date: "--", // 13
                name: "----", // Segunda
                talks: [
                    {  
                        title: "Você sabia que seu smartphone pode revelar quem você é?",
                        description: "No passado, as informações sobre os hábitos das pessoas eram obtidos através de surveys e entrevistas, como o Censo do IBGE. Hoje, em virtude da tecnologia móvel, as rotinas diárias reais das pessoas estão sendo registradas e analisadas constantemente. Estamos vivendo a era do movimento. Grandes volumes de dados da nossa rotina diária estão sendo coletados das mais diversas fontes. Ao utilizarmos um smartphone, a Google ou a Apple registram detalhadamente o caminho que percorremos, os lugares que visitamos, e o tempo que permanecemos nestes lugares. O Facebook, por exemplo, armazena os lugares onde estamos, com quem nos relacionamos, o que gostamos e o que pensamos. Pelo Twitter, registramos onde estamos e o que pensamos. Ainda, nas imagens das câmeras de segurança espalhadas pelo campus da UFSC, pela cidade, por edifícios comerciais, fica registrado o nosso movimento e nosso comportamento. São tantas as fontes de coleta de dados do nosso movimento cotidiano que a ciência está desenvolvendo diversos métodos para análise e mineração destes dados. Esta palestra tem como objetivo mostrar uma breve comparação dos diferentes tipos de dados de movimento e apresentar alguns trabalhos que vem sendo desenvolvidos na UFSC em parceria com Universidades da Itália e da Grécia como, por exemplo, classificação do perfil/comportamento de motoristas no trânsito, descoberta de indivíduos com comportamentos anormais em áreas de grande fluxo de pessoas, perfil social dos indivíduos, bem como a inferência de relacionamentos entre indivíduos com base nos seus padrões de encontro com outros indivíduos.",
                        time: "--h--",
                        speaker: "Vania Bogorny"
                    },
                    {
                        title: "Jaulas Aninhadas",
                        description: "Muitas tarefas em processamento de geometria e simulação física se beneficiam de hierarquias em multirresolução. Uma importante característica para uma variedade de aplicações é que as malhas mais grosseiras enjaulem estritamente as mais finas, aninhando umas às outras. Técnicas existentes como decimação de malhas de superfícies ou extração de contornos de conjuntos de nível não provêm controle suficiente sobre as superfícies resultantes e não garantem aninhamento. Nós propomos uma solução que permite o uso de decimações e métricas de qualidade que dependem da aplicação. O método constroi a próxima malha mais grosseira da hierarquia usando uma sequência de decimação, fluxo geométrico e otimização que respeita colisões. Da mais grosseira para a mais fina, cada malha resultante completamente enjaula a próxima. O método é aplicável a uma variedade de superfícies com geometria e topologia complexas. Demonstramos a efetividade de nossas jaulas aninhadas para as seguintes aplicações: resolvedores em multigrid, detecção conservativa de colisões, discretização de domínios para simulação elástica e modelagem geométrica baseada em jaulas.",
                        time: "--h--",
                        speaker: "Leonardo Koller Sacht"
                    },
                    {
                        title: "Anotação semântica de dados na Web",
                        description: "Anotações semânticas associam (trechos de) objetos digitais (tais como passagens de livros, segmentos de imagens, trechos de vídeos ou séries temporais) a recursos de bases de conhecimento com semântica bem definida (tais como objetos, conceitos ou simplesmente palavras com certo significado). Esta palestra fornece uma visão geral dos principais conceitos e técnicas relacionados com anotação semântica de textos não estruturados e de dados espaciais e temporais (conteúdos de bibliotecas digitais, trajetórias de objetos móveis e postagens em mídias sociais), com ênfase em anotações apontando para recursos de ontologias, coleções de dados ligados (DBPedia, LinkedGeoData, etc.) e bases léxicas (WordNet, VerbNet, etc.). A palestra revisa alguns métodos e ferramentas para anotação semântica automática, desafios atuais e conclui com projetos do grupo de pesquisa em bancos de dados do INE/UFSC.",
                        time: "--h--",
                        speaker: "Renato Fileto"
                    }, 
                    {
                        title: "Métodos Formais Aplicados: Roubando um Banco com um Provador de TeoremasOpenshift Open Source Cloud",
                        description: "",
                        time: "--h--",
                        speaker: "Jean Everson Martina"
                    },
                ]
            },
        ],
        
        // List of Sponsors
        sponsors: [
          // {
          //   name: "Chaordic",
          //   logo: "themes/seccom/img/chaordic.png",
          //   url: "http://chaordic.com.br"
          // },
        ],

        // List of Partners
        partners: [
          // {
          //   name: "GDG Florianópolis",
          //   logo: "themes/seccom/img/gdg.png",
          //   url: "https://developers.google.com/groups/chapter/109245804055148797587/"
          // },
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
