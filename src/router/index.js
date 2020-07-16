import Vue from 'vue'
import VueRouter from 'vue-router'

import TopShows from "../components/shows.component.vue";
import ShowDetails from "../components/show-details.component.vue";
import SearchResults from "../components/search-results.component.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: TopShows},
  { path: "*", redirect: "/"},
  { path: "/search/:name", component: SearchResults},
  { path: "/show/:id", component: ShowDetails}
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router
