<template>
  <div class='experience-card'>
    <div>
      <h4 class='experience-card__title'>{{ experience.title }}</h4>
      <a class='experience-card__org' :href=experience.organizationLink>{{ experience.organization }}</a>
      <p class='experience-card__dates'>{{ experience.dates }}</p>
      <div class='experience-card__summary' v-if='experience.summary' v-html='experience.summary.html'></div>
    </div>
  </div>
</template>

<script>
export default {
  props:['experience'],
}
</script>

<style scoped lang='scss'>
  .experience-card {
    margin-top: 0.5rem;

    &__title {
      font-size: 1.5em;
      font-weight: normal;
      margin: 0;
      font-family: $heading-stack;
    }

    &__dates {
      margin: 0  0 0.5rem;
    }
  }
</style>