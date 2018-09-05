<template>
  <div>
    <mt-header  title="我的账户">
    </mt-header>
    <div class="head">
      <div class="img">
        <img src="../../../static/images/morentouxiang.png">
      </div>
      <div class="name">
        你好，13956227817
      </div>
    </div>
    <div class="fourbox">
      <div >
        <img src="../../../static/images/mine-msg.png" />
        <p>我的消息</p></div>
      <div>
        <div><img src="../../../static/images/mine-night.png" /><p id="">
          夜间免打扰
        </p></div>
      </div>
      <div>
        <div><img src="../../../static/images/mine-invite.png" /><p id="">
          邀请注册
        </p></div>
      </div>
      <div>
        <div><img src="../../../static/images/mine-add.png" /><p id="">
          加入社群
        </p></div>
      </div>
    </div>
    <div class="but">
      <div>
        <div><img src="../../../static/images/mine-order.png"><span id="">
						订阅管理
					</span></div>
      </div>
      <div onclick="tab('../poppoints/poppoints.html')">
        <div><img src="../../../static/images/mine-point.png"><span id="">
						泡泡积分
					</span></div>
      </div>
      <div>
        <div>
          <img src="../../../static/images/mine-help.png">
          <span>帮助中心</span>
        </div>
      </div>
      <div>
        <div>
          <img src="../../../static/images/mine-localversion.png">
          <span>版本号</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import qs from 'qs';
  export default {
    name: 'pageD',
    data () {
      return {
      }
    },
    created () {
    },
    methods:{
    }
  }
</script>
<style lang="less" scoped>
  .mint-header{
    background: linear-gradient(to right, rgb(189, 128, 245), rgb(222, 156, 239))
  }
  .head {
    text-align: center;
    padding: 40px 20px 15px 30px;
    background-image: url(../../../static/images/minehead.png);
    background-size: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .img img{
      width: 85px;
      height: 85px;
      border-radius: 50%;
    }
    .name{
      color: #fff;
      font-size: 0.8rem;
      height: 35px;
      line-height: 1rem;
      padding-left: 20px;
    }
  }
  .fourbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #808080;
    font-size: 12px;
    text-align: center;
    padding: 15px 20px;
    border-top: 10px solid rgb(245, 245, 245);
    background: white;
    img {
      width: 30px;
    }
    p{
      font-size: 0.8rem;
      color: #8f8f94;
    }
  }
  .but {
    background: #fff;
    border-top: 10px solid rgb(245, 245, 245);
    div{
      width: 90%;
      margin: 0 auto;
      height: 45px;
      border-top: 1px solid rgb(245, 245, 245);
      div:first-child {
        display: flex;
        align-items: center;
        img{
          width: 18px;
        }
        span{
          color: #555;
          font-size: 0.8rem;
          margin-left: 10px;
        }
      }
    }
  }
</style>
