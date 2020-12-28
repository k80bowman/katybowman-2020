<template>
  <div class="developer-content">
    <div class='experience'>
      <h2>Experience</h2>
      <h3>Technical Roles</h3>
      <div v-for="techExperience in technicalExperiences" :key="techExperience.id">
        <ExperienceCard :experience="techExperience" />
      </div>
      <h3>Community Building</h3>
      <div v-for="commExperience in communityExperiences" :key="commExperience.id">
        <ExperienceCard :experience="commExperience" />
      </div>
    </div>
    <PageLink pageLink="/blog/developer" linkText="All Technical Articles"/>
  </div>
</template>

<script>
  import gql from 'graphql-tag';
  import experienceFields from '../queries/experiencesFragment.gql';
  
  export default {
    name: 'Developer',
    data() {
      return {
        technicalExperiences: [],
        communityExperiences: []
      }
    },
    apollo: {
      technicalExperiences: {
        query: gql`
          query {
            technicalExperiences: experiences(where: {roleType: Tech}) {
              ...experienceFields
            }
          }
        `
      },
      communityExperiences: {
        query: gql`query {
          communityExperiences: experiences(where: { roleType: Community }) {
            dates
            id
            organization
            organizationLink
            roleType
            summary {
              html
            }
            title
          }
        }
        `
      }
    }
  }
</script>

<style scoped lang='scss'>

</style>