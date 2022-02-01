import {pactWith} from 'jest-pact';
import { Matchers } from '@pact-foundation/pact';
const { eachLike, like, integer } = Matchers
import {API} from "../../../api";

pactWith({
    consumer: "Frontend",
    provider: "Backend",
}, provider => {
    describe("products", () => {
        let api
        beforeEach(() => {
            api = new API(provider.mockService.baseUrl)
        })
        test('get videos list', async () => {
            await provider.addInteraction({
                state: 'get video list successfully',
                uponReceiving: 'a request not empty for video list',
                withRequest: {
                    method: 'GET',
                    path: '/videos',
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                    },
                    body: eachLike({
                        id: integer(5),
                        videoAddress: like("https://www.youtube.com/watch?v=ZqgiuPt5QZo"),
                        coverImage: like("https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/5-cover.webp"),
                        hoverImage: like("https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/5-hover.webp"),
                        title: like("Vue 3 For Beginners - Full Tutorial Course"),
                        viewCount: integer(186),
                        publishDateInMonth: integer(12),
                        ownerImage: like("https://yt3.ggpht.com/Ph90sv8O_ZfnWjeoRFKiP-JfwPfdBd_PhK23cwqLY3-7aLB-JYoKFg2z2qqkysOk2LIHTdoFdQ=s68-c-k-c0x00ffffff-no-rj"),
                        ownerName: like("The Earth Is Square"),
                        description: like("Welcome to our Learn Vue 3 Tutorial Course for Beginners! Vue is a progressive framework for building user interfaces. Ready to start your path to becoming a front end Vue developer? Let's get started!"),
                    })
                }
            })
            const res = await api.getVideos()
            expect(res[0].id).toEqual(5)
        })
    })
})
