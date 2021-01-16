<template>
  <div class="posts">
      <h2>Publications</h2>
      <PostList :posts="allPublications" />
    </div>
</template>

<script>
import gql from 'graphql-tag';
import allPublicationsQuery from '../queries/allPublications.gql';

export default {
  name: 'Publications',
  data() {
    return {
      allPublications: []
    }
  },
  async asyncData ({ app }) {
    const client = app.apolloProvider.defaultClient;
    const allPublications = await client.query({
      query: allPublicationsQuery
    }).then(({ data }) => data && data.allPublications);
    return { allPublications }
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