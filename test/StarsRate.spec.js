import { mount } from '@vue/test-utils'
import StarsRate from '@/components/StarsRate.vue'


describe('StarsRate.vue', () => {
    const wrapper = mount(StarsRate, {
        propsData: {
            value:6
        }
    });
    test("Check components existence", () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });
    test("Check props data", () => {
        expect(wrapper.vm.value).toEqual(6)
	});
})