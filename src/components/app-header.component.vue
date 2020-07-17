<template>
    <header>
      <div class="logo">
        <img src="../assets/tv.png">
        Popular TV Shows
      </div>
      <SearchField  @onSearch="searchShow" />   
    </header>
</template>
<script>
import SearchField from "./search.component.vue";
export default {
  name: "AppHeader",
  components: { SearchField },
  methods: {
    searchShow: function(showName) { 
      if( this.$route.name === 'searchResults'){
        this.$router.push("/search/" + showName);
        this.$store.dispatch("GET_SHOW_DETAILS_BY_NAME", showName);
      }else{
        this.$router.push("/search/" + showName);
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
    background-color: #189ca2;
    
    .logo {
      display: flex;
      align-items: center;
      font-size: 1.5em;
      font-family: sans-serif;
      color: #13161b;
      text-shadow: 2px 2px 12px #fffdfd;
      img {
        width: 50px;
        height: auto;
      }
    }
  }

 
  @media only screen and (max-width: 500px) {
    header {
      height: 50px;
      .logo{
        font-size: 1rem;
        img {
          width: 30px;
        }
      }
    }
  }

</style>