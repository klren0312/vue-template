const _import = require('./_import_' + process.env.NODE_ENV)

export default [{
  path:      '/',
  name:      'home',
  component: _import('test/Home')

},
{
  path:      '/about',
  name:      'about',
  component: _import('test/About')
}
]
