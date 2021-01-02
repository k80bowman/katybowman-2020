<template>
  <div class='post-card'>
    <NuxtLink :to=formattedLink>
      <div>
        <p class='post-card__type'>{{ this.categoryName }}</p>
        <h3 class='post-card__title'>{{ post.title }}</h3>
        <p class='post-card__excerpt'>{{ post.excerpt }}</p>
        <p class='post-card__date'>{{ this.formattedDate }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import { getCategoryName } from '../helpers/getCategoryName';

const formatDate = (rawDate) => {
  const date = new Date(rawDate);
  const dateArray = date.toDateString().split(' ');
  return `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]}`;
};

export default {
  props:['post'],
  computed: {
    formattedDate: function () {
      return formatDate(this.post.date);
    },
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

    &:hover {
      box-shadow: 0 3px 0 0 $k80-red;

      .post-card__title {
        color: $k80-red;
      }
    }

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