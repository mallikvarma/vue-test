<template>
    <header>
      <div class="logo">
        <img src="../assets/tv.png">
        Top Rated Shows
      </div>
      <SearchField  @onSearch="searchShow" :style="{display:showSearch}" class="no-show"/>   
    </header>
</template>
<script>
import SearchField from "./search.component.vue";
export default {
  name: "AppHeader",
  components: { SearchField },
  computed: {
    showSearch: function() {
      return this.$route.name === "showDetails" ? "none" : "block";
    }
  },
  methods: {
    searchShow: function(showName) {
      if (showName) {
        this.$router.push("/show/" + showName);
      }
    }
  }
};
</script>
<style lang="less" scoped>

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
  }

  @media only screen and (max-width: 640px) {
    header {
      .logo{
        font-size: 1em;
      }  
    }
  }

  @media only screen and (max-width: 368px) {
    header {
      .no-show {
        display: none !important;
      }
    }
  }

</style>