<template>
  <div id="app">
    <AppHeader />
    <div class="app-content">
      <router-view></router-view>
    </div>
    <div class="loader" v-if="showLoader">Loading...</div>
    <footer> Capgemini </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AppHeader from "./components/app-header.component.vue";
export default {
  name: "App",
  components: { AppHeader },
  computed: mapState(["showLoader"])
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
  height:100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  font-family: Helvetica, Arial, Verdana, Tahoma, sans-serif;

  .loader {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: white;
    opacity: 0.9;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
  }

  .app-content{
     flex: 1;
     overflow: auto;
     margin: 10px;
     margin-right: 0px;
      &::-webkit-scrollbar {
        width: 10px;
      }
      &::-webkit-scrollbar-track {
        background: #f1f1f1; 
      }
      &::-webkit-scrollbar-thumb {
        background: #738b8c;
      }
      &::-webkit-scrollbar-thumb:hover {
        background: #555; 
      }
  }

  footer {
    height: 30px;
    background-color: #353131;
    color: #a0a6a7;
    font-size: 0.7em;
    display: flex;
    align-items: center;
  }

}


@media only screen and (max-width: 640px) {
  #app {
    width: inherit;
    margin: 0px;
  }
}

@media only screen and (max-width: 768px) {
  #app{
      .app-content{
          &::-webkit-scrollbar {
            width: inherit;
          }
          &::-webkit-scrollbar-track {
            background:inherit;
          }
          &::-webkit-scrollbar-thumb {
            background: inherit;
          }
          &::-webkit-scrollbar-thumb:hover {
            background: inherit;
          }
      }
  }
}
</style>
