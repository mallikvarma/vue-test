<template>
    <div class="search" >
        <input placeholder="search" v-model="showName" @keyup.enter="searchShow">
        <a @click="searchShow">go</a>
        <span class="error" v-if="error">*please enter show name</span>
    </div>
</template>
<script>
export default {
  name: "SeachField",
  data: function() {
    return {
      showName: "",
      error: false
    };
  },
  methods: {
    searchShow: function() {
      if (this.showName) {      
        this.error = false;  
        this.$emit("onSearch", this.showName)
      } else {
        this.error = true;
      }
    }
  }
};
</script>
<style lang="less" scoped>
  .search {
    margin-right: 10px;
    input {
      width: 128px;
      border: 0px;
      height: 20px;
      border-radius: 5px;
    }

    a {
      font-family: arial;
      background-color: #f3ea88;
      color: #334632;
      padding: 5px;
      border-radius: 12px;
      width: 12px;
      height: 10px;
      margin: 4px;
      font-size: 0.9em;
      cursor: pointer;
    }

    .error {
      color: white;
      display: block;
      font-family: arial;
      font-size: 0.8em;
      margin-top: 3px;
    }
  }


 @media only screen and (max-width: 640px) {
  .search {
    margin-right: 10px;
  }
}
</style>