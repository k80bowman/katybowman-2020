<template>
  <div class="developer-content">
    <div class='experience'>
      <h2>Experience</h2>
      <h3>Technical Roles</h3>
      <div class='experience__group'>
        <div class='experience__group-card' v-for="techExperience in technicalExperiences" :key="techExperience.id">
          <ExperienceCard :experience="techExperience" />
        </div>
      </div>
      <h3>Community Building</h3>
      <div class='experience__group'>
        <div class='experience__group-card' v-for="commExperience in communityExperiences" :key="commExperience.id">
          <ExperienceCard :experience="commExperience" />
        </div>
      </div>
    </div>
    <h2>Technical Articles</h2>
    <PostList :posts="devPagePosts" />
    <PageLink pageLink="/blog/developer" linkText="All Technical Articles"/>
  </div>
</template>

<script>
  import gql from 'graphql-tag';
  import { technicalExperiencesQuery, communityExperiencesQuery } from '../queries/experiences.gql';
  import devPagePostsQuery from '../queries/devPagePosts.gql';
  
  export default {
    name: 'Developer',
    async asyncData ({ app }) {
      const client = app.apolloProvider.defaultClient
      const technicalExperiences = await client.query({
        query: technicalExperiencesQuery
      }).then(({ data }) => data && data.technicalExperiences);

      const communityExperiences = await client.query({
        query: communityExperiencesQuery
      }).then(({ data }) => data && data.communityExperiences);

      const devPagePosts = await client.query({
        query: devPagePostsQuery
      }).then(({ data }) => data && data.devPagePosts);

      return { technicalExperiences, communityExperiences, devPagePosts };
    },
    data() {
      return {
        technicalExperiences: [],
        communityExperiences: [],
        devPagePosts: []
      }
    }
  }
</script>

<style scoped lang='scss'>
  .experience {
    &__group {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &__group-card {
      width: 45%;
    }

    h3 {
      border-bottom: solid 1px #DB0000;
    }
  }
</style>