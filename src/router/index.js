import Vue from 'vue'
import Router from 'vue-router'
import helloWorldRouter from './hello-world.router.js'
Vue.use(Router)

const router = new Router({
  // 设置路由模式 hash / history(需要nginx进行配置)
  mode:   'hash',
  routes: []
})

router.addRoutes(helloWorldRouter)

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach((to, from) => {})

export default router
