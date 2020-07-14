import { mount , createLocalVue } from '@vue/test-utils'
import AppHeader from '@/components/app-header.component.vue'
import VueRouter from "vue-router"

const localVue = createLocalVue()
localVue.use(VueRouter)


describe('app-header.component.vue', () => {

    it('Should change route when searched', () => {    
        const routes = [
            { path: "/", name: "home" },
            { path: "/show/:id", name: "showDetails" }
          ];

        const router = new VueRouter({ routes })
        const wrapper = mount(AppHeader, {
            localVue,
            router
        })
        const spy = jest.fn()
        wrapper.vm.$router.push = spy;
        wrapper.vm.searchShow('godfather');
        expect(spy).toHaveBeenCalledWith("/show/godfather")
    })


    it('Should hide search field when in details view', () => { 
      let localVal = { $route: {name: "showDetails"}}       
      expect(AppHeader.computed.showSearch.call( localVal )).toBe("none")
  }) 
 
  
  })
  