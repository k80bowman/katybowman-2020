<template>
  <div class='post'>
    <h2 v-text='post.title'></h2>
    <div v-if='post.coverImage'>
      <CoverImage
        :coverImageUrl='post.coverImage.url'
        :coverImageAltText='post.coverImageAltText'
        :coverImageSourceName='post.coverImageSourceName'
        :coverImageSourceUrl='post.coverImageSourceUrl'
      />
    </div>
    <div v-if='post.bookImage'>
      <BookImage
        :bookImageUrl='post.bookImage.url'
        :bookImageAltText='post.bookImageAltText'
        :bookUrl='post.bookImageLink'
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
