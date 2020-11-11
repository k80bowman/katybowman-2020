<template>
  <div class='header'>
    <h1 class='header__name'>Katy Bowman</h1>
    <Navigation />
  </div>
</template>

<style scoped lang='scss'>
  .header {
    max-width: 800px;
    margin: 0 auto;
  }

  .header__name {
    font-family: $heading-stack;
    font-size: 3em;
    color: $k80-text;
    text-align: center;
    font-weight: bold;
    margin: 1rem 0 0.5rem;

    @media #{$tablet-landscape} {
      font-size: 4em;
    }
  }
</style>