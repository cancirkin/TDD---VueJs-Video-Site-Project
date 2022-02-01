import {mount, shallowMount} from "@vue/test-utils";
import Home from "../Home.vue";
import axios from 'axios'
import API from "../../src/api";
import flushPromises from "flush-promises";
import Video from "../../src/components/Video";
jest.mock('@/api')

describe("Home.vue", () => {
    describe("exist check", () => {
        it("should component exists", () => {
            let wrapper
            wrapper = shallowMount(Home)
            const element = wrapper.find(".content")
            expect(element.exists()).toBeTruthy()
        })

        it("should render video item components correctly", async () => {
            let video =
                [{
                    "id": 1,
                    "videoAddress": "https://www.youtube.com/watch?v=FXpIoQ_rT_c",
                    "coverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-cover.webp",
                    "hoverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-hover.webp",
                    "title": "Vue.js Course for Beginners [2021 Tutorial]",
                    "viewCount": 254,
                    "publishDateInMonth": 4,
                    "ownerImage": "https://yt3.ggpht.com/ytc/AKedOLTtJvQ1Vfew91vemeLaLdhjOwGx3tTBLlreK_QUyA=s68-c-k-c0x00ffffff-no-rj",
                    "ownerName": "freeCodeCamp.org",
                    "description": "Learn Vue 3 by in this full course. Vue.js is an open-source model–view–view model front end JavaScript framework for building user interfaces and single-page applications."
                }]

            API.getVideos.mockResolvedValue(video)
            let wrapper
            wrapper = mount(Home)
            await flushPromises()
            expect(wrapper.find("#video-title").text()).toEqual(video[0].title)
        })
    })
})