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
  </div>
</template>

<script>
  import gql from 'graphql-tag'
  import featuredPublicationQuery from '../queries/featuredPublication.gql';
  import homePagePostsQuery from '../queries/homePagePosts.gql';
  
  export default {
    name: 'Home',
    data() {
      return {
        featuredPublication: [],
        homePagePosts: [],
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
  .index-content {
    color: $k80-text;
  }

  .featured {
    margin-bottom: 3rem;
  }

  h2 {
    margin-top: 2rem;
    font-family: $heading-stack;
    font-size: 3em;
    font-weight: normal;
    margin: 2rem 0 1rem;
  }
</style>
