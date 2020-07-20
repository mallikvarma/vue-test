import { mount } from '@vue/test-utils'
import Vue from "vue";
import SearchField from '@/components/search.component.vue'



describe('search.component.vue', () => {

    it('Should call search method when hit Enter key after entering showname', () => {       
        const wrapper = mount(SearchField);
        wrapper.setData({showName: 'godfather'})
        wrapper.find('input').trigger("keyup.enter")     
        expect(wrapper.emitted().onSearch[0]).toEqual(["godfather"])
    }) 
  
    it('Should call search method when hit Enter key without entering showname' , () => {       
        const wrapper = mount(SearchField);
        wrapper.setData({showName: ''})
        wrapper.find('input').trigger("keyup.enter")     
        expect(wrapper.emitted().onSearch).toBe(undefined)
    }) 

    it('Should show error message if no show name entered' , async () => {       
        const wrapper = mount(SearchField);
        wrapper.setData({showName: ''})
        wrapper.find('input').trigger("keyup.enter")
        await Vue.nextTick();
        expect(wrapper.find(".error").isVisible()).toBe(true)
    }) 

  
})
  