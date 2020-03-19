import Vue from "vue";
import Router from "vue-router";
import Master from "@/components/page/Master";
import telSearch from "@/components/page/TelSearch";
import Pos from "@/components/page/Pos";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/master",
      name: "master",
      component: Master
    },
    {
      path: "/telSearch",
      name: "telSearch",
      component: telSearch
    },
    {
      path: "/",
      name: "Pos",
      component: Pos
    }
  ]
});
