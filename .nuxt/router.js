import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _011e3b0a = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _31d98575 = () => interopDefault(import('..\\pages\\event-progress.vue' /* webpackChunkName: "pages/event-progress" */))
const _2cfccf08 = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */))
const _371a0723 = () => interopDefault(import('..\\pages\\partner.vue' /* webpackChunkName: "pages/partner" */))
const _69a3d43f = () => interopDefault(import('..\\pages\\portfolio\\index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _ebdf9ae0 = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _7664b192 = () => interopDefault(import('..\\pages\\team.vue' /* webpackChunkName: "pages/team" */))
const _7259e20c = () => interopDefault(import('..\\pages\\tenders.vue' /* webpackChunkName: "pages/tenders" */))
const _354b6142 = () => interopDefault(import('..\\pages\\portfolio\\_item.vue' /* webpackChunkName: "pages/portfolio/_item" */))
const _332952ed = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _011e3b0a,
    name: "contact"
  }, {
    path: "/event-progress",
    component: _31d98575,
    name: "event-progress"
  }, {
    path: "/news",
    component: _2cfccf08,
    name: "news"
  }, {
    path: "/partner",
    component: _371a0723,
    name: "partner"
  }, {
    path: "/portfolio",
    component: _69a3d43f,
    name: "portfolio"
  }, {
    path: "/service",
    component: _ebdf9ae0,
    name: "service"
  }, {
    path: "/team",
    component: _7664b192,
    name: "team"
  }, {
    path: "/tenders",
    component: _7259e20c,
    name: "tenders"
  }, {
    path: "/portfolio/:item",
    component: _354b6142,
    name: "portfolio-item"
  }, {
    path: "/",
    component: _332952ed,
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
