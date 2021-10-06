module.exports = {
  siteTitle: 'Ezgi Elouzeh', // <title>
  manifestName: 'Spectral',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/portfolio-website/`, // This path is subpath of your hosting https://domain/portfolio
  heading: 'Ezgi Elouzeh',
  subHeading: 'Fullstack Engineer',
  // social
  socialLinks: [
    {
      style: 'brands',
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/ezgielouzeh',
    },
    {
      style: 'brands',
      icon: 'fa-linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ezgielouzeh/',
    },
    {
      style: 'solid',
      icon: 'fa-envelope',
      name: 'Email',
      url: 'mailto:ezgisirip@gmail.com',
    },
  ],
  projects: {
    ditchionary: [
      {
        style: 'brands',
        icon: 'fa-github',
        name: 'Github',
        url: 'https://github.com/ezgielouzeh/ditchionary',
      },
    ],
    courses: [
      {
        style: 'brands fa-2x',
        icon: 'fa-github',
        name: 'Github',
        url: 'https://github.com/Dragonair-Dream-Team/4course-capstone',
      },
      {
        style: 'solid',
        icon: 'fa-link',
        name: 'Website',
        url: 'http://fourcourse-capstone.herokuapp.com',
      },
      {
        style: 'brands',
        icon: 'fa-youtube',
        name: 'Website',
        url: 'https://www.youtube.com/watch?v=U2oVzxHFBI8',
      },
    ],
    plantter: [
      {
        style: 'brands',
        icon: 'fa-github',
        name: 'Github',
        url: 'https://github.com/N7-Normandy/Grace-Plantter',
      },
      {
        style: 'solid',
        icon: 'fa-link',
        name: 'Website',
        url: 'https://grace-plantter.herokuapp.com/',
      },
    ],
    portfolio: [
      {
        style: 'brands',
        icon: 'fa-github',
        name: 'Github',
        url: 'https://github.com/ezgielouzeh/portfolio-website',
      },
    ],
  },
};

