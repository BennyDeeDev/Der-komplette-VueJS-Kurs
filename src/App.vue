<template>
  <div v-bind:style="{color: activeColor}" v-if="showMessage">{{ message }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue!",
      activeColor: "green",
      showMessage: false
    };
  }
};
</script>

<style>
</style>