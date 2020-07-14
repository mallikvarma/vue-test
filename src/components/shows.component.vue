<template>
  <div class="shows-main">
    <Show
      :name="show.name || ''"
      :rating="show.rating || ''"
      :image="show.images.medium || ''"
      :id="show.id"
      v-for="show in shows"
      v-bind:key="show.id"
    ></Show>
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
  display: flex;
  margin: auto;
  flex-wrap: wrap;
}

@media only screen and (max-width: 640px) {
  .shows-main {
    justify-content:  center;
  }
}
</style>

