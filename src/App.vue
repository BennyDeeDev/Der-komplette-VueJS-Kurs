<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
//https://stackoverflow.com/questions/42260233/vue-js-difference-between-v-model-and-v-bind
export default {
  components: {
    NavBar
  }
};
</script>

<style>
</style>