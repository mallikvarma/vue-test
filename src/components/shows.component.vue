<template>
  <div class="shows-main">
   <template v-for="(shows, propertyName) in shows">
          <div  v-bind:key="propertyName" v-if="shows.length > 0">
              <div class="genre">{{propertyName}}</div>
              <div class="shows-container">
                  <Show
                  :name="show.name"
                  :rating="show.rating"
                  :image="show.image.medium || ''"
                  :id="show.id"
                  v-for="show in shows"
                  v-bind:key="show.id" > {{ show }} </Show>   
              </div> 
              <br>
          </div>
    </template>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Show from "./show.component.vue";

export default {
  name: "TopShows",
  components: { Show },
  computed: mapState(["shows"]),
  mounted: function() {
    // get all Topshows from store after mounted
    this.$store.dispatch("GET_TOP_SHOWS");
  }
};
</script>
<style lang="less" scoped>

.shows-main {
  width: 87%;
  margin: 0 auto;
  .genre{ 
    font-size: 1.2rem;
    color: #0a4143;
    margin-left: 5px;
    padding-left: 5px;
    border-left: 4px solid #353131;
    text-transform: capitalize;
  }

  .shows-container{
    display: flex;
    overflow-x: auto;

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

}


@media only screen and (max-width: 360px) {
  .shows-main {
    width: 92%;
  }
}




</style>

