<template>
  <div class="writer-content">
    <div class='featured'>
      <h2>Featured Publications</h2>
      <div v-for="publication in featuredPublications" :key="publication.id">
        <PublicationCard :publication="publication" />
      </div>
      <PageLink :pageLink="allPublicationsLink" :linkText="allPublicationsLinkText"/>
    </div>
    <div class="posts">
      <h2>Writing Posts</h2>
      <PostList :posts="writerPagePosts" />
    </div>
    <PageLink :pageLink="allPostsLink" :linkText="allPostsLinkText"/>
  </div>
</template>

<script>
  import featuredPublicationsQuery from '../queries/featuredPublications.gql';
  import writerPagePostsQuery from '../queries/writerPagePosts.gql';
  
  export default {
    name: 'Writer',
    data() {
      return {
        featuredPublications: [],
        homePagePosts: [],
        allPublicationsLink: '/publications',
        allPublicationsLinkText: 'All Publications',
        allPostsLink: '/blog/writing',
        allPostsLinkText: 'All Writing Posts',
      }
    },
    apollo: {
      featuredPublications: {
        query: featuredPublicationsQuery,
        variables: { numPosts: 3 },
      },
      writerPagePosts: {
        query: writerPagePostsQuery,
      }
    }
  }
</script>

<style scoped lang='scss'>
  .featured {
    margin-bottom: 3.5rem;
  }
</style>