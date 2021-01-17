<template>
  <div class='publication-card'>
      <div>
        <p class='publication-card__type'>{{ this.categoryName }}</p>
        <a :href=publication.articleLink>
          <h3 class='publication-card__title'>{{ publication.title }}</h3>
        </a>
        <p class='publication-card__excerpt'>{{ publication.excerpt }}</p>
        <p class='publication-card__publication'>{{ publication.publicationName }}</p>
      </div>
  </div>
</template>

<script>
import { getCategoryName } from '../helpers/getCategoryName';

export default {
  props:['publication'],
  computed: {
    categoryName: function () {
      return getCategoryName(this.publication.category)
    }
  }
}
</script>

<style scoped lang='scss'>
  .publication-card {
    padding-bottom: 1.5rem;
    margin-top: 1.5rem;
    box-shadow: 0 1px 0 0 $k80-red;

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

      &:hover {
        color: $k80-red;
        text-decoration: underline $k80-red;
      }
    }

    &__excerpt {
      font-family: $body-stack;
      margin-left: 1rem;
    }
  }
</style>