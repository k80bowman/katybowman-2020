<template>
  <div class='featured'>
    <h2>Featured Publication</h2>
    <PublicationCard :article='publication' />
  </div>
</template>

<script>
export default {
  props:['publication']
}
</script>