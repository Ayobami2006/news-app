<template>
  <div id="app"  class="bg paragraph">
        <Layout>
            <h2 class="layout mb-8 text-4xl font-bold text-center text-success pt-4">
              News Section : <span class="text-success">{{ section }}</span>
            </h2>
            <NewsFilter v-model="section" :fetch="fetchNews" />
            <NewsList :posts="posts" :post2="post2" />
        </Layout>
      <router-view/>
  </div>
</template>

<script>
import Layout from "./components/Layout.vue"
import NewsFilter from "./components/NewsFilter.vue"
import NewsList from "./components/NewsList.vue"
// import data from "./posts.json"

import axios from "axios"
const api = 'ldCEwHQGzuG5sYctiCjOOVJducjY1qSu'

export default {
  components: {
    Layout,
    NewsFilter,
    NewsList,
  },
    data() {
    return {
      section: "home",
      posts: [],
      post2: [],
    }
  },
  methods: {
    // Helper function for extracting a nested image object
    extractImage(post) {
      const defaultImg = {
        url: "http://placehold.it/210x140?text=N/A",
        caption: post.title,
      }
      if (!post.multimedia) {
        return defaultImg
      }
      let imgObj = post.multimedia.find(
        media => media.format === "mediumThreeByTwo210"
      )
      return imgObj ? imgObj : defaultImg
    },
    async fetchNews() {
      try {
        const url = `https://api.nytimes.com/svc/topstories/v2/${this.section}.json?api-key=${api}`
        const response = await axios.get(url);
        console.log(response);
        const results = response.data.results
        const temp = results.map(post => ({
          title: post.title,
          abstract: post.abstract,
          url: post.url,
          thumbnail: this.extractImage(post).url,
          caption: this.extractImage(post).caption,
          byline: post.byline,
          published_date: post.published_date,
        }))
        this.posts = temp.slice(0, temp.length/2);
        this.post2 = temp.slice(temp.length/2, temp.length);
        console.log(this.posts);

      } catch (err) {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          console.log("Server Error:", err)
        } else if (err.request) {
          // client never received a response, or request never left
          console.log("Network Error:", err)
        } else {
          console.log("Client Error:", err)
        }
      }
    },
  },
  mounted() {
    this.fetchNews()
  },
}
</script>

<style>
.layout {
  font-weight: bold;
}
</style>
