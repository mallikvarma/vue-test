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
    this.$store.dispatch("GET_TOP_SHOWS");
  }
};
</script>
<style lang="less">
.shows-main {
  .genre{ 
    font-size: 1.2rem;
    font-family: Helvetica, Arial, Verdana, Tahoma, sans-serif;
    color: #0a4143;
    margin-left: 5px;
    padding-left: 5px;
    border-left: 4px solid #353131;
    text-transform: capitalize;
  }

  .shows-container{
    display: flex;
    flex-wrap: wrap;
  }

}


</style>

