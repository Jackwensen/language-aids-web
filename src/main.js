// =========================================================
// * Language Aids Web - v1.0.0
// =========================================================
//

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import MaterialKit from "./plugins/material-kit";

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(MaterialKit);

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
