<template>
  <div class="show-details-main" v-if="activeShow">
    <div class="title">      
      <div class="back-btn" @click="$router.go(-1)">
        <img src="../assets/back.png" alt="back button">
        back
      </div>
    </div>
    <div class="show-data" v-if="activeShow"> 
      <img class="show-img" @error="onImageLoadError($event)" :src="activeShow.right.image.original" v-if="activeShow.right.image && activeShow.right.image.original" alt="show poster">
      <div class="show-desc" >
        <div v-html="activeShow.right.summary"></div>        
        <div class="show-info">
            <div class="info">
              <template v-for="(value, propertyName) in activeShow.left" >
                <div class="data" v-bind:key="propertyName"  v-if="propertyName && value && value !==0">
                  <span>{{propertyName}}:</span>
                  <strong>{{value}}</strong>
                </div>  
              </template>

                <div class="casting" v-if="activeShow.right._embedded.cast && activeShow.right._embedded.cast.length > 0">
                  <div class="cast-title">Cast</div>
                  <template v-for="(cast, index) in activeShow.right._embedded.cast" >
                     <img @error="onImageLoadError($event)" alt="actor" :src="cast.person.image.medium"  v-bind:key="index" v-if="cast.person.image && cast.person.image.medium">
                  </template>
                </div>

            </div>
        </div>
      </div>
    </div>
    <div class="show-data-error" v-if="!activeShow">No Data Found!</div>
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
      // this is refered from 'imageErrHander' mixin for removing image
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
        margin-right: 20px;
      }
      .show-img {
        height: 400px;
        margin-top: 20px;
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
            > span {
              text-transform: uppercase;
            }
          }
          .casting {
            width: 95%;
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
    .show-data-error{
      font-size: 1.2rem;
      color: red;
    }
  }

  @media only screen and (max-width: 768px) {
    .show-details-main {
      .show-data {
        display: block;
        text-align: center;
        .show-info {
          .info {
            .casting{
              width: 95%;
            }
          }
        }

        .show-desc{
          text-align: left;
        }
      }
    }
  }

</style>

