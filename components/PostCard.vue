<template>
  <div class='post-card'>
      <div>
        <p class='post-card__type'>{{ this.categoryName }}</p>
        <NuxtLink :to=formattedLink>
          <h3 class='post-card__title'>{{ post.title }}</h3>
        </NuxtLink>
        <p class='post-card__excerpt'>{{ post.excerpt }}</p>
        <p class='post-card__date'>{{ new Date(post.date) | dateFormat('MMM D, YYYY') }}</p>
      </div>
  </div>
</template>

<script>
import { getCategoryName } from '../helpers/getCategoryName';

export default {
  props:['post'],
  computed: {
    formattedLink: function () {
      return `/post/${this.post.slug}`;
    },
    categoryName: function () {
      return getCategoryName(this.post.category)
    }
  }
}
</script>

<style scoped lang='scss'>
  .post-card {
    padding-bottom: 1.5rem;
    box-shadow: 0 1px 0 0 $k80-red;
    margin-top: 1.5rem;

    a {
      color: $k80-text;
      text-decoration: none;
    }

    &__type, &__date {
      font-family: $body-stack;
      color: $k80-red;
      margin: 0.25rem 0;
    }

    &__title {
      font-size: 1.5em;
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