import {mount} from "@vue/test-utils";
import Watch from "../Watch.vue";

describe("Watch.vue", () => {
    describe("exist check", () => {
        let wrapper
        beforeEach(() => {
            wrapper = mount(Watch, {
                mocks: {
                    $route: {
                        query: {
                            id: 2
                        }
                    }
                },
            })
        })

        it("should component exists", () => {
            const element = wrapper.find(".watch")
            expect(element.exists()).toBeTruthy()
        })
    })
})