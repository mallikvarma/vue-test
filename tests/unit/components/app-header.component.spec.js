import { mount , createLocalVue } from '@vue/test-utils'
import AppHeader from '@/components/app-header.component.vue'
import VueRouter from "vue-router"
import Vuex from 'vuex';

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)


describe('app-header.component.vue', () => {
   
    let actions
    let store
    beforeEach(() => {
        actions = {
          GET_SHOW_DETAILS_BY_NAME: jest.fn()
        }
        store = new Vuex.Store({
          state: {
            shows: {
               drama: [],
               action: [],
               comedy: [],
               horror: []
            },
            activeShow: null,
            searchResults: []
          },
          actions
        })    
      })



    it('Should change route when searched', () => {    
        const routes = [  { path: "/", name: "home" },
                          { path: "/search/:name"},
                          { path: "/show/:id", name: "showDetails" }];
        const router = new VueRouter({ routes })
        const wrapper = mount(AppHeader, {
            localVue,
            router
        })
        const spy = jest.fn()
        wrapper.vm.$router.push = spy;
        wrapper.vm.searchShow('godfather');
        expect(spy).toHaveBeenCalledWith("/search/godfather")
    }) 


    it('Should change route and call store when in search route', () => {    
        const routes = [  { path: "/", name: "home" },
                          { path: "/search/:name", name:"searchResults"},
                          { path: "/show/:id", name: "showDetails" }];
        let router = new VueRouter({ routes })
        router.push({name: "searchResults", params:{name: "godfather"}})
        const wrapper = mount(AppHeader, {
            localVue,
            router,
            store
        })
        const spy = jest.fn()
        wrapper.vm.$router.push = spy;
        wrapper.vm.searchShow('godfather');
        expect(spy).toHaveBeenCalledWith("/search/godfather")
        expect(actions.GET_SHOW_DETAILS_BY_NAME).toHaveBeenCalled();
    }) 
  
  })
  