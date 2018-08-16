<template>
  <div id="app">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Home from "./pages/home/Home";

export default {
    components: {
        Home
    }
};
</script>

<style>
</style>
