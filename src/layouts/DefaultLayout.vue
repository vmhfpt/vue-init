<template>
  <div>
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
body {
  padding: 20px 20px;
  background: #f4f4f4;
}
</style>
