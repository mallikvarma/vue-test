<template>
  <div class="shows-main">
    <div v-for="(shows, propertyName) in shows" v-bind:key="propertyName">
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
    font-family: sans-serif;
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

@media only screen and (max-width: 640px) {

}
</style>

