<template>
    <div class="search" >
        <input placeholder="search" v-model="showName" @keyup.enter="searchShow">
        <a @click="searchShow">go</a>
    </div>
</template>
<script>
export default {
  name: "SeachField",
  data: function() {
    return {
      showName: ""
    };
  },
  methods: {
    searchShow: function() {
      if (this.showName) {        
        this.$emit("onSearch", this.showName)
      }
    }
  }
};
</script>
<style lang="less" scoped>
  .search {
    margin-right: 75px;
    input {
      width: 110px;
    }

    a {
      font-family: arial;
      background-color: #13a913;
      color: white;
      padding: 5px;
      border-radius: 12px;
      width: 12px;
      height: 10px;
      margin: 4px;
      font-size: 0.9em;
      cursor: pointer;
    }
  }


 @media only screen and (max-width: 640px) {
  .search {
    margin-right: 10px;
  }
}
</style>