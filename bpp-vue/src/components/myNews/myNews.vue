<template>
<div>
  <router-link to="/index/pageC" class="mui-tab-item" >
    <p style="color:#000">home</p>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
     searchList: ['草船借箭', '大富翁', '测试数据']
    }
  }
}
</script>
<style lang="less" scoped>

.mint-header{
  background-color:#c681f7;
}
.head {
  text-align: left;
  height: 240px;
  background: #c681f7;
  padding:20px;
  h1{
    font-size: 27px;
    margin-bottom: 15px;
    color: #fff;
  }
  p.desc{
    width: 70%;
    color: #fff;
    font-size: 12px;
  }
  .about{
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    width: 90px;
    background: #eea7fe;
    height: 20px;
    font-size: 12px;
    padding: 0 7px;
    img{
      width: 15px;
    }
  }
  .rtImg{
    position: absolute;
    right: 0;
    top:0.3rem;
    width: 27%;
  }
}
.aiul{
  margin-top: -65px;
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
      height: 125px;
    .aileft{
      width: 30%;
      float: left;
      img{
        width: 100%;
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
 }
</style>
