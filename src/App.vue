<template>
  <div id="app">
    <AppHeader />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/app-header.component.vue";
export default {
  name: "App",
  components: { AppHeader }
};
</script>

<style lang="less">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
}

#app {
  width: 75%;
  display: flex;
  flex-direction: column;
  margin: auto;
}


@media only screen and (max-width: 640px) {
  #app {
    width: inherit;
    margin: 0px;
  }
}

</style>
