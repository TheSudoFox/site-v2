module.exports = {
  content: {
    permalink: ':section/:year/:month/:day/:slug',
    page: '/blog/_content',
    generate: [ // for static build
      'get', 'getAll'
    ],
    isPost: true
  },
  api: {
    // browserBaseURL: 'localhost'
    baseURL: process.env.NODE_ENV === 'production'
       ? 'http://ethanfox.me'
       : ''
  }
}
