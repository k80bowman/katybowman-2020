<template>
  <div class="postList">
    <div v-for="post in posts" :key="post.id">
        <PostCard :post="post" />
    </div>
  </div>
</template>

<script>
export default {
  props:['posts']
}
</script>
