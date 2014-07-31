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
		
		speakers: [
			// 0
			{
				name: "Aldo von Wangenheim",
				photo: "themes/seccom/img/speaker.jpg",
				bio: "?",
				company: "?",
				link: {
					href: "?",
					text: "?"
				}
			},
			{
				name: "Antônio A. F. Loureiro",
				photo: "themes/seccom/img/speaker.jpg",
				bio: "?",
				company: "?",
				link: {
					href: "?",
					text: "?"
				}
			},
			{
				name: "Guilherme Berghauser",
				photo: "themes/seccom/img/speaker.jpg",
				bio: "?",
				company: "?",
				link: {
					href: "?",
					text: "?"
				}
			},
			// 3
			{
				name: "Karina G. Roggia",
				photo: "themes/seccom/img/speaker.jpg",
				bio: "?",
				company: "?",
				link: {
					href: "?",
					text: "?"
				}
			},
			{
				name: "Laércio L. Pilla",
				photo: "themes/seccom/img/speaker.jpg",
				bio: "Laércio Lima Pilla é professor no Departamento de Informática e Estatística da Universidade Federal de Santa Catarina. Ele obteve seu título de Doutor em Ciência da Computação em 2014 em uma cotutela entra a Universidade Federal do Rio Grande do Sul e a Université de Grenoble na França. Seus tópicos de pesquisa envolvem escalonamento, balanceamento de carga, perfilamento de plataformas, predição de desempenho e redução de consumo de energia.",
				company: "?",
				link: {
					href: "http://lattes.cnpq.br/2020489905881170",
					text: "lattes.cnpq.br/2020489905881170"
				}
			},
			{
				name: "Márcio B. Castro",
				photo: "themes/seccom/img/speaker.jpg",
				bio: "Professor do Departamento de Informática e Estatística da Universidade Federal de Santa Catarina (UFSC). Doutor em Ciência da Computação pela Université de Grenoble (França). Bacharel e Mestre em Ciência da Computação pela Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS). Recebeu título de Láurea Acadêmica da PUCRS e prêmio de Aluno Destaque da Sociedade Brasileira de Computação (SBC) em 2006 devido ao destacado aproveitamento acadêmico em atividades de ensino, pesquisa e extensão durante a graduação. Conquistou o prêmio de melhor tese de doutorado do Concurso de Teses e Dissertações em Arquitetura de Computadores e Computação de Alto Desempenho (WSCAD-CTD) em 2013. Realizou pós-doutorado em 2013 no Institut National de Recherche en Informatique et en Automatique (INRIA), França. Posteriormente, realizou pós-doutorado no Grupo de Processamento Paralelo e Distribuído (GPPD) da Universidade Federal do Rio Grande do Sul (UFRGS). Participa do Laboratório Internacional em Processamento de Alto Desempenho e Informática Ambiente (LICIA), o qual reúne pesquisadores do Instituto de Informática da UFRGS e do Laboratoire d'Informatique de Grenoble (LIG). Possui experiência na área de Ciência da Computação, com ênfase em Processamento Paralelo e Distribuído, atuando principalmente nos seguintes temas: modelos de programação paralela e distribuída, arquiteturas multicore e manycore, aplicações científicas paralelas, afinidade de dados e threads.",
				company: "?",
				link: {
					href: "?",
					text: "?"
				}
			},
			// 6
			{ 
				name: "Marcelo Barbosa",
				photo: "themes/seccom/img/speaker.jpg",
				bio: "?",
				company: "Fedora Ambassadors",
				link: {
					href: "http://www.firemanxbr.org/",
					text: "firemanxbr.org"
				},
			},
			{
				name: "Mário Dantas",
				photo: "themes/seccom/img/speaker.jpg",
				bio: "?",
				company: "?",
				link: {
					href: "?",
					text: "?"
				},
			},
			{
				name: "Michel Wilhelm",
				photo: "themes/seccom/img/speaker.jpg",
				bio: "?",
				company: "?",
				link: {
					href: "?",
					text: "?"
				}
			},
			// 9
			{
				name: "Nassor P. da Silva",
				photo: "themes/seccom/img/speaker.jpg",
				bio: "?",
				company: "?",
				link: {
					href: "?",
					text: "?"
				},
			},
			{
				name: "Sérgio Peters",
				photo: "themes/seccom/img/speaker.jpg",
				bio: "Possui graduação em Engenharia Mecânica pela Universidade Federal de Santa Catarina (1986), mestrado em Engenharia Mecânica pela Universidade Federal de Santa Catarina (1989) e doutorado em Engenharia Mecânica pela Universidade Federal de Santa Catarina (1994). Ocupou diversos cargos administrativos como, chefe e sub-chefe de departamento, coordenador de curso e Diretor Geral do novo Campus UFSC na cidade de Araranguá SC, de fevereiro de 2009 a maio de 2012. Atualmente é professor Associado IV da Universidade Federal de Santa Catarina - UFSC, junto ao Departamento de Informática e Estatística - INE e pesquisador na área de métodos numéricos para resolução das equações diferenciais parciais que modelam o escoamento de fluidos e a transferência calor.",
				company: "?",
				link: {
					href: "?",
					text: "?"
				}
			},
			{
				name: "Tarcísio E. M. Crocomo",
				photo: "themes/seccom/img/speaker.jpg",
				bio: "?",
				company: "?",
				link: {
					href: "?",
					text: "?"
				},
			}
		],
		
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
						speaker: 2,
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
						speaker: 6
					},
					{
						name: "Coffee-break",
						time: "15h30"
					},
					{
						title: "Ambient Assisted Living",
						description: "?",
						time: "16h00",
						speaker: 7
					},
          {
            name: "?",
            photo: "themes/seccom/img/speaker.jpg",
            bio: "?",
            company: "Chaordic",
            link: {
              href: "http://github.com/stevie",
              text: "@stevie"
            },
            presentation: {
              title: "HTML, CSS e Javascript de alto desempenho",
              description: "?",
              time: "18h30"
            }
          }
        ]
      },
      {
        date: "14",
        name: "Terça",
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
						title: "Go Lang",
						description: "?",
						time: "13h30",
						speaker: 9
          },
          {
						title: "Fedora como solução para sistemas embarcados",
						description: "?",
						time: "14h30",
						speaker: 6
          },
          {
            name: "Coffee-break",
            time: "15h30"
          },
          {
						title: "O problema de pequenos desempenhos em grandes máquinas",
						description: "A palestra abordará os desafios na obtenção de alto desempenho com aplicações científicas em máquinas paralelas. Entre as questões a serem discutidas estão: como aplicações científicas funcionam; como plataformas paralelas de alto desempenho são organizadas; quais são as origens dos problemas de desempenho de comunicação e desbalanceamento de carga; e como podemos tratar destes problemas.",
						time: "16h00",
						speaker: 4
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
						speaker: 11
          },
          {
            name: "Almoço",
            time: "12h00"
          },
          {
            name: "Chaordic",
            photo: "themes/seccom/img/speaker.jpg",
            bio: "?",
            company: "Chaordic",
            link: {
              href: "?",
              text: "?"
            },
            presentation: {
              title: "Machine Learning",
              description: "?",
              time: "13h30"
            }
          },
          {
						title: "TV Digital Interativa",
						description: "?",
						time: "14h30",
						speaker: 0
          },
          {
            name: "Coffee-break",
            time: "15h30"
          },
          {
						title: "Mozilla Developmer Network",
						description: "?",
						time: "16h00",
						speaker: 8
          },
          {
						title: "Python parte 2",
						description: "?",
						time: "18h00",
						speaker: 11
          }
        ]
      },
      {
        date: "16",
        name: "Quinta",
        talks: [
          {
            name: "Chaordic",
            photo: "themes/seccom/img/speaker.jpg",
            bio: "?",
            company: "Chaordic",
            link: {
              href: "?",
              text: "?"
            },
            presentation: {
              title: "Node.JS",
              description: "?",
              time: "10h00"
            }
          },
          {
            name: "Almoço",
            time: "12h00"
          },
          {
						title: "?",
						description: "?",
						time: "13h30",
						speaker: 1
          },
          {
            title: "Processadores Manycore...",
						description: "?",
						time: "14h30",
						speaker: 5
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
          }
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
          }
        ]
      }
    ],

    // List of Sponsors
    sponsors: [
      /*{
        name: "Eventick",
        logo: "themes/seccom/img/sponsor.png",
        url: "http://eventick.com.br"
      }*/
    ],

    // List of Partners
    partners: [
      /*{
        name: "BrazilJS",
        logo: "themes/seccom/img/partner.png",
        url: "http://braziljs.org"
      }*/
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