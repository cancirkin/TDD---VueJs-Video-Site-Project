<template>
  <div class="card">
      <div
      @mouseover="hover = true"
      @mouseleave="hover = false" 
      class="image">
          <img  width="360" height="200" :src="hover ? video.hoverImage :video.coverImage" alt="">
      </div>
      <div class="video-info">
          <div class="title">
              {{video.title}}
          </div>
          <div class="count-and-date">
              <div class="count">
                  {{video.viewCount}}
              </div>
              <div>
                  ·
              </div>
              <div class="date">
                   {{video.publishDateInMonth + ' months ago'}}
              </div>
          </div>
          <div class="owner-section">
              <div class="owner-image">
                  <img class="author-image" height="24" width="24" :src="video.ownerImage" alt="">
              </div>
              <div class="owner-name">
                  {{video.ownerName}}
              </div>
          </div>
          <div class="description">
              {{video.description}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        video: {
            type: Object,
        },
    },
    data() {
        return {
            hover: false
        }
    },
}
</script>

<style scoped>

.card{
    display: flex;
    width: 65%;
    cursor: pointer;
}
.image{
    margin-right: 15px;
}
.author-image{
    border-radius: 50%;
}
.video-info{
    display: flex;
    flex-direction: column;
}
.title{
    color: #FFF;
}
.count-and-date{
    display: flex;
    color: #ABABAB;
    gap: 10px;
    margin-top: 10px;
}
.owner-section{
    display: flex;
    margin-top: 10px;
}
.owner-image{
    margin-right: 10px;
}
.owner-name{
    color: #ABABAB;
}
.description{
    margin-top: 10px;
    color: #ABABAB;
}
</style>