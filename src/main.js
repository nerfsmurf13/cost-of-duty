// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>"
});

//Google Analytics Code for Trtacking Page within Vue Router
router.afterEach((to) => {
    gtag('config', 'UA-154724658-2', {
        page_path: to.fullPath,
        app_name: 'Monitive Web App',
        send_page_view: true,
    });
});