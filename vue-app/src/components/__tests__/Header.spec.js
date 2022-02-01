import {mount} from '@vue/test-utils';
import Header from "../Header.vue";
import { RouterLinkStub } from '@vue/test-utils';


describe("Header.vue", () => {
    describe("exist check", () => {
        let wrapper
        beforeEach(() => {
            wrapper = mount(Header, {
                stubs: {
                    RouterLink: RouterLinkStub
                },
            })
        })

        it("should component exists", () => {
            expect(wrapper.exists()).toBeTruthy()
        })
        it("router link home exists", () => {
            const home = wrapper.find("#home")
            expect(home.exists()).toBeTruthy()
        })
        it("router link favorites exists", () => {
            const favorites = wrapper.find("#favorites")
            expect(favorites.exists()).toBeTruthy()
        })
    })

    it("if user click home button should navigate to homepage", async () => {
        let routerPushMock = jest.fn()
        const wrapper = mount(Header, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            mocks: {
                $router: {
                    push: routerPushMock
                }
            }
        })

        const homeLink = wrapper.find("#home")
        await homeLink.trigger('click')

        expect(routerPushMock).toHaveBeenCalledWith({"path": "/" })
    })

    it("if user click favorites button should navigate to favorite videos page", async () => {
        let routerPushMock = jest.fn()
        const wrapper = mount(Header, {
            stubs: {
                RouterLink: RouterLinkStub
            },
            mocks: {
                $router: {
                    push: routerPushMock
                }
            }
        })

        const favoritesLink = wrapper.find("#favorites")
        await favoritesLink.trigger('click')

        expect(routerPushMock).toHaveBeenCalledWith({"path": "favorites" })
    })
})