<template>
  <div class='book-image'>
    <a v-bind:href='bookUrl'>
      <img v-bind:src='bookImageUrl' v-bind:alt-text='bookImageAltText' />
    </a>
  </div>
</template>

<script>
export default {
  props:[
    'bookImageUrl',
    'bookImageAltText',
    'bookUrl'
  ]
}
</script>

<style scoped lang='scss'>
.book-image {
  max-width: 10rem;
  float: left;
  margin: 0.3rem 2rem 0.5rem 0;
  
  img {
    width: 100%;
  }

  a {
    width: 100%;
    height: 100%;
  }

  a:hover {
    box-shadow: none;
  }
}
</style>
