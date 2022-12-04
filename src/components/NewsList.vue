<template>
  <div>
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
