<template>
  <div class="d-flex flex-column h-100">
    <Header title="FrontEnd Training VueJS"/>

    <!-- Begin page content -->
    <router-view />

    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";


export default {
  name: "App",
  data: function () {
    return {
     user:{}
    };
  },
  components: {
    Footer,
    Header
  },
};
</script>

<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
/* Custom page CSS
-------------------------------------------------- */
/* Not required for template or sticky footer method. */

main > .container {
  padding: 60px 15px 0;
}
</style>
