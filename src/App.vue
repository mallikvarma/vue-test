<template>
  <div id="app">
    <header>
      <div class="logo">
        <img src="./assets/tv.png">
        Top Rated Shows
      </div>
      <div class="search" :style="{display:showSearch}">
        <input placeholder="search" v-model="showName" @keyup.enter="searchShow">
        <a @click="searchShow">go</a>
      </div>
    </header>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      showName: ""
    };
  },
  computed: {
    showSearch: function() {
      return this.$route.name === "showDetails" ? "none" : "block";
    }
  },
  methods: {
    searchShow: function() {
      if (this.showName) {
        this.$router.push("/show/" + this.showName);
      }
    }
  }
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

  header {
    display: flex;
    justify-content: space-between;
    height: 80px;
    display: flex;
    align-items: center;
    background-color: #efecec;
    background: linear-gradient(
      90deg,
      #d9d9dd 0%,
      #ebebee 66%,
      #fafafb 78%,
      #ffffff 100%
    );

    .logo {
      display: flex;
      align-items: center;
      font-size: 1.5em;
      font-family: sans-serif;
      color: #000000;
      text-shadow: 2px 2px 17px #2b1010;
      img {
        width: 50px;
        height: auto;
      }
    }

    .search {
      margin-right: 75px;
      input {
        width: 110px;
      }

      a {
        font-family: arial;
        background-color: #13a913;
        color: white;
        padding: 5px;
        border-radius: 12px;
        width: 12px;
        height: 10px;
        margin: 4px;
        font-size: 0.9em;
        cursor: pointer;
      }
    }
  }
}
</style>
