module.exports = {
  base: '/eric/',
  dest: 'dist',
  title: '我的个人博客',
  description: '记录作为一个“猿”的成长过程',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    nav: [],
    sidebar: [
      {
        title: '说明',
        collapsable: false,
        children: [
          ['chapter1/', 'markdown 语法说明']
        ]
      },
      {
        title: 'Javascript',
        collapsable: false,
        children: [
          'chapter2/type'
        ]
      },
      {
        title: 'CSS',
        collapsable: false,
        children: [
          'chapter3/css'
        ]
      }
      
    ]
  }
}
