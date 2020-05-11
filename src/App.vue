<template>
  <div v-bind:style="{color: activeColor}">{{ message }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue!",
      activeColor: "green"
    };
  }
};
</script>

<style>
</style>