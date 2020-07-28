import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex';
import SearchResults from "@/components/search-results.component.vue";
import Show from "@/components/show.component.vue";

const localVue = createLocalVue()
localVue.use(Vuex)


describe("search-results.component.vue", ()=>{

    let actions
    let store
    let wrapper
    const $route = {
        params: {name: 'godfather'}
    }
  
    beforeEach(() => {
      actions = {
        SEARCH_SHOWS: jest.fn()
      }
      store = new Vuex.Store({
        state:{searchResults: [
            {
                id: 1,
                image: {medium: ""},
                rating: 6.5,
                desc: "movie summary",
                name: "God Father",
                language: "english",
                runtime: "20"
            },
            {
              id: 2,
              image: {medium: ""},
              rating: 6.5,
              desc: "movie summary",
              name: "God Father 2",
              language: "English",
              runtime: "30"
          }
        ]},
        actions
      })    


        wrapper =  mount(SearchResults, {
            mocks: {
            $route
            },
            store,
            localVue
        })
    })
  

    it("Should disptach store action on mounted with search param", ()=>{
        expect(actions.SEARCH_SHOWS).toHaveBeenCalled()
    })


    it("Should show search results title", ()=>{
        expect(wrapper.find("h3").text()).toBe('Search Results for "godfather"')
    })

     
    it("Should render the Show components according to store", ()=>{
         expect(wrapper.findAllComponents(Show).length).toBe(2)
    })




})