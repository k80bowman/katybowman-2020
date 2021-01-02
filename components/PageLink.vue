<template>
  <NuxtLink class="page-link" :to=pageLink>{{ linkText }}</NuxtLink>
</template>

<script>
export default {
  props:['pageLink', 'linkText'],
}
</script>

<style lang="scss" scoped>
.page-link {
  display: inline-block;
  padding-top: 2rem;
  font-size: 2em;
  color: $k80-text;
  font-family: $heading-stack;

  &:hover {
    color: $k80-red;
  }
}
</style>