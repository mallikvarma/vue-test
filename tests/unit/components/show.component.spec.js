import { mount , createLocalVue } from '@vue/test-utils'

import Show from '@/components/show.component.vue'

import VueRouter from "vue-router"

const localVue = createLocalVue()
localVue.use(VueRouter)


describe('show.component.vue', () => {

    let showObj;

    beforeEach(()=>{
        showObj  = {
            id: 1,
            name: "God Father",
            rating: '9.1',
            image:''
        }
      
    })

    it('Should render the name properly', () => {    
      const wrapper = mount(Show, {
          propsData: showObj
      })
      expect(wrapper.find('span').text()).toBe('God Father')
    })


    it('Should render the rating', ()=>{
        const wrapper = mount(Show, {
            propsData: showObj
        })
        expect(wrapper.find('.rating').text()).toBe('9.1')    
    })


    it('Should change the route when clicked', ()=>{

        const routes = [
            { path: "/", name: "home" },
            { path: "/show/:id", name: "showDetails" }
          ];

        const router = new VueRouter({ routes })
        const wrapper = mount(Show, {
            localVue,
            router
        })
        const spy = jest.fn()
        wrapper.vm.$router.push = spy;
        wrapper.vm.showDetails();
        expect(spy).toHaveBeenCalled()
    })
  
  })
  