<template>
  <div class="show" @click="showDetails">
    <img :src="image">
    <div class="show-info-container">
      <span>{{name}}</span>
      <div class="rating">
        <img src="../assets/star.png">
        {{rating}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Show",
  props: ["name", "rating", "image", "id"],
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
  cursor: pointer;
  .show-info-container {
    display: flex;
    justify-content: space-between;
    font-size: 0.8em;
    font-family: arial;
    padding: 3px;
    background-color: #775656;
    color: white;

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

