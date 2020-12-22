<template>
  <div class="posts">
      <h2>Blog Posts</h2>
      <PostList :posts="allPosts" />
    </div>
</template>

<script>
import gql from 'graphql-tag';
import allPostsQuery from '../../queries/allPosts.gql';

export default {
  name: 'Blog',
  data() {
    return {
      allPosts: []
    }
  },
  apollo: {
    allPosts: {
      query: allPostsQuery,
    }
  }
}
</script>

<style scoped lang='scss'>
h2 {
  font-family: $heading-stack;
  font-size: 3em;
  font-weight: normal;
  margin: 2rem 0 1rem;
}
</style>