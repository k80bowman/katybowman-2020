<template>
  <div class='nav'>
    <span class='nav__link'>Developer</span>
    <span class='nav__link'>Writer</span>
  </div>
</template>

<style scoped lang='scss'>
  .nav {
    width: 95%;
    margin: 1rem auto;
    border-top: solid 1px $k80-red;
    border-bottom: solid 1px $k80-red;
    display: flex;
    justify-content: center;



    &__link {
      font-family: $heading-stack;
      font-size: 1.25em;
      font-weight: bold;
      color: $k80-text;
      padding: 1rem 0;
      width: 50%;
      text-align: center;
      transition: background-color 1s ease;

      @media #{$tablet-landscape} {
        font-size: 2em;
      }
    }

    &__link:hover {
      background-color: $k80-text;
      color: white;
    }
  }
</style>
