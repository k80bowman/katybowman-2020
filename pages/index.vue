<template>
  <div class="index-content">
    <div class='featured'>
      <h2>Featured Publication</h2>
        <div v-for="publication in featuredPublications" :key="publication.id">
          <PublicationCard :publication="publication" />
        </div>
    </div>
    <div class="posts">
      <h2>Blog Posts</h2>
      <PostList :posts="homePagePosts" />
    </div>
    <PageLink pageLink="/blog" linkText="All Posts"/>
  </div>
</template>

<script>
  import featuredPublicationsQuery from '../queries/featuredPublications.gql';
  import homePagePostsQuery from '../queries/homePagePosts.gql';
  
  export default {
    name: 'Home',
    async asyncData ({ app }) {
      const client = app.apolloProvider.defaultClient;
      const homePagePosts = await client.query({
        query: homePagePostsQuery
      }).then(({ data }) => data && data.homePagePosts);

      const featuredPublications = await client.query({
        query: featuredPublicationsQuery, 
        variables: { numPosts: 1 }
      }).then(({ data }) => data && data.featuredPublications);

      return { homePagePosts, featuredPublications };
    },
    data() {
      return {
        featuredPublications: [],
        homePagePosts: []
      }
    }
  }
</script>

<style scoped lang='scss'>
  .featured {
    margin-bottom: 3.5rem;
  }
</style>
