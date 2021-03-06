import Vue from 'vue'
import VueRouter from 'vue-router'

import TopShows from "../components/shows.component.vue";
import ShowDetails from "../components/show-details.component.vue";
import SearchResults from "../components/search-results.component.vue";
import ErrorPage from "../components/errors.component.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: TopShows},
  { path: "*", redirect: "/"},
  { path: "/search/:name", component: SearchResults, name:"searchResults"},
  { path: "/show/:id", component: ShowDetails},
  { path: "/errors", component: ErrorPage}
];

const router = new VueRouter({
  routes
});

export default router
