<template>
  <div class="postList">
    <div v-for="post in posts" :key="post.id">
      <div v-if="post.publication">
        <PublicationCard :publication="post" />
      </div>
      <div v-else>
        <PostCard :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['posts']
}
</script>

<style scoped lang='scss'>
  
</style>