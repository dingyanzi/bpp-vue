<template>
  <div class="wrap" style="padding-bottom: 50px">
    <mt-header fixed title="公告详情">
      <router-link to="/index/pageC" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="title">{{showData.title}}</div>
    <div class="eandt">
      <div class="cc">
        <div class="imgTip">
          <img v-bind:src="showData.pic">
        </div>
        <div>
          <div class="txt">{{showData.exchangeBean.exchangename}}</div>
          <div class="time">{{showData.noticeTime}}</div>
        </div>
      </div>
    </div>
    <div class="content" v-html="showData.content">
    </div>
  </div>
</template>
<script>
  import qs from 'qs';
  export default {
    name: 'pageCDetail',
    data () {
      return {
        showData:{},
        exchangeBean:{}
      }
    },
    created () {
      this.getNoticeDetailFn()
    },
    methods: {
      /*back(){
        this.$router.go(-1);//返回上一层
      },*/
      getNoticeDetailFn(){
        var that = this;
        const url = window.BASE_URL+'kline/getNoticeDetail';
        var params = qs.stringify({
          token: localStorage.loginToken,
          noticeid: that.$route.params.id,
        });
        let loginToken = localStorage.getItem("loginToken");
        this.$axios({
          method: 'post',
          url:url,
          data:params,
          headers: {'loginToken': loginToken}
        }).then((res)=>{
          that.showData = res.data.data;
          if(res.data.success == false && res.data.errorCode == 10001) {
            that.$router.push("/login")
          }

        })
      }
    }
  }
</script>
<style lang="less" scoped>
  .mint-header{
    background: linear-gradient(to right, rgb(189, 128, 245), rgb(222, 156, 239))
  }
  .title {
    padding: 15px 20px;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.4rem;
  }
  .eandt {
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .cc{
      display: flex;
      justify-content: space-around;
      align-items: center;
      .imgTip{
         img{
           width: 40px;
           height: 40px;
           border-radius: 20px;
           margin-right: 10px;
           border-bottom: 1px solid #323232;
         }
       }
    }
  }
  .txt {
    font-size: 0.8rem;
    color: #686868;
  }
  .time {
    font-size: 0.6rem;
    color: #909090;
  }
  .content {
    padding: 10px 20px;
    font-size: 1rem;
    p{
      color: #686868;
      font-size: 0.8rem;
      line-height: 1rem;
      letter-spacing: 1px;
      margin-bottom: 3px;
    }
    span{
      color: #686868;
      line-height: 1.2rem;
    }
    a{
      font-size: 0.8rem;
    }
  }

</style>
