exports.ids = [6];
exports.modules = {

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/page_header.vue?vue&type=template&id=3eb72a06&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',[_vm._ssrNode("<div class=\"header\">","</div>",[_c('NuxtLink',{staticClass:"btn-no-animate",attrs:{"to":"/event-progress"}},[_c('span',[_vm._v("Собрать собственное мероприятие")])]),_vm._ssrNode(" <a href class=\"btn event-progress-stripe\"><div class=\"event-progress bta-hover\"></div> <div class=\"common-progress-text\">Общий прогресс сборки мероприятия</div></a> <a href=\"tel:74952152480\" class=\"tel-btn\">+7(495)215-24-80</a>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"header-mob\">","</div>",[_c('NuxtLink',{staticClass:"btn-no-animate",attrs:{"to":"/event-progress"}},[_c('span',[_vm._v("Собрать мероприятие")])]),_vm._ssrNode(" <div class=\"mob-menu\"><span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"menu-wrapper\">","</div>",[_vm._ssrNode("<ul class=\"menu-list\">","</ul>",[_vm._ssrNode("<li class=\"menu-item\">","</li>",[_c('NuxtLink',{attrs:{"to":"/"}},[_vm._v("О компании")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"menu-item\">","</li>",[_c('NuxtLink',{attrs:{"to":"/service"}},[_vm._v("Услуги")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"menu-item\">","</li>",[_c('NuxtLink',{attrs:{"to":"/tenders"}},[_vm._v("Тендеры")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"menu-item\">","</li>",[_c('NuxtLink',{attrs:{"to":"/portfolio"}},[_vm._v("Портфолио")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"menu-item\">","</li>",[_c('NuxtLink',{attrs:{"to":"/partner"}},[_vm._v("Партнеры")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"menu-item\">","</li>",[_c('NuxtLink',{attrs:{"to":"/contact"}},[_vm._v("Контакты")])],1)],2),_vm._ssrNode(" <div class=\"bl-social\"><a href=\"https://www.instagram.com/systemice/\" target=\"_blank\" class=\"social-link\"><img"+(_vm._ssrAttr("src",__webpack_require__(91)))+"></a> <div class=\"spy-left\"></div> <div class=\"spy-top\"></div> <div class=\"spy-right\"></div> <div class=\"spy-bottom\"></div></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/page_header.vue?vue&type=template&id=3eb72a06&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/page_header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var page_headervue_type_script_lang_js_ = ({
  name: 'pageHeader',

  mounted() {
    let mobMenu = document.querySelector('.mob-menu'),
        menuWrapper = document.querySelector('.menu-wrapper');
    mobMenu.classList.remove('open');
    menuWrapper.classList.remove('open-active');
    document.body.classList.remove('overlay');
  },

  methods: {
    menuShowHide() {
      let mobMenu = document.querySelector('.mob-menu'),
          menuWrapper = document.querySelector('.menu-wrapper');
      mobMenu.classList.contains('open') ? mobMenu.classList.remove('open') : mobMenu.classList.add('open');
      menuWrapper.classList.contains('open-active') ? menuWrapper.classList.remove('open-active') : menuWrapper.classList.add('open-active');
      document.body.classList.contains('overlay') ? document.body.classList.remove('overlay') : document.body.classList.add('overlay');
    }

  }
});
// CONCATENATED MODULE: ./components/page_header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_page_headervue_type_script_lang_js_ = (page_headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/page_header.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_page_headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "22c3512e"
  
)

/* harmony default export */ var page_header = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAACW0lEQVRIibWWTYhOYRTHf4OEJI2yEDFSI/MqGkbKV0QWs1AWxELNxsICsWepmMSG1IyyGOVzg5HvMY0Ug+QzJmwtJrGwwPws3nOnOzfvfT/MnDqdz+f8n+e559x7UcnwQvWIOmDt9EVtVxdn69eppOg4sC9lfwJ+Ux2NB+an7DPA7mErhX4tdtenrv/HyavlueqtqPkg8SfBkxFoHwUg1II6MfRDUftcAjgnHP2jADRZ7Uk9y+3hvxd2I+rRMJaOAuCBqLVHfRg6an3oZycAu4BfwPMKGqIR2AgsAuqAd8Bd4FXSEhlJ5A0CP4CdBPLHMjufpV61NHWrDZnrU21L1XiWHFf1fQ7Y8lSBy+oWdZ7FLmxVu1Lxlliz2uI8p+uMAPxQAmy6+idyNudsam0KdFqJnBeq48o8swvAOGADcDMnrwdoCf1ObsWcEzZE7HrOybKcXG+hlhNuDXmszC2kqT3ktlIJeYCLQr6uAvBNyKZaAJOYOTlZSnLragF8G3JhFYCNmbVVAV4Jub8KwL0hL5bMKDOHvRFfUUGHNkXuy7w5LAc4MzXQq3LAmtWhyJtXyeAPlbiAr8C60HuBTmA9MAOoB9YAp4CnFBulFfhcotZQJVea8AJHvpSz9KjEsKe5X7VOHQSmAJPKdQSwDNgEFOJEb4DbwOMK1n4DpqKeiF02VdAYtfLswOhCnR9G3xgCdgdGIXF0hOPwGIAdjNqX1BG/ifcjcMPiR/d/gZZY/GCrPkn82R/hDqAt9J/AALX9CDcAU8M+D+wYjv5jZ83qaXXQ2um72qmuzNb/C2LoU0p5hT3lAAAAAElFTkSuQmCC"

/***/ })

};;
//# sourceMappingURL=page-header.js.map