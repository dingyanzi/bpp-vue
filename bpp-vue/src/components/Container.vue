<template>
  <div id="Container">
    <div class="mui-bar-tab">
      <router-link to="/index/home" class="mui-tab-item" >
        <img src="../../static/images/home.png">
      </router-link>
      <router-link to="/index/pageA" class="mui-tab-item" >
        <img src="../../static/images/ailab.png">
      </router-link>
      <router-link to="/index/pageB" class="mui-tab-item" >
        <img src="../../static/images/order.png">
      </router-link>
      <router-link to="/index/pageC" class="mui-tab-item" >
        <img src="../../static/images/exchange.png">
      </router-link>
      <router-link to="/index/pageD" class="mui-tab-item" >
        <img src="../../static/images/my.png">
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'Container'
  }
</script>
<style lang="less" scoped>
  .mui-bar-tab{
    background: #fff;
    bottom: 0;
    display: table;
    width: 100%;
    height: 50px;
    padding: 0;
    position: fixed;
    left: 0;
    table-layout: fixed;
    border-top: 0;
    border-bottom: 0;
    -webkit-touch-callout: none;
    .mui-tab-item {
      display: table-cell;
      overflow: hidden;
      width: 1%;
      height: 50px;
      text-align: center;
      vertical-align: middle;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #929292;
    }
    img{
      width: 37px;
      height: 37px;
      position: relative;
      top: 5px;
      color: white
    }
  }
</style>
