<template>
  <div class="app-container">
    <!-- Nav -->
      <NavBar :logo="name" />
    <!---->
    <!-- Body -->
      <router-view />
    <!---->
    <!-- Footer -->
      <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import NavBar from "./NavBar.vue";
export default {
  name: "AppWrapper",
  props: {
    name: String,
  },
  components: {
    Footer,
    NavBar,
  },
};
</script>


