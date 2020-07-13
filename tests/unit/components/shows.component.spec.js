import { mount , createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex';
import TopShows from '@/components/shows.component.vue'
import Show from '@/components/show.component.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('shows.component.vue', () => {

  let actions
  let store

  beforeEach(() => {
    actions = {
      getTopShows: jest.fn()
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
            },
            {
              id: 2,
              images: "",
              rating: "6.5",
              desc: "movie summary",
              name: "God Father 2",
              language: "English",
              runtime: "30"
          }
          ]},
        actions
    })    
  })


  it('Should call store action getTopShows after mounted', () => {    
    const wrapper = mount(TopShows, {store, localVue})
    expect(actions.getTopShows).toHaveBeenCalled()
  })

  it('Should render the shows according to state of the store', () => {   
    const wrapper = mount(TopShows, {store, localVue})     
    expect(wrapper.findAllComponents(Show).length).toBe(2)
  })


})
