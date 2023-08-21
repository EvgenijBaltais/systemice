import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4b531998 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _13693ac8 = () => interopDefault(import('..\\pages\\event-progress.vue' /* webpackChunkName: "pages/event-progress" */))
const _493abe22 = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */))
const _11ff97dc = () => interopDefault(import('..\\pages\\partner.vue' /* webpackChunkName: "pages/partner" */))
const _4dd9f8b4 = () => interopDefault(import('..\\pages\\portfolio\\index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _64f5c349 = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _24ca8379 = () => interopDefault(import('..\\pages\\team.vue' /* webpackChunkName: "pages/team" */))
const _bc8ec09a = () => interopDefault(import('..\\pages\\tenders.vue' /* webpackChunkName: "pages/tenders" */))
const _54c97ec6 = () => interopDefault(import('..\\pages\\portfolio\\_item.vue' /* webpackChunkName: "pages/portfolio/_item" */))
const _517dbde6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _4b531998,
    name: "contact"
  }, {
    path: "/event-progress",
    component: _13693ac8,
    name: "event-progress"
  }, {
    path: "/news",
    component: _493abe22,
    name: "news"
  }, {
    path: "/partner",
    component: _11ff97dc,
    name: "partner"
  }, {
    path: "/portfolio",
    component: _4dd9f8b4,
    name: "portfolio"
  }, {
    path: "/service",
    component: _64f5c349,
    name: "service"
  }, {
    path: "/team",
    component: _24ca8379,
    name: "team"
  }, {
    path: "/tenders",
    component: _bc8ec09a,
    name: "tenders"
  }, {
    path: "/portfolio/:item",
    component: _54c97ec6,
    name: "portfolio-item"
  }, {
    path: "/",
    component: _517dbde6,
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
