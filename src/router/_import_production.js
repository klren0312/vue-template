// 生产模式, 按需引入
module.exports = file => () =>
  import('@/views/' + file + '.vue')
