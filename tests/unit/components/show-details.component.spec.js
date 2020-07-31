import { mount , createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex';
import ShowDetails from '@/components/show-details.component.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('show-details.component.vue', () => {

    let actions
    let store
  
    beforeEach(() => {
      actions = {
        getShowDetails: jest.fn()
      }
      store = new Vuex.Store({
        state:{
          shows: [{
                  id: 1,
                  image: {medium:"", original:""},
                  rating: 6.5,
                  desc: "movie summary",
                  name: "God Father",
                  language: "english",
                  runtime: "20"
              }
            ]},
          actions
      })    
    })

    it('Should dispatch GET_SHOW_DETAILS when param is showId', () => {       
        const $route = {
            params: {id: '1'}
          }
          mount(ShowDetails, {
            mocks: {
              $route
            },
            store,
            localVue
          })

          expect(actions.getShowDetails).toHaveBeenCalled()
     }) 


  
  })
  