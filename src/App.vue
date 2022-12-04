<template>
  <div id="app"  class="bg">
        <Layout>
            <h2 class="layout mb-8 text-4xl font-bold text-center text-success pt-4">
              News Section : <span class="text-success">{{ section }}</span>
            </h2>
            <NewsFilter v-model="section" :fetch="fetchNews" />
            <NewsList v-if="!loading && !error" :posts="posts" :post2="post2" />

            <!-- Start of loading animation -->
            <b-col md="10" class="mb-5 align-center" v-if="loading">
              <p class="text text-secondary" >Loading...</p>
              <b-icon icon="three-dots" variant="secondary" animation="cylon" font-scale="5"></b-icon>
           </b-col>
            <!-- End of loading animation -->

            <!-- Start of error alert -->
            <div class="mt-5 bg-error" v-if="error">
              <h3 class="px-4 py-1 text-4xl bold text-white bg-danger">
                {{ error.title }}
              </h3>
              <p class="p-4 text-lg bold text-danger">{{ error.message }}</p>
            </div>
            <!-- End of error alert -->
        </Layout>
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
      loading: false,
      error: null,
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
        // console.log('start');
        // console.log(this.section);
        this.error = null
        this.loading = true
        const url = `https://api.nytimes.com/svc/topstories/v2/${this.section}.json?api-key=${api}`
        const response = await axios.get(url)
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
          this.error = {
            title: "Server Response",
            message: err.message,
          }
        } else if (err.request) {
          // client never received a response, or request never left
          this.error = {
            title: "Unable to Reach Server",
            message: err.message,
          }
        } else {
          // There's probably an error in your code
          this.error = {
            title: "Application Error",
            message: err.message,
          }
        }
      }
      this.loading = false
    },
  },
  mounted() {
    this.fetchNews()
  },
}
</script>

<style>
.bg {
  background-color:rgb(238, 250, 243);
}
.layout {
  font-weight: bold;
}
.bg-error {
  background-color:lavenderblush
}
.bold {
  font-weight: bolder;
}
.text {
  margin: 0 auto;
  font-weight: bolder;
  font-size: 50px;
}
.align-center {
  text-align: center;
}
</style>
