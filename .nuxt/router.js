import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _11af8d83 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _65dde16d = () => interopDefault(import('..\\pages\\event-progress.vue' /* webpackChunkName: "pages/event-progress" */))
const _648d4100 = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */))
const _4958b22b = () => interopDefault(import('..\\pages\\partner.vue' /* webpackChunkName: "pages/partner" */))
const _a3fddb92 = () => interopDefault(import('..\\pages\\portfolio\\index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _c76244d0 = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _a415b8ec = () => interopDefault(import('..\\pages\\team.vue' /* webpackChunkName: "pages/team" */))
const _4ddc8bfc = () => interopDefault(import('..\\pages\\tenders.vue' /* webpackChunkName: "pages/tenders" */))
const _29b78d57 = () => interopDefault(import('..\\pages\\portfolio\\_item.vue' /* webpackChunkName: "pages/portfolio/_item" */))
const _24b1c016 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'menu-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _11af8d83,
    name: "contact"
  }, {
    path: "/event-progress",
    component: _65dde16d,
    name: "event-progress"
  }, {
    path: "/news",
    component: _648d4100,
    name: "news"
  }, {
    path: "/partner",
    component: _4958b22b,
    name: "partner"
  }, {
    path: "/portfolio",
    component: _a3fddb92,
    name: "portfolio"
  }, {
    path: "/service",
    component: _c76244d0,
    name: "service"
  }, {
    path: "/team",
    component: _a415b8ec,
    name: "team"
  }, {
    path: "/tenders",
    component: _4ddc8bfc,
    name: "tenders"
  }, {
    path: "/portfolio/:item",
    component: _29b78d57,
    name: "portfolio-item"
  }, {
    path: "/",
    component: _24b1c016,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
