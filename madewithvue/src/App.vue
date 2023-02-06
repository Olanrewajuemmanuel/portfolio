<template>
  <div>
    <AppWrapper name="createX" />
  </div>
</template>

<script>
import AppWrapper from './components/AppWrapper.vue'
export default {
  name: "App",
  components: {
    AppWrapper,
  }
};
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --primary:#F0D290;
    --secondary: #781D42;
    --black: #000;
    --font-default: 1rem;
    --white: #fff;
    --footer: #1F2133;       
  }
</style>


