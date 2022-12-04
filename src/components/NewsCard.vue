<template>
  <div class="container">
        <section class="p-5 m-3  rounded-lg shadow-lg bg-light w-20" style="height: 580px; width: 410px;">
          <div>
            <b-card
              :title="post.title"
              :img-src="post.thumbnail"
              img-alt="Image"
              img-top
              tag="article"
              style="width: 20rem; max-height: 42rem;"
              class="mb-2"
            >
            <b-card-text style="width: 295px">
              <a
              class="text-xl font-bold text-center text-green-800 hover:text-green-600 hover:underline"
              :href="post.url"
              target="_blank"
              rel="noreferrer"
            >
              {{ post.title }}
            </a>
              <p class="justify-content-center text-light-700 line-clamp-4">
                {{ post.abstract }}
              </p>
            </b-card-text>

            </b-card>
          </div>
          <div>
            <p class="mt-4 font-bold text-gray-600">{{ post.byline }}</p>
            <p class="font-light text-gray-600">
              {{ formatDate(post.published_date) }}
            </p>
          </div>
      </section>
  </div>
</template>

<script>
import { format } from "date-fns"

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
    post2: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate(strDate) {
      return format(new Date(strDate), "MMMM do, yyyy")
    },
  },
}
</script>
