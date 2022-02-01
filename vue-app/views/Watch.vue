<template>
  <div class="watch">
    Video Id = {{$route.query.id}}
  </div>
</template>

<script>
export default {
  name: "Watch"
}
</script>

<style scoped>
.watch{
  color: white;
  font-size: 34px;
  text-align: center;
}
</style>