<template>
  <div
    class="cols-1 gap-6 mt-4 mdcols-2 lg:cols-3 2xl:cols-4 justify-content-md-center"
  >
    <b-row>
      <b-col>
        <NewsCard v-for="(post, index) in posts" :key="index" :post="post" />
      </b-col>
      <b-col>
        <NewsCard v-for="(post, index) in post2" :key="index" :post="post" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import NewsCard from "./NewsCard.vue"
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
    post2: {
      type: Array,
      required: true,
    },
  },
  components: {
    NewsCard,
  },
}
</script>
