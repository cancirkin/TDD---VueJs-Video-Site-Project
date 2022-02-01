<template>
  <div>
      <div @click="watchVideo" class="card">
          <div @mouseover="hover = true"
                @mouseleave="hover = false" class="video-image">
              <img class="image" width="360" :src="hover ? video.hoverImage :video.coverImage" alt="">
          </div>
          <div class="video-info">
              <div class="author-image">
                  <img style="border-radius: 50%" width="36" height="36" :src="video.ownerImage" alt="">
              </div>
              <div class="author-info">
                  <div id="video-title" class="video-title">
                      {{video.title}}
                  </div>
                  <div class="owner-name">
                      {{video.ownerName}}
                  </div>
                  <div class="view-details">
                      <div class="view-count">
                          {{video.viewCount + ' views'}}
                      </div>
                      <div>
                          ·
                      </div>
                      <div class="publish-date">
                          {{video.publishDateInMonth + ' months ago'}}
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:["video"],
    data() {
        return {
            hover: false
        }
    },
  methods: {
    watchVideo() {
      this.$router.push({ path: "watch", query: { id: this.video.id } });
    }
  }
}
</script>

<style scoped>
.card{
    max-width: 360px;
    cursor: pointer;
}
.author-image{
    margin-right: 10px;
}
.image{
    display: block;
}
.video-info{
    display: flex;
    margin-top: 10px;
}
.author-info{
    flex-grow: 1;
}
.owner-name{
    color: #ABABAB;
    margin-top: 5px;
}
.video-title{
    color: #fff;
}
.view-details{
    gap: 10px;
    display: flex;
    color: #ABABAB;
}
</style>
