<template>
  <div class='publication-card'>
    <a :href=publication.articleLink>
      <div>
        <p class='publication-card__type'>{{ publication.articleType }}</p>
        <h3 class='publication-card__title'>{{ publication.title }}</h3>
        <p class='publication-card__excerpt'>{{ publication.excerpt }}</p>
        <p class='publication-card__publication'>{{ publication.publicationName }}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props:['publication']
}
</script>

<style scoped lang='scss'>
  .publication-card {
    padding-bottom: 1.5rem;
    box-shadow: 0 1px 0 0 $k80-red;

    &:hover {
      box-shadow: 0 3px 0 0 $k80-red;

      .publication-card__title {
        color: $k80-red;
      }
    }

    a {
      color: $k80-text;
      text-decoration: none;
    }

    &__type, &__publication {
      font-family: $body-stack;
      color: $k80-red;
      margin: 0.25rem 0;
    }

    &__title {
      font-size: 2em;
      font-weight: normal;
      margin: 0.5rem 0;
    }

    &__excerpt {
      font-family: $body-stack;
      margin-left: 1rem;
    }
  }
</style>