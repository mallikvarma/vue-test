<template>
  <div class="show-details-main" v-if="activeShow">
    <div class="title">
      <span>{{activeShow.name}}</span>
      <div class="back-btn" @click="$router.go(-1)">
        <img src="../assets/back.png">
        back
      </div>
    </div>
    <div class="show-data">
      <div class="show-img" :style="{backgroundImage: `url(${activeShow.images.original})`}"></div>
      <div class="show-content">
        <div class="show-desc" v-html="activeShow.desc"></div>
        <div class="show-info">
          <div>
            Runtime:
            <b>{{activeShow.runtime}}</b>
          </div>
          <div>
            Rating:
            <b>{{activeShow.rating}}</b>
          </div>
          <div>
            Language:
            <b>{{activeShow.language}}</b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "ShowDetails",
  computed: mapState(["activeShow"]),
  mounted: function() {
    let action = "getShowDetails";
    //if its a seach request
    if (isNaN(this.$route.params.id)) {
      action = "getShowDetailsByName";
    }
    this.$store.dispatch(action, this.$route.params.id);
  }
};
</script>
<style lang="less">
.show-details-main {
  display: flex;
  flex-direction: column;

  .title {
    font-size: 2rem;
    font-family: Arial;
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

  .show-data {
    display: flex;

    .show-img {
      width: 100px;
      height: 200px;
      flex: 1;
      height: 400px;
      background-size: contain;
      background-repeat: no-repeat;
      margin-right: 10px;
    }

    .show-content {
      flex: 2;
      flex-direction: column;
      display: flex;
      .show-desc {
        font-family: Arial;
        flex: 1;
      }

      .show-info {
        flex: 2;
        background-color: #f4f4f5;
        border-radius: 26px;
        font-family: arial;
        padding: 34px;

        > div {
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>

