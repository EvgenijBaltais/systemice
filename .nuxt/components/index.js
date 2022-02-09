import { wrapFunctional } from './utils'

export { default as BlRight } from '../..\\components\\bl_right.vue'
export { default as Copyright } from '../..\\components\\copyright.vue'
export { default as EventData } from '../..\\components\\event_data.vue'
export { default as EventForm } from '../..\\components\\event_form.vue'
export { default as MainLogo } from '../..\\components\\main_logo.vue'
export { default as PageHeader } from '../..\\components\\page_header.vue'

export const LazyBlRight = import('../..\\components\\bl_right.vue' /* webpackChunkName: "components/bl-right" */).then(c => wrapFunctional(c.default || c))
export const LazyCopyright = import('../..\\components\\copyright.vue' /* webpackChunkName: "components/copyright" */).then(c => wrapFunctional(c.default || c))
export const LazyEventData = import('../..\\components\\event_data.vue' /* webpackChunkName: "components/event-data" */).then(c => wrapFunctional(c.default || c))
export const LazyEventForm = import('../..\\components\\event_form.vue' /* webpackChunkName: "components/event-form" */).then(c => wrapFunctional(c.default || c))
export const LazyMainLogo = import('../..\\components\\main_logo.vue' /* webpackChunkName: "components/main-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyPageHeader = import('../..\\components\\page_header.vue' /* webpackChunkName: "components/page-header" */).then(c => wrapFunctional(c.default || c))
