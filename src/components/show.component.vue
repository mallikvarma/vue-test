<template>
  <div class="show" @click="showDetails">
    <img :src="image" @error="onImageLoadError($event)" class="poster" alt="show poster">
    <div class="show-info-container">
      <span>{{name}}</span>
      <div class="rating" v-if="rating && rating > 0">
        <img src="../assets/star.png" alt="rating">
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
  /**
   *  Navigate to show route upon clicking on the show
   */
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

@media only screen and (max-width: 640px) {
  .show {
    width: 150px;
    .poster {
      width: 150px;
    }
  }
}



</style>

