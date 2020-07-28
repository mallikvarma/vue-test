<template>
    <header>
      <div class="logo" @click="$router.push('/')">
        <img src="../assets/tv.png" alt="tv icon">
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
  /**
   *  search for show. If in same route, then
   *  dispatch store action if not simply navigate to search route
   * 
   * @param showName - name of the show to search 
   */
    searchShow: function(showName) {
      this.$router.push("/search/" + showName); 
      if( this.$route.name === 'searchResults'){
        this.$store.dispatch("SEARCH_SHOWS", showName);
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
    align-items: center;
    background-color: #189ca2;
    
    .logo {
      display: flex;
      align-items: center;
      font-size: 1.5em;
      color: #13161b;
      text-shadow: 2px 2px 12px #fffdfd;
      cursor: pointer;
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