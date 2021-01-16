<template>
  <div class="posts">
      <h2>Blog Posts & Publications</h2>
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
  async asyncData ({ app }) {
    const client = app.apolloProvider.defaultClient;
    const allPosts = await client.query({
      query: allPostsQuery
    }).then(({ data }) => data && data.allPosts);
    return { allPosts };
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