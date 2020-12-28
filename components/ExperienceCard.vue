<template>
  <div class='experience-card'>
    <NuxtLink :to=formattedLink>
      <div>
        <h4 class='experience-card__title'>{{ experience.title }}</h4>
        <a class='experience-card__org' :href=experience.organizationLink>{{ experience.organization }}</a>
        <p class='experience-card__dates'>{{ experience.dates }}</p>
        <div class='experience-card__summary' v-html='experience.summary.html'></div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props:['experience'],
}
</script>

<style scoped lang='scss'>
  .experience-card {
    padding-bottom: 1.5rem;
    margin-top: 1.5rem;

    &__title {
      font-size: 1.5em;
      font-weight: normal;
      margin: 0.5rem 0;
      font-family: $heading-stack;
    }
  }
</style>