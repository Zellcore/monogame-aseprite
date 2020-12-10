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
  baseUrl: '/monogame-asepritegit/',
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
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: '/',
            },
            {
              label: 'Second Doc',
              to: '/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
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
