import {mount} from '@vue/test-utils';
import FavoriteRow from "../FavoriteRow.vue";


describe("FavoriteRow.vue", () => {
    describe("exist check", () => {
        let wrapper
        beforeEach(() => {
            wrapper = mount(FavoriteRow, {
                propsData: {
                    video: {}
                }
            })
        })

        it("should component exists", () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })
})