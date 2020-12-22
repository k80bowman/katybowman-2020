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
    data() {
      return {
        featuredPublications: [],
        homePagePosts: []
      }
    },
    apollo: {
      featuredPublications: {
        query: featuredPublicationsQuery,
        variables: { numPosts: 1 },
      },
      homePagePosts: {
        query: homePagePostsQuery,
      }
    }
  }
</script>

<style scoped lang='scss'>
  .featured {
    margin-bottom: 3.5rem;
  }
</style>
