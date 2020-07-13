import Vue from 'vue'
import VueRouter from 'vue-router'

import TopShows from "../components/shows.component.vue";
import ShowDetails from "../components/show-details.component.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: TopShows, name: "home" },
  { path: "/show/:id", component: ShowDetails, name: "showDetails" }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router
