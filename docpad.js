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
        forkButton: {
            repository: "https://github.com/pet-comp-ufsc/conf-boilerplate"
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
						bio: "?",
						company: "UFMG"
					},
					"Guilherme Berghauser": {
						photo: "themes/seccom/img/berghauser.png",
						bio: "Estudante de Sistema de Informação pela UTFPR – Pato Branco, voluntário da Mozilla (Mozillian), participa do projeto Firefox Student Ambassador,membro do grupo de usuários de Software Livre PatoLivre, Sócio-Fundador da QiLeverage empresa especializada no desenvolvimento de softwares educacionais, foi professor durante sete anos e nos últimos quatro anos se dedica ao desenvolvimento web e mobile.",
						company: "Mozilla"
					},
					"Karina G. Roggia": {
						photo: "themes/seccom/img/karina.png",
						bio: "Possui Doutorado em Matemática pelo Instituto Superior Técnico em Lisboa, Portugal. É Bacharel e Mestre em Ciência da Computação pela Universidade Federal do Rio Grande do Sul. Foi membro do SQIG, vinculado ao Instituto de Telecomunicações em Portugal e atualmente é pesquisadora no i3G - Instituto de Governo Eletrônico, Inteligências e Sistemas. Tem experiência docente na graduação em Ciência da Computação tendo ministrado as disciplinas Teoria dos Grafos e Análise Combinatória, Linguagens Formais e Autômatos e Teoria das Categorias.",
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
						bio: "Professor do Departamento de Informática e Estatística da Universidade Federal de Santa Catarina. Doutor em Ciência da Computação pela Université de Grenoble (França). Bacharel e Mestre em Ciência da Computação pela Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS). Participa do Laboratório Internacional em Processamento de Alto Desempenho e Informática Ambiente (LICIA). Possui experiência na área de Ciência da Computação, com ênfase em Processamento Paralelo e Distribuído, atuando principalmente nos seguintes temas: modelos de programação paralela e distribuída, arquiteturas multicore e manycore, aplicações científicas paralelas, afinidade de dados e threads.",
						company: "UFSC"
					},
					"Marcelo Barbosa": {
					photo: "themes/seccom/img/firemanxbr.png",
						bio: "Evangelista open source, membro da equipe de Packager do Fedora onde atua também como Ambassador e Coordenador do L10N Brazilian Portuguese Team. Programador para soluções embedded focadas em linux e hardware ARM, atualmente envolvido com projetos de Virtualização com KVM e oVirt como também trabalhando com o buildsystem YOCTO na empresa Datacom. Sua última contribuição tem sido na portabilidade dos frameworks de visão computacional para o Fedora como também portando pacotes e bibliotecas Python para a distribuição.",
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
					"Michel Wilhelm": {
						photo: "themes/seccom/img/speaker.jpg",
						bio: "?",
						company: "Mozilla"
					},
					"Nassor P. da Silva": {
						photo: "themes/seccom/img/speaker.jpg",
						bio: "?",
						company: "Google Developers Group - Floripa"
					},
					"Sérgio Peters": {
						photo: "themes/seccom/img/speaker.jpg",
						bio: "Possui graduação, mestrado e doutorado em Engenharia Mecânica pela Universidade Federal de Santa Catarina. Atualmente é professor do Departamento de Informática e Estatística e pesquisador na área de métodos numéricos para resolução das equações diferenciais parciais que modelam o escoamento de fluidos e a transferência de calor.",
						company: "UFSC"
					},
					"Tarcísio E. M. Crocomo": {
						photo: "themes/seccom/img/cara_do_tarcisio.png",
						bio: "?",
						company: "Audaces"
					}
				},

        // The entire schedule
        schedule: [
            {
                date: "13",
                name: "Segunda",
                talks: [
                    {
                        title: "Desenvolvimento de aplicativos Firefox OS",
                        description: "?",
                        time: "10h00",
                        speaker: "Guilherme Berghauser",
                    },
                    {
                        name: "Almoço",
                        time: "12h00"
                    },
                    {
                        name: "Em breve...",
                        time: "13h30"
                    }, 
                    {
                        title: "Como contribuir com o Projeto Fedora",
                        description: "?",
                        time: "14h30",
                        speaker: "Marcelo Barbosa"
                    },
                    {
                        name: "Coffee-break",
                        time: "15h30"
                    },
                    {
                        title: "Ambient Assisted Living",
                        description: "?",
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
                        name: "Em breve...",
                        time: "13h30"
                    }, 
                    {
                        name: "Almoço",
                        time: "12h00"
                    },
                    {
                        title: "Go Lang",
                        description: "?",
                        time: "13h30",
                        speaker: "Nassor P. da Silva"
                    },
                    {
                        title: "Fedora como solução para sistemas embarcados",
                        description: "?",
                        time: "14h30",
                        speaker: "Marcelo Barbosa"
                    },
                    {
                        name: "Coffee-break",
                        time: "15h30"
                    },
                    {
                        title: "O problema de pequenos desempenhos em grandes máquinas",
                        description: "A palestra abordará os desafios na obtenção de alto desempenho com aplicações científicas em máquinas paralelas. Entre as questões a serem discutidas estão: como aplicações científicas funcionam; como plataformas paralelas de alto desempenho são organizadas; quais são as origens dos problemas de desempenho de comunicação e desbalanceamento de carga; e como podemos tratar destes problemas.",
                        time: "16h00",
                        speaker: "Laércio L. Pilla"
                    }
                ]
            },
            {
                date: "15",
                name: "Quarta",
                talks: [{
                        title: "Python parte 1",
                        description: "?",
                        time: "16h00",
                        speaker: "Tarcísio E. M. Crocomo"
                    },
                    {
                        name: "Almoço",
                        time: "12h00"
                    },
                    {
                        title: "Machine Learning",
                        description: "?",
                        time: "13h30"
                    },
                    {
                        title: "TV Digital Interativa",
                        description: "?",
                        time: "14h30",
                        speaker: "Aldo von Wangenheim"
                    },
                    {
                        name: "Coffee-break",
                        time: "15h30"
                    },
                    {
                        title: "Mozilla Developmer Network",
                        description: "?",
                        time: "16h00",
                        speaker: "Michel Wilhelm"
                    },
                    {
                        title: "Python parte 2",
                        description: "?",
                        time: "18h00",
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
                        name: "Almoço",
                        time: "12h00"
                    },
                    {
                        title: "?",
                        description: "?",
                        time: "13h30",
                        speaker: "Antônio F. Loureiro"
                    },
                    {
                        title: "Processadores Manycore...",
                        description: "?",
                        time: "14h30",
                        speaker: "Márcio B. Castro"
                    },
                    {
                        name: "Coffee-break",
                        time: "15h30"
                    },
                    {
                        name: "Em breve...",
                        time: "16h00"
                    }, 
                    {
                        name: "Em breve...",
                        time: "18h00"
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
                        name: "Almoço",
                        time: "12h00"
                    },
                    {
                        name: "Em breve...",
                        time: "13h30"
                    }, 
                    {
                        name: "Em breve...",
                        time: "14h30"
                    },
                    {
                        name: "Coffee-break",
                        time: "15h30"
                    },
                    {
                        name: "Em breve...",
                        time: "16h00"
                    }, 
                    {
                        name: "Em breve...",
                        time: "18h00"
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
