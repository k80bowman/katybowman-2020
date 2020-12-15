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
    <div v-html="$md.render(post.contentMd)"></div>
  </div>
</template>

<script>
import prism from 'prismjs';
import postQuery from '../../queries/post.gql';

import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-graphql';
import 'prismjs/components/prism-scss'

import 'prismjs/themes/prism.css'

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
  },
  mounted() {
    Prism.highlightAll()
  }
}
</script>
