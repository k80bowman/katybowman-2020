<template>
  <div class='nav'>
    <NuxtLink to="/developer" class='nav__link'>Developer</NuxtLink>
    <NuxtLink to="/writer" class='nav__link'>Writer</NuxtLink>
  </div>
</template>

<style scoped lang='scss'>
  .nav {
    margin: 0.5rem auto 3.5rem;
    border-top: solid 1px $k80-red;
    border-bottom: solid 1px $k80-red;
    display: flex;
    justify-content: center;

    &__link {
      font-family: $heading-stack;
      font-size: 1.25em;
      color: $k80-text;
      padding: 1rem 0;
      width: 50%;
      text-align: center;
      transition: background-color 1s ease;

      @media #{$tablet-landscape} {
        font-size: 1.5em;
      }
    }

    &__link:hover {
      background-color: $k80-text;
      color: white;
    }
  }
</style>
