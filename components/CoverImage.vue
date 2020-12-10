<template>
  <div class='cover-image'>
    <img v-bind:src='coverImageUrl' v-bind:alt-text='coverImageAltText' />
    <div v-if=coverImageSourceName class='cover-image__attribution'>
        <span>source: <a v-bind:href='coverImageSourceUrl'>{{ coverImageSourceName }}</a></span>
    </div>
  </div>
</template>

<script>
export default {
  props:[
    'coverImageUrl',
    'coverImageAltText',
    'coverImageSourceName',
    'coverImageSourceUrl'
  ]
}
</script>

<style scoped lang='scss'>
.cover-image {
  text-align: center;
  margin: 2rem;

  img {
    max-width: 100%;
  }

  &__attribution {
    font-size: .8rem;
  }
}
</style>
