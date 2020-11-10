<template>
  <div class='article-card'>
    <p class='article-card__type'>{{ publication.articleType }}</p>
    <h3 class='article-card__title'></h3>
    <p class='article-card__excerpt'></p>
    <p class='article-card__publication'></p>
  </div>
</template>

<script>
export default {
  props:['publication']
}
</script>