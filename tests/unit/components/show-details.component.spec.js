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
        GET_SHOW_DETAILS: jest.fn(),
        GET_SHOW_DETAILS_BY_NAME: jest.fn()
      }
      store = new Vuex.Store({
        state:{
          shows: [{
                  id: 1,
                  images: "",
                  rating: "6.5",
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
          const wrapper = mount(ShowDetails, {
            mocks: {
              $route
            },
            store,
            localVue
          })

          expect(actions.GET_SHOW_DETAILS).toHaveBeenCalled()
     }) 

     
    it('Should dispatch GET_SHOW_DETAILS_BY_NAME when param is showName', () => {       
        const $route = {
            params: {id: 'godfather'}
          }
          const wrapper = mount(ShowDetails, {
            mocks: {
              $route
            },
            store,
            localVue
          })

          expect(actions.GET_SHOW_DETAILS_BY_NAME).toHaveBeenCalled()
     }) 

  
  })
  