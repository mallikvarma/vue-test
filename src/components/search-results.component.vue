<template>
    <div class="search-results-main">
        <div class="title">      
            <div class="back-btn" @click="$router.push('/')">
                <img src="../assets/back.png" alt="back button">
                Home
            </div>
        </div>
        <h3>Search Results for "{{ this.$route.params.name}}"</h3>
        <div class="shows-container">
            <Show
            :name="show.name"
            :rating="show.rating"
            :image="show.image.medium || ''"
            :id="show.id"
            v-for="show in searchResults"
            v-bind:key="show.id" > {{ show }} </Show>   

            <div v-if="searchResults.length==0" class="no-results">No Results Found!</div>
        </div> 
    </div>
</template>
<script>
import { mapState } from "vuex";
import Show from "./show.component.vue";


export default {
    name: "SearchResults",
    components: { Show },
    computed: mapState(["searchResults"]),
    mounted: function() {
        // get all the toprates shows after mounted
        this.$store.dispatch("searchShows", this.$route.params.name);
    }
}
</script>
<style lang="less">
.search-results-main {
    .title {
      font-size: 2rem;      
      color: #e0b8b4;
      padding: 10px;
      padding-left: 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .back-btn {
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        color: #c44f43;
        font-weight: normal;
        cursor: pointer;
        img {
          width: 26px;
          height: 26px;
        }
      }
    }
    h3{
      width: 88%;
      margin: 0 auto;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .shows-container {
      display: flex;
      flex-wrap: wrap;
      width: 88%;
      margin: 0 auto;
      .no-results {
        color: red;
        font-size: 1.2em;
      }

      .show {
          margin-bottom: 10px;
      }
    }
}


@media only screen and (max-width: 360px) {
  .search-results-main {
    .shows-container, h3{
      width: 94%;
    }
  }
}

@media only screen and (max-width: 320px) {
  .search-results-main, h3 {
    .shows-container{
      width: 60%;
    }
  }
}

</style>