<template>
  <div class="show" @click="showDetails">
    <img :src="image" @error="onImageLoadError($event)">
    <div class="show-info-container">
      <span>{{name}}</span>
      <div class="rating" v-if="rating && rating > 0">
        <img src="../assets/star.png" >
        {{rating}}
      </div>
    </div>
  </div>
</template>
<script>
import imageErrHandler from "../mixins/image-error-handler.mixin.js"

export default {
  name: "Show",
  mixins: [imageErrHandler],
  props: { 
      name: String,
      rating: Number,
      image: String,
      id: Number 
      },
  methods: {
    showDetails: function() {
      this.$router.push("/show/" + this.id);
    }
  }
};
</script>
<style lang="less">
.show {
  margin: 5px;
  max-width: 210px;
  cursor: pointer;
  position: relative;
  .show-info-container {
    display: flex;
    justify-content: space-between;
    font-size: 0.9em;
    font-family: arial;
    padding: 3px;
    background-color: #0d5b5f;
    color: #fffdfd;
    width: 100%;
    box-sizing: border-box;

    .rating {
      display: flex;
      align-content: center;
      margin-right: 5px;
      img {
        width: 15px;
        height: 15px;
        margin-right: 5px;
      }
    }
  }
}
</style>

