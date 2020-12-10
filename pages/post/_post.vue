<template>
  <div class='post'>
    <h2 v-text='post.title'></h2>
    <div class='cover-image' v-if='post.coverImage'>
      <CoverImage
        :coverImageUrl='post.coverImage.url'
        :coverImageAltText='post.coverImageAltText'
        :coverImageSourceName='post.coverImageSourceName'
        :coverImageSourceUrl='post.coverImageSourceUrl'
      />
    </div>
    <div v-html='post.content.html'></div>
  </div>
</template>

<script>
import postQuery from '../../queries/post.gql';

export default {
  data() {
    return {
      post: {},
    }
  },
  apollo: {
    post: {
      query: postQuery,
      variables() {
        return { slug: this.$route.params.post }
      }
    }
  }
}
</script>
