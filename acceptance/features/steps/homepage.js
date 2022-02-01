const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl");
const assert = require('assert').strict;
const waitForSelector = require("../support/action/waitForSelector")
const checkUrlContains = require("../support/check/checkUrlContains")

Given("that User goes to Video Site Project's HomePage", async function () {
    await openUrl.call(this, "/")
})

When("page is loaded", async function () {
    await waitForSelector.call(this,'.video-title')
});

Then(/^User can see some of videos title like$/, async function (arr) {
    const selector = '.video'

    for (let [ videoTitle ] of arr.rawTable) {
        let videos = await this.page.$$eval(
            selector,
            async (items, videoTitle) => {
                const video = items
                    .find(item => item.querySelector(".video-title").textContent.includes(videoTitle))
                return !!video
            },
            videoTitle
        )
        assert.strictEqual(videos, true)
    }
    this
});


Given(/^that User is on Video Site Project's HomePage$/, async function () {
    await openUrl.call(this, "/")
});

When(/^User clicks "([^"]*)" video$/, async function (videoTitle) {
    const selector = ".video"
    this.videoId = await this.page.$$eval(
        selector,
        async (items, videoTitle) => {
            const video = await items
                .find(item => item.querySelector(".video-title").textContent.includes(videoTitle))
            const card = video.querySelector(".card")
            const { id } = video.dataset
            await card.click()
            return id
        },
        videoTitle
    );
});

Then(/^User should see watch url correctly$/, async function () {
    await checkUrlContains.call(this, false, `/watch?id=${this.videoId}`)
});

Given(/^that User is on Video Site Projects HomePage$/, async function () {
    await openUrl.call(this, "/")
});

When(/^User hovers "([^"]*)" video$/, async function (videoTitle) {
    const selector = ".video"
    this.imageUrl = null
    let videoId = await this.page.$$eval(
        selector,
        async (items, videoTitle) => {
            const video = await items
                .find(item => item.querySelector(".video-title").textContent.includes(videoTitle))
            const card = video.querySelector(".card")
            const { id } = video.dataset
            return id
        },
        videoTitle
    );
    const videoDiv = await this.page.$(`div[data-id="${videoId}"]`)
    await videoDiv.hover()

});

Then(/^User should see hovered image$/, async function () {
    const videos = await this.page.$$(".video")
    let isHovered = false

    for (let video of videos) {
        let videoImg = await video.$("img")
        const imageUrl = await (await videoImg.getProperty('src')).jsonValue()
        if (imageUrl.includes("hover")){
            isHovered = true
        }
    }
    assert.strictEqual(isHovered, true)
});