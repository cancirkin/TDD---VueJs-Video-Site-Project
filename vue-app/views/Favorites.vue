<template>
  <div class="container">
      <FavoriteRow class="favorite-row" v-for="video in videos" :key="video.id" :video="video" />
  </div>
</template>

<script>
import FavoriteRow from '../src/components/FavoriteRow.vue'
import axios from "axios";
export default {
  components: { FavoriteRow },
  mounted () {
    this.getVideos()
  },
  data() {
    return {
      videos: []
    }
  },
  methods: {
    getVideos() {
      axios
        .get("https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos")
        .then((res) => {
          this.videos = res.data.filter(x => x?.favorite === true)
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
}
</script>

<style scoped>
.favorite-row{
  margin-top: 40px;
}

.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>