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
    this.$store.dispatch("getTopShows");
  }
};
</script>
<style lang="less">
.shows-main {
  display: flex;
  margin: auto;
  flex-wrap: wrap;
}
</style>

