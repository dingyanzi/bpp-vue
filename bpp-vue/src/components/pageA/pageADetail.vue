<template>
  <div class="wrap">
    <mt-header fixed v-bind:title="titles">
      <router-link to="/index/pageA" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
  </div>
</template>
<script>
  import qs from 'qs';
  export default {
    name: 'pageADetail',
    data () {
      return {
        titles:'AI机器人',
        robotid:1,
        page:1
      }
    },
    created () {
      this.getAiRobotFn()
    },
    methods:{
      getAiRobotFn(){
        var that = this;
        const url = window.BASE_URL+'kline/getAiRobot';
        var params = qs.stringify({
          robotid: that.robotid,
          page: that.page,
        });
        let loginToken = localStorage.getItem("loginToken");
        this.$axios({
          method: 'post',
          url:url,
          data:'',
          headers: {'loginToken': loginToken}
        }).then((res)=>{

        });
      }
    }
  }
</script>
<style lang="less" scoped>
  .mint-header{
    background-color:#c681f7;
    box-shadow: 1px 0px 0px white;
     -webkit-box-shadow: 0 1px 6px #ccc;
    box-shadow: 0 1px 6px #ccc
  }
  .head {
    text-align: left;
    height: 200px;
    background: #c681f7;
    padding:20px;
    .upleft{
      width: 70%;
      text-align: left;
      h1{
        font-size: 27px;
        color: #fff;
      }
      p.desc{
        color: #fff;
        font-size: 0.8rem;
        line-height: 1.4rem;
      }
    }
    .upright{
      width: 30%;
      .rtImg{
        position: absolute;
        right: 0;
        top:4rem;
        width: 32%;
      }
    }
    .about{
      color: #fff;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-radius: 10px;
      width: 90px;
      background: #eea7fe;
      height: 22px;
      font-size: 0.8rem;
      padding: 1px 10px;
      img{
        width: 15px;
      }
    }

  }
  .aiul{
    margin-top: -50px;
    ul.aili li{
      width: 90%;
      height: 125px;
      border-radius: 8px;
      background: white;
      margin: 0px auto;
      box-shadow: 0px 5px 10px #BFBFBF;
      margin-bottom: 25px;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a{
        display: block;
        width: 100%;
        .aileft{
          width: 30%;
          float: left;
          padding-top: 18px;
          img{
            width: 80%;
            border-radius: 50px;
            margin-left: 10px;
            margin-bottom: -5px;
          }
        }
        .airight{
          float: right;
          width: 63%;
          color: black;
          font-size: 18px;
          padding: 10px;
          img {
            position: relative;
            top: 2px;
            width: 15px;
          }
          .aitight-detail {
            font-size: 12px;
            color: #b1b1b1;
          }
          .aitight-table {
            font-size: 0.8rem;
            text-align: center;
            line-height: 0.8rem;
            border-radius: 6px;
            overflow: hidden;
            div{
              display: flex;
              justify-content: space-between;
              align-items: center;
              div {
                text-align: center;
                width: 33%;
                background: #f4c3fe;
                height: 25px;
                color: white;
                margin: 1px;
                display: flex;
                justify-content: center;
                flex-direction: column;
              }
            }
            .tabledown>div {
              text-align: center;
              width: 33%;
              background: #f8f0fe;
              height: 25px;
              color: #b1b1b1;
              margin: 1px;
            }
          }
        }
      }
    }
    ul.aili li:first-child a .aileft{
      padding-top: 0;
      img{
        border-radius: inherit;
      }
    }
  }
</style>
