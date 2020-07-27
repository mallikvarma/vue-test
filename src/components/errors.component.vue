<template>
    <div class="error-container-main">
        <div class="title">      
            <div class="back-btn" @click="$router.push('/')">
                <img src="../assets/back.png" alt="back button">
                Home
            </div>
        </div>
        <div class="error-msg">
            <div class="question">??</div>
             {{this.$route.query.message}}
        </div>
    </div>
</template>
<script>
export default {
    name: "ErrorPage"
    
}
</script>
<style lang="less" scoped>
.error-container-main{

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

    .error-msg{
        color: red;
        font-size: 2rem;
        display: flex;
        min-height: 300px;
        justify-content: center;
        align-items: center;

        .question{
            border: 2px solid black;
            border-radius: 55px;
            padding: 22px;
            margin-right: 20px;
        }

    }

}
</style> 