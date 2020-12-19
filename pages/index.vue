<template>
  <div class="index-content">
    <div class='featured'>
      <h2>Featured Publication</h2>
        <div v-for="publication in featuredPublication" :key="publication.id">
          <PublicationCard :publication="publication" />
        </div>
    </div>
    <div class="posts">
      <h2>Blog Posts</h2>
      <PostList :posts="homePagePosts" />
    </div>
    <PageLink :pageLink="allPostsLink" :linkText="allPostsLinkText"/>
  </div>
</template>

<script>
  import featuredPublicationQuery from '../queries/featuredPublication.gql';
  import homePagePostsQuery from '../queries/homePagePosts.gql';
  
  export default {
    name: 'Home',
    data() {
      return {
        featuredPublication: [],
        homePagePosts: [],
        allPostsLink: '/blog',
        allPostsLinkText: 'All Posts',
      }
    },
    apollo: {
      featuredPublication: {
        query: featuredPublicationQuery,
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
