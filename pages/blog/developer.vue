<template>
  <div class="posts">
      <h2>Blog Posts & Publications - Technical</h2>
      <PostList :posts="devPosts" />
    </div>
</template>

<script>
import gql from 'graphql-tag';
import devPostsQuery from '../../queries/devPosts.gql';

export default {
  name: 'Blog_Developer',
  data() {
    return {
      devPosts: []
    }
  },
  async asyncData ({ app }) {
    const client = app.apolloProvider.defaultClient;
      const devPosts = await client.query({
        query: devPostsQuery
      }).then(({ data }) => data && data.devPosts);
      return { devPosts };
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