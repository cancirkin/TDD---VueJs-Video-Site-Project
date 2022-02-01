import {mount} from '@vue/test-utils';
import Video from "../Video.vue";


describe("Video.vue", () => {
    describe("exist check", () => {
        let wrapper
        beforeEach(() => {
            wrapper = mount(Video, {
                propsData: {
                    video: {}
                }
            })
        })

        it("should component exists", () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })

    test('when user click video should navigate the watch page', async () => {
        const goToDetailSpy = jest.spyOn(Video.methods, 'watchVideo')

        let video = {
            "id": 2,
            "videoAddress": "https://www.youtube.com/watch?v=qZXt1Aom3Cs",
            "coverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/2-cover.webp",
            "hoverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/2-hover.webp",
            "title": "Vue JS Crash Course",
            "viewCount": 623,
            "publishDateInMonth": 10,
            "ownerImage": "https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s68-c-k-c0x00ffffff-no-rj",
            "ownerName": "Traversy Media",
            "description": "Learn the fundamentals of Vue JS (v3) in this project-based crash course",
            "favorite": true
        }
        let routerPushMock = jest.fn()

        const wrapper = mount(Video, {
            propsData: {
                video: video
            },
            mocks: {
                $router: {
                    push: routerPushMock
                }
            }
        })

        const watch = wrapper.find(".card")
        await watch.trigger('click')

        expect(goToDetailSpy).toBeCalled()
        expect(routerPushMock).toHaveBeenCalledWith({"path": "watch", "query": {"id": 2} })
    })
})