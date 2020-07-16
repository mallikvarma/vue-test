<template>
  <div class="show-details-main" v-if="activeShow">
    <div class="title">      
      <div class="back-btn" @click="$router.go(-1)">
        <img src="../assets/back.png">
        back
      </div>
    </div>
    <div class="show-data">
      <img class="show-img" @error="onImageLoadError($event)" :src="activeShow.right.image.original" v-if="activeShow.right.image && activeShow.right.image.original">
      <div class="show-desc" >
        <div v-html="activeShow.right.summary"></div>        
        <div class="show-info">
            <div class="info">
              <template v-for="(value, propertyName) in activeShow.left" >
                <div class="data" v-bind:key="propertyName"  v-if="propertyName && value && value !==0">
                  {{propertyName}}:
                  <b>{{value}}</b>
                </div>  
              </template>

                <div class="casting" v-if="activeShow.right._embedded.cast && activeShow.right._embedded.cast.length > 0">
                  <div class="cast-title">Cast</div>
                  <template v-for="(cast, index) in activeShow.right._embedded.cast" >
                     <img @error="onImageLoadError($event)" :src="cast.person.image.medium"  v-bind:key="index" v-if="cast.person.image && cast.person.image.medium">
                  </template>
                </div>

            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import imageErrHandler from "../mixins/image-error-handler.mixin.js";

export default {
  name: "ShowDetails",
  mixins: [imageErrHandler],
  computed: mapState(["activeShow"]),
  data: function(){
    return {
       mixinHint: 'elementLevel'
    }
  },
  mounted: function() {
    this.$store.dispatch("GET_SHOW_DETAILS", this.$route.params.id);
  }
};
</script>
<style lang="less">

  .show-details-main {
      display: flex;
      flex-direction: column;
      height: 100%;
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
      height: 100%;
      > * {
        font-family: 'Arial';
        margin-right: 20px;
      }
      .show-img {
        width: 250px;
      }
      .show-info {
        .info {
          min-width: 250px;
          background-color: #bfdfe0;
          border-radius: 10px;
          padding: 10px;
          .data{
            display: inline-block;
            opacity: 0.7;
            background-color: white;
            margin: 5px;
            border-radius: 5px;
            padding: 5px;
            border: 0.5px solid gray;
          }
          .casting {
            width: 80%;
            .cast-title{
              font-size: 1.2rem;
              margin-left: 10px;
              margin-top: 22px;
            }
            img{
              height: 140px;
              border: 1px solid white;
              margin: 10px;
              border-radius: 15px;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 640px) {

  }

</style>

