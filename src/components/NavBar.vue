<template>
  <div class="navbar">
    <div class="logo">
      <router-link :to="{name: 'ToDoList'}">
        <img class="logo" src="@/assets/logo.png" />
      </router-link>
    </div>
    <h1>
      <router-link :to="{name: 'Login'}">Login</router-link>
    </h1>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-around;
}
.logo {
  width: 64px;
  height: 64px;
}
</style>