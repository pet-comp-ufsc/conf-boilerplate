module.exports = {
    prompts: false,

    // These are variables will be accessible via our templates
    templateData: {

        // Conference info
        conf: {
            name: "SECCOM",
            description: "Semana Acadêmica de Ciência da Computação",
            date: "13-17 de outubro",
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
					"Antônio A. F. Loureiro": {
						photo: "themes/seccom/img/loureiro.png",
						bio: "Possui graduação em Ciência da Computação pela Universidade Federal de Minas Gerais (1983), mestrado em Ciência da Computação pela Universidade Federal de Minas Gerais (1987) e doutorado em Ciência da Computação pela University of British Columbia, Canadá (1995). Atualmente é Professor Titular do Departamento de Ciência da Computação da Universidade Federal de Minas Gerais. Tem experiência na área de Ciência da Computação, com ênfase em sistemas distribuídos, atuando principalmente nos seguintes temas: algoritmos distribuídos, computação móvel/ubíqua, comunicação sem fio, gerenciamento de redes, redes de computadores, redes de sensores sem fio.",
						company: "UFMG",
						link: {
							href: "http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4787014Y6",
							text: "currículo lattes"
						}
					},
					"Guilherme Berghauser": {
						photo: "themes/seccom/img/berghauser.png",
						bio: "Estudante de Sistemas de Informação pela UTFPR, voluntário da Mozilla Foundation, participa do projeto Firefox Student Ambassador. Membro do grupo de usuários de software livre PatoLivre, e sócio-fundador da QiLeverage, empresa especializada no desenvolvimento de softwares educacionais. Foi professor durante sete anos e nos últimos quatro anos se dedica ao desenvolvimento web e mobile.",
						company: "Mozilla"
					},
					"Júlia Laitano": {
						photo: "themes/seccom/img/speaker.jpg",
						bio: "?",
						company: "Jointi.us"
					},
					"Karina G. Roggia": {
						photo: "themes/seccom/img/karina.png",
						bio: "Possui Doutorado em Matemática pelo Instituto Superior Técnico em Lisboa, Portugal. É Bacharel e Mestre em Ciência da Computação pela UFRGS. Foi membro do SQIG, vinculado ao Instituto de Telecomunicações em Portugal e atualmente é pesquisadora no I3G - Instituto de Governo Eletrônico, Inteligências e Sistemas. Tem experiência docente na graduação em Ciência da Computação tendo ministrado as disciplinas Teoria dos Grafos e Análise Combinatória, Linguagens Formais e Autômatos e Teoria das Categorias.",
						company: "UFSC",
						link: {
							href: "http://lattes.cnpq.br/7786281602726587",
							text: "currículo lattes"
						}
					},
					"Laércio L. Pilla": {
						photo: "themes/seccom/img/laercio.png",
						bio: "Laércio Lima Pilla é professor no Departamento de Informática e Estatística da Universidade Federal de Santa Catarina. Ele obteve seu título de Doutor em Ciência da Computação em 2014 em uma cotutela entra a Universidade Federal do Rio Grande do Sul e a Université de Grenoble na França. Seus tópicos de pesquisa envolvem escalonamento, balanceamento de carga, perfilamento de plataformas, predição de desempenho e redução de consumo de energia.",
						company: "UFSC",
						link: {
							href: "http://lattes.cnpq.br/2020489905881170",
							text: "currículo lattes"
						}
					},
					"Márcio B. Castro": {
						photo: "themes/seccom/img/marcio.png",
						bio: "Professor do Departamento de Informática e Estatística da UFSC. Doutor em Ciência da Computação pela Université de Grenoble (França). Bacharel e Mestre em Ciência da Computação pela PUC-RS. Participa do Laboratório Internacional em Processamento de Alto Desempenho e Informática Ambiente (LICIA). Possui experiência na área de Ciência da Computação, com ênfase em Processamento Paralelo e Distribuído, atuando principalmente com modelos de programação paralela e distribuída, arquiteturas multicore e manycore, aplicações científicas paralelas, afinidade de dados e threads.",
						company: "UFSC"
					},
					"Marcelo Barbosa": {
					photo: "themes/seccom/img/firemanxbr.png",
						bio: "Evangelista opensource, membro da equipe de packagers do Fedora onde atua também como Ambassador e Coordenador do L10N Brazilian Portuguese Team. Programador para soluções embarcadas focadas em Linux e hardware ARM, atualmente envolvido com projetos de virtualização com KVM e oVirt e trabalhando com o build system Yocto na empresa Datacom. Sua última contribuição tem sido na portabilidade dos frameworks de visão computacional para o Fedora e pacotes e bibliotecas Python.",
						company: "Fedora Ambassadors",
						link: {
							href: "http://www.firemanxbr.org/",
							text: "firemanxbr.org"
						}	
					},
					"Mário Dantas": {
						photo: "themes/seccom/img/dantas.png",
						bio: "?",
						company: "UFSC"
					},
					"Michel L. de Ávila": {
						photo: "themes/seccom/img/michel.png",
						bio: "Possui graduação em Sistemas de Informação pela UFSC. Tem experiência na área de Ciência da Computação, com ênfase em Metodologia e Técnicas da Computação.",
						company: "Neoway",
					},
					"Nassor P. da Silva": {
						photo: "themes/seccom/img/speaker.jpg",
						bio: "?",
						company: "Google Developers Group - Floripa"
					},
					"Rafael Plentz": {
						photo: "themes/seccom/img/speaker.jpg",
						bio: "?",
						company: "Dataprev"
					},
					"Sérgio Peters": {
						photo: "themes/seccom/img/peters.png",
						bio: "Possui graduação, mestrado e doutorado em Engenharia Mecânica pela UFSC. Atualmente é professor do Departamento de Informática e Estatística e pesquisador na área de métodos numéricos para resolução das equações diferenciais parciais que modelam o escoamento de fluidos e a transferência de calor.",
						company: "UFSC"
					},
					"Tarcísio E. M. Crocomo": {
						photo: "themes/seccom/img/cara_do_tarcisio.png",
						bio: "Formado na UFSC em Ciências (sic) da Computação, atualmente trabalha com desenvolvimento em C++ e Python na Audaces. Participou do grupo PET Computação da UFSC de 2010 a 2013.",
						company: "Audaces"
					},
					"Tiago Furtado": {
						photo: "themes/seccom/img/tiago.png",
						bio: "Bacharel e mestre em Ciência da Computação, possui sólida formação teórica e mais de 10 anos de experiência prática com desenvolvimento de sistemas para diferentes ramos de atividade. Atualmente, é full­stack developer na Meritt, onde converte café em linhas de código PHP com 100% de cobertura de testes, seguindo os conceitos de DDD e REST.",
						company: "Meritt"
					}
				},

        // The entire schedule
        schedule: [
            {
                date: "13",
                name: "Segunda",
                talks: [
										{	
                        title: "Neo4j, um banco de dados em grafos",
												description: "Importância dos grafos na modelagem de informações fortemente conectadas e uso do banco Neo4j para tal, linguagem Cypher para navegação nos grafos, exemplos práticos de uso.",
                        time: "10h00",
												speaker: "Michel L. de Ávila"
                    },
                    {
                        name: "Intervalo",
                        time: "12h00"
                    },
                    {
                        name: "Em breve...",
                        time: "13h30"
                    }, 
                    {
                        title: "Openshift Open Source Cloud",
                        description: "Uso simples e fácil do OpenShift de forma gratuita na cloud da Red Hat. O desenvolvedor cria sua conta usa a plataforma e não preocupa-se com infra-estrutura, apenas com o seu código.",
                        time: "14h30",
                        speaker: "Marcelo Barbosa"
                    },
                    {
                        name: "Coffee-break",
                        time: "15h30"
                    },
                    {
                        title: "Ambient Assisted Living",
                        description: "Apresentação dos conceitos relativos de AAL, que permite maior eficiência na monitoração e maior liberdade para pessoas vivendo em ambientes assistidos. Uma fonte de crowdsourcing antes inimaginada.",
                        time: "16h00",
                        speaker: "Mário Dantas"
                    },
                    {
                        title: "HTML, CSS e Javascript de alto desempenho",
                        description: "?",
                        time: "18h30",
                    }
                ]
            },
            {
                date: "14",
                name: "Terça",
                talks: [
                    {
                        title: "Aplicativos para Firefox OS",
                        description: "?",
                        time: "10h00",
                        speaker: "Guilherme Berghauser",
                    },
                    {
                        name: "Intervalo",
                        time: "12h00"
                    },
                    {
                        title: "Go Lang",
                        description: "?",
                        time: "13h30",
                        speaker: "Nassor P. da Silva"
                    },
                    {
                        title: "Fedora em sistemas embarcados",
                        description: "Suporte à arquitetura ARM no Fedora, vantagens, o futuro desta área, projetos interessantes e demonstração de algumas placas rodando o Fedora: Raspberry Pi B, BeagleBone Black, Cubietruck e mais.",
                        time: "14h30",
                        speaker: "Marcelo Barbosa"
                    },
                    {
                        name: "Coffee-break",
                        time: "15h30"
                    },
                    {
											title: "Testes de unidade na prática",
											description: "Por que usá-los? Como são escritos? Como automatizá-los? Serão abordados aspectos conceituais de qualidade de código, cobertura de testes e TDD, com exemplos em aplicações desenvolvidas na Meritt.",
											time: "16h00",
											speaker: "Tiago Furtado"
										},
										{
												title: "Go Lang",
												description: "?",
												time: "18:30",
												speaker: "Nassor P. da Silva"
										}
                ]
            },
            {
                date: "15",
                name: "Quarta",
                talks: [
										{
                        title: "Python parte 1",
                        description: "?",
                        time: "16h00",
                        speaker: "Tarcísio E. M. Crocomo"
                    },
                    {
                        name: "Intervalo",
                        time: "12h00"
                    },
                    {
                        title: "Machine Learning",
                        description: "?",
                        time: "13h30"
                    },
                    {
                        title: "?",
                        description: "?",
                        time: "14h30",
                        speaker: "Júlia Laitano"
                    },
                    {
                        name: "Coffee-break",
                        time: "15h30"
                    },
                    {
                        title: "O problema de pequenos desempenhos em grandes máquinas",
                        description: "Como aplicações científicas funcionam. plataformas paralelas de alto desempenho são organizadas, quais são as origens dos problemas de desempenho e como podemos tratar destes problemas.",
                        time: "16h00",
                        speaker: "Laércio L. Pilla"
                    },
                    {
                        title: "Python parte 1",
                        description: "?",
                        time: "18h30",
                        speaker: "Tarcísio E. M. Crocomo"
                    }
                ]
            },
            {
                date: "16",
                name: "Quinta",
                talks: [
                    {
                        title: "Node.JS",
                        description: "?",
                        time: "10h00"
                    },
                    {
                        name: "Intervalo",
                        time: "12h00"
                    },
                    {
                        title: "?",
                        description: "?",
                        time: "13h30",
                        speaker: "Antônio F. Loureiro"
                    },
                    {
                        title: "Processadores manycore de baixo consumo",
                        description: "A tendência atual é o crescimento da quantidade de cores, futuro da computação de alto desempenho, alternativa para aliar desempenho e baixo consumo usando processadores manycore, conceitos e motivos para uso.",
                        time: "14h30",
                        speaker: "Márcio B. Castro"
                    },
                    {
                        name: "Coffee-break",
                        time: "15h30"
                    },
                    {
                        title: "Buscas jurídicas utilizando ontologias e multilinguismo",
												description: "Apresentação do sistema Ontojuris associado ao projeto TECLIN, iniciativa para preservação e difusão de culturas minoritárias. Universal Network Language, possíveis aplicações e implementação com o sistema apresentado.",
                        time: "16h00",
												speaker: "Karina G. Roggia"
                    }, 
                    {
                        title: "Python parte 2",
                        description: "?",
                        time: "18h30",
                        speaker: "Tarcísio E. M. Crocomo"
                    },
                ]
            },
            {
                date: "17",
                name: "Sexta",
                talks: [
                    {
                        name: "Em breve...",
                        time: "10h00"
                    },
										{
                        title: "Neo4j, um banco de dados em grafos",
												description: "Importância dos grafos na modelagem de informações fortemente conectadas e uso do banco Neo4j para tal, linguagem Cypher para navegação nos grafos, exemplos práticos de uso.",
                        time: "10h00",
												speaker: "Michel L. de Ávila"
                    },
                    {
                        name: "Intervalo",
                        time: "12h00"
                    },
                    {
                        title: "Bases de dados de grande porte e seus desafios na Dataprev",
                        time: "13h30",
												speaker: "Rafael Plentz"
                    }, 
                    {
                        title: "Processamento em larga escala com Spring Batch",
                        time: "14h30",
												speaker: "Rafael Plentz"
                    },
                    {
                        name: "Coffee-break",
                        time: "15h30"
                    },
                    {
                        title: "Aplicação do cálculo numérico na computação",
												description: "A computação está baseada em diversos princípios matemáticos: lógica, álgebra, cálculo, etc. O cálculo numérico permite a obtenção de soluções aproximadas de problemas sem soluções exatas conhecidas.",
                        time: "16h00",
												speaker: "Sérgio Peters"
                    }, 
                    {
                        name: "Em breve...",
                        time: "18h30"
                    },
                ]
            }
        ],
        
				// List of Sponsors
				sponsors: [
					{
						name: "Chaordic",
						logo: "themes/seccom/img/chaordic.png",
						url: "http://chaordic.com.br"
					},
					{
						name: "Dataprev",
						logo: "themes/seccom/img/dataprev.png",
						url: "http://dataprev.gov.br"
					},
					{
						name: "Meritt",
						logo: "themes/seccom/img/meritt.png",
						url: "http://meritt.com.br"
					}
				],

				// List of Partners
				partners: [
					{
						name: "GDG Florianópolis",
						logo: "themes/seccom/img/gdg.png",
						url: "https://developers.google.com/groups/chapter/109245804055148797587/"
					},
					{
						name: "Mozilla",
						logo: "themes/seccom/img/mozilla.png",
						url: "https://mozilla.org"
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
