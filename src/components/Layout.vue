<template>
  <div>
    <Header />
    <main class="container size">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue"
import Footer from "./Footer.vue"

export default {
  components: {
    Header,
    Footer
  }

}
</script>

<style>
.size {
  min-height: 80vh;
}
</style>

}
</script>

<style>

</style>
