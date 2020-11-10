<template>
  <div class="container">
    <p>{{ publications[0].title }}</p>
    
  </div>
</template>

<script>
  import gql from 'graphql-tag'

  const featuredPublicationQuery = gql`
    query featuredPublication {
      publications(orderBy: date_DESC, first: 1) {
        id
        date
        excerpt
        publicationName
        title
        articleLink
        articleType
      }
    }
  `;
  
  export default {
    name: 'Home',
    apollo: {
      $loadingKey: 'loading',
      publications: {
        query: featuredPublicationQuery,
      }
    }
  }
</script>

<style>
</style>
