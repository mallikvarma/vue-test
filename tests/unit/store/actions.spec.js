import { createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex';
import state from "@/store/state.js"
import actions from "@/store/actions.js"


const localVue = createLocalVue()
localVue.use(Vuex)


describe("Store actions", ()=>{

    let store;
    let mutations; 

     beforeEach(() => {
        mutations = {
           UPDATE_SHOWS: jest.fn(),
           UPDATE_ACTIVE_SHOW: jest.fn(),
           UPDATE_SEARCH_RESULTS: jest.fn(),
           TOGGLE_LOADER: jest.fn()
        }
        store = new Vuex.Store({
          state,
          actions,
          mutations
        })    
      })


      it('Should call updateShows mutation when dispatched getTopShows', () => {    
        store.dispatch('getTopShows')  
        expect(mutations.UPDATE_SHOWS).toHaveBeenCalled()
      })

      it('Should call updateActiveShow mutation when dispatched getShowDetails', () => {    
        store.dispatch('getShowDetails')  
        expect(mutations.UPDATE_ACTIVE_SHOW).toHaveBeenCalled()
      })

      it('Should call updateSearchResults mutation when dispatched searchShows', () => {    
        store.dispatch('searchShows')  
        expect(mutations.UPDATE_SEARCH_RESULTS).toHaveBeenCalled()
      })

      it('Should call toggleLoader mutation when dispatched toggleLoader', () => {    
        store.dispatch('toggleLoader')  
        expect(mutations.TOGGLE_LOADER).toHaveBeenCalled()
      })

})