module.exports = {
  title: 'Monogame.Aseprite',
  tagline: 'Import Aseprite files into your MonoGame project.',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'manbeardgames', // Usually your GitHub org/user name.
  projectName: 'monogame-aseprite', // Usually your repo name.
  url: 'https://manbeardgames.github.io',
  baseUrl: '/monogame-aseprite/',
  themeConfig: {
    sidebarCollapsible: true,
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false
    },
    navbar: {
      title: 'MonoGame.Aseprite',
      logo: {
        alt: 'My Site Logo',
        src: 'img/monogame_aseprite_logo.png',
      },
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'about/introduction',
          label: 'Docs',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'api/index',
          label: 'API'
        },
        {
          href:'https://github.com/manbeardgames/monogame-aseprite',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository'
        },
        {
          href:'https://twitter.com/manbeardgames',
          position: 'right',
          className: 'header-twitter-link',
          'aria-label': 'Manbeardgames Twitter'
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Christopher Whitley Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['csharp'],
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/vsDark')
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/manbeardgames/monogame-aseprite.github.io/tree/develop',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
