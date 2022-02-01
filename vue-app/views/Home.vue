<template>
  <div class="content">
      <Video :data-id="video.id" id="video" class="video" v-for="video in videos" :key="video.id" :video="video" />
  </div>
</template>

<script>
import Video from '../src/components/Video.vue';
import API from "../src/api"

export default {
  components: { Video },
  created() {
    this.getVideos();
  },
  data() {
      return {
          videos: []
      }
  },
  methods: {
    async getVideos() {
      const response = await API.getVideos()
      this.videos = response
    },
  },
};
</script>

<style>
.content{
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-items: center;
    height: 100vh;
}

.video{
    flex: 1 0 21%;
}
</style>
