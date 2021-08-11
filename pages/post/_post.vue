<template>
  <div v-if='post.contentMd' class='post'>
    <h2 v-text='post.title'></h2>
    <p>{{ new Date(post.date) | dateFormat('MMM D, YYYY') }}</p>
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
  async asyncData ({ app, route }) {
    const client = app.apolloProvider.defaultClient;
    const post = await client.query({
      query: postQuery,
      variables: { slug: route.params.post }
    }).then(({ data }) => data && data.post);
    return { post };
  },
  mounted() {
    Prism.highlightAll()
  }
}
</script>
