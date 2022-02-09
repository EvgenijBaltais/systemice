import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  BlRight: () => import('../..\\components\\bl_right.vue' /* webpackChunkName: "components/bl-right" */).then(c => wrapFunctional(c.default || c)),
  Copyright: () => import('../..\\components\\copyright.vue' /* webpackChunkName: "components/copyright" */).then(c => wrapFunctional(c.default || c)),
  EventData: () => import('../..\\components\\event_data.vue' /* webpackChunkName: "components/event-data" */).then(c => wrapFunctional(c.default || c)),
  EventForm: () => import('../..\\components\\event_form.vue' /* webpackChunkName: "components/event-form" */).then(c => wrapFunctional(c.default || c)),
  MainLogo: () => import('../..\\components\\main_logo.vue' /* webpackChunkName: "components/main-logo" */).then(c => wrapFunctional(c.default || c)),
  PageHeader: () => import('../..\\components\\page_header.vue' /* webpackChunkName: "components/page-header" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
