import { mount } from '@vue/test-utils'
import DefaultView from '@/layouts/default.vue'


const mocks = {
    $router: {
      push: () => {},
      replace: () => {}
    },
    $route: {
        path: "/search",
        query: {
          searchText: "arrow"
        },
    },
  };
describe("DefaultView", () => {
    const wrapper = mount(DefaultView)
    test("Check components existence", () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });

    it("onEnterKeySelection method to be called", () => {
        let event = {
            target: {
              value: "Arrow"
            }
          };
        jest.spyOn(mocks.$router, "push");
        let inputEl = wrapper.find("#searchInput");
        inputEl.trigger("keydown.enter");
        wrapper.vm.handleSearch(event)
        expect(wrapper.vm.$router.push).toHaveBeenCalled()
    });
})

