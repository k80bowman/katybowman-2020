<template>
  <div class="posts">
      <h2>Blog Posts & Publications - Writing</h2>
      <PostList :posts="writingPosts" />
    </div>
</template>

<script>
import gql from 'graphql-tag';
import writingPostsQuery from '../../queries/writingPosts.gql';

export default {
  name: 'Blog_Writing',
  data() {
    return {
      writingPosts: []
    }
  },
  async asyncData ({ app }) {
    const client = app.apolloProvider.defaultClient;
    const writingPosts = await client.query({
      query: writingPostsQuery
    }).then(({ data }) => data && data.writingPosts);
    return { writingPosts };
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