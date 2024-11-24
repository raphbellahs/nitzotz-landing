/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://nitzotz.org',
    generateRobotsTxt: true,
    outDir: './public',
    exclude: ['/api/*'],
    robotsTxtOptions: {
      additionalSitemaps: ['https://nitzotz.org/sitemap-0.xml'],
    },
  }