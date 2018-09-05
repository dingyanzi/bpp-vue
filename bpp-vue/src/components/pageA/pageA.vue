<template>
  <div class="wrap">
    <mt-header fixed title="大咖秀">
    </mt-header>
    <div class="head">
      <div class="upleft">
        <h1>币泡泡大咖秀</h1>
        <p class="desc">
          AI机器人和币圈大咖同台竞技，人类能否挽尊？立即订阅大咖，实时获取ta的精湛操作！
        </p>
      </div>
      <div class="upright">
        <img class="rtImg" src="../../../static/images/lab-bottle.png" alt="">
      </div>
      <div class="about">
        关于大咖秀
        <img src="../../../static/images/wen.png">
      </div>

    </div>
    <div class="aiul">
      <ul class="aili">
        <li v-for="item in kolList">
          <router-link :to="{ name: 'pageADetail',params: { id: item.id }}" >
            <div class="aileft">
              <img v-bind:src="item.kolpic">
            </div>
            <div class="airight">
              <div class="aitight-title">{{item.kolname}}<img  src="../../../static/images/point-man.png"></div>
              <div class="aitight-detail">{{item.kolremark}}</div>
              <div class="aitight-table">
                <div class="tableup">
                  <div class="shouyi30">{{item.assetcountBean.receiveRate30}}</div>
                  <div class="zichanzhangfu">{{item.assetcountBean.receiverise}}</div>
                  <div class="keyongzijin">{{item.useasset | formatnum}}</div>
                </div>
                <div class="tabledown">
                  <div>30天收益率</div>
                  <div>资产涨幅</div>
                  <div>可用资金</div>
                </div>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import qs from 'qs';
  export default {
    name: 'pageA',
    data () {
      return {
        kolList:[]
      }
    },
    created () {
      this.getKolInfoListFn()
    },
    methods:{
      getKolInfoListFn(){
        var that = this;
        const url = window.BASE_URL+'kline/getKolInfoList';
        var params = qs.stringify({
        });
        let loginToken = localStorage.getItem("loginToken");
        console.log(loginToken)
        this.$axios({
          method: 'post',
          url:url,
          data:'',
          headers: {'loginToken': loginToken}
        }).then((res)=>{
          if(res.data.success == false && res.data.errorCode == 10001) {
            that.$router.push("/login")
          }
          that.kolList = res.data.data.data.kollist;
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
