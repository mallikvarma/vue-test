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
           updateShows: jest.fn(),
           updateActiveShow: jest.fn(),
           updateActiveShowByName: jest.fn()
        }
        store = new Vuex.Store({
          state,
          actions,
          mutations
        })    
      })


      it('Should call updateShows mutation when dispatched GET_TOP_SHOWS', () => {    
        store.dispatch('GET_TOP_SHOWS')  
        expect(mutations.updateShows).toHaveBeenCalled()
      })

      it('Should call updateActiveShow mutation when dispatched GET_SHOW_DETAILS', () => {    
        store.dispatch('GET_SHOW_DETAILS')  
        expect(mutations.updateActiveShow).toHaveBeenCalled()
      })

      it('Should call updateActiveShowByName mutation when dispatched GET_SHOW_DETAILS_BY_NAME', () => {    
        store.dispatch('GET_SHOW_DETAILS_BY_NAME')  
        expect(mutations.updateActiveShowByName).toHaveBeenCalled()
      })

})