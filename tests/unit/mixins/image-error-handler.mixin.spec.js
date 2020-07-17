import { mount } from '@vue/test-utils';
import imageErrorHandlerMixin from '@/mixins/image-error-handler.mixin.js';

describe('image-error-handler.mixin', () => {

        it("Should remove element based on 'elementLevel' property", ()=>{
            const component = {
                render: ()=>{},
                mixins: [imageErrorHandlerMixin],
                data: function(){
                    return {
                        mixinHint: "elementLevel"
                    }
                }
            }

            const elementSpy = jest.fn();
            const parentElmSpy = jest.fn();
            const eventRef = {target:{remove:elementSpy, parentElement:{ remove: parentElmSpy}} }
            const wrapper = mount(component);
            wrapper.vm.onImageLoadError( eventRef );
            expect( elementSpy ).toHaveBeenCalled();
        })


        it("Should remove parent component based on 'elementLevel' property", ()=>{
            const component = {
                render: ()=>{},
                mixins: [imageErrorHandlerMixin],
                data: function(){
                    return {}
                }
            }
            const elementSpy = jest.fn();
            const parentElmSpy = jest.fn();
            const eventRef = {target:{remove:elementSpy, parentElement:{ remove: parentElmSpy}} }
            const wrapper = mount(component);
            wrapper.vm.onImageLoadError( eventRef );
            expect( parentElmSpy ).toHaveBeenCalled();
        })


})