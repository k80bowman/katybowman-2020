<template>
  <div class='featured'>
    <h2>Featured Publication</h2>
    <PublicationCard :publication='publication' />
  </div>
</template>

<style scoped lang='scss'>
  .featured h2 {
    font-family: $heading-stack;
    font-size: 2.5em;
    font-weight: normal;
    margin: 1rem 0;
  }
</style>

<script>
  export default {
    props:['publication']
  }
</script>