module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "SECCOM",
      description: "Semana Acadêmica da Computação e Sistemas",
      date: "3 a 7 de outubro",
      // If your event is free, just comment this line
      // price: "$100",
      venue: "Auditório EPS",
      address: "Universidade Federal de Santa Catarina - Campus Trindade",
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
    //     repository: "https://github.com/braziljs/conf-boilerplate"
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
        name: "Lunch",
        time: "12h00"
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Eventick",
        logo: "themes/seccom/img/sponsor.png",
        url: "http://eventick.com.br"
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
