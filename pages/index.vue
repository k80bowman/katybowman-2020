<template>
  <div class="index-content">
    <div v-for="publication in publications" :key="publication.id">
      <FeaturedPublication :publication="publication" />
    </div>
  </div>
</template>

<script>
  import gql from 'graphql-tag'
  import featuredPublicationQuery from '../queries/featuredPublication.gql';
  
  export default {
    name: 'Home',
    data() {
      return {
        publications: [],
      }
    },
    apollo: {
      publications: {
        query: featuredPublicationQuery,
      }
    }
  }
</script>

<style scoped lang='scss'>
  .index-content {
    margin-top: 2rem;
    color: $k80-text;
  }
</style>
