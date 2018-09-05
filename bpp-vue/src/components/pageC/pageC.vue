<template>
  <div class="wrap content">
    <mt-header fixed title="交易所公告">
    </mt-header>
    <div class="jyslists main-body"  ref="wrapper" :style="{ height: (wrapperHeight-50) + 'px' }">
      <v-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
        <div class="pubcontent" v-for="item in resultList">
          <router-link :to="{ name: 'pageCDetail',params: { id: item.id }}" class="jump">
            <div class="publish">
              <div id="exchangeplace">
                <img v-bind:src="item.exchangeBean.pic">
                <span class="exchange">{{item.exchangeBean.exchangename}}</span>
              </div>
              <div class="intime">{{item.noticeTime}}</div>
            </div>
            <div class="downcon">{{item.title}}</div>
          </router-link>
        </div>
      </v-loadmore>
    </div>
   <!-- <div class="tuisong">
      订阅公告推送
    </div>-->
  </div>
</template>
<script>
  import {Loadmore} from 'mint-ui';
  import qs from 'qs';
  export default {
    components:{
      'v-loadmore':Loadmore,
    },
    name: 'pageC',
    data () {
      return {
        resultList:[],
        pageNo:1,
        pageSize:20,
        allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
        scrollMode:"auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
        totalpage:0,
        loading:false,
        wrapperHeight:0
      }
    },
    created () {
      //this.getExchangeNoticListFn();
    },
    mounted(){
      this.wrapperHeight =  document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
      this.loadPageList();  //初次访问查询列表
    },
    methods:{
      getExchangeNoticListFn(){
        var that = this;
        const url = window.BASE_URL+'kline/getExchangeNoticList';
        var params = qs.stringify({
          page: 1
        });
        let loginToken = localStorage.getItem("loginToken");
        this.$axios({
          method: 'post',
          url:url,
          data:params,
          headers: {'loginToken': loginToken}
        }).then((res)=>{
          //console.log(JSON.stringify(res))
          if(res.data.success == false && res.data.errorCode == 10001) {
            that.$router.push("/login")
          }
          that.resultList = res.data.data.resultList;
        });
      },
      loadBottom:function() {
        console.log("上拉加载")
        // 上拉加载
        this.more();// 上拉触发的分页查询
        this.$refs.loadmore.onBottomLoaded();// 固定方法，查询完要调用一次，用于重新定位
      },
      loadPageList:function (){
        // 查询数据
        var that = this;
        const url = window.BASE_URL+'kline/getExchangeNoticList';
        var params = qs.stringify({
          page: that.pageNo
        });
        let loginToken = localStorage.getItem("loginToken");
        that.$axios({
          method: 'post',
          url:url,
          data:params,
          headers: {'loginToken': loginToken}
        }).then((res)=>{
          if(res.data.success == false && res.data.errorCode == 10001) {
            that.$router.push("/login")
          }
          that.resultList = res.data.data.resultList;
          that.totalpage = Math.ceil(res.data.data.totalPage/that.pageSize);

          if(that.totalpage == 1){
            that.allLoaded = true;
          }
          that.$nextTick(function () {
            console.log("是否还有下一页")
            // 是否还有下一页，加个方法判断，没有下一页要禁止上拉
            that.scrollMode = "touch";
            that.isHaveMore();
          });
        });
      },
      more:function (){
        console.log("上拉");
        // 分页查询
        if(this.totalpage == 1){
          this.pageNo = 1;
          this.allLoaded = true;
        }else{
          this.pageNo = parseInt(this.pageNo) + 1;
          this.allLoaded = false;
        }

        console.log(this.pageNo);
       /* this.axios.get('/copyright?key='+ encodeURIComponent('公司名称')+"&mask=001"+"&page="+this.pageNo+"&size="+this.pageSize).then(res=>{
          this.resultList = this.resultList.concat(res.data.result.PRODUCTCOPYRIGHT);
          console.log(this.resultList);
          this.isHaveMore();
        });*/
      },
      isHaveMore:function(){
        // 是否还有下一页，如果没有就禁止上拉刷新
        this.allLoaded = false; //true是禁止上拉加载
        console.log(this.allLoaded)
        if(this.pageNo == this.totalpage){
          this.allLoaded = true;
        }
      }

    }
  }
</script>
<style lang="less" scoped>
  .mint-header{
    background: linear-gradient(to right, rgb(189, 128, 245), rgb(222, 156, 239))
  }
.jyslists{
  overflow: scroll;
  .pubcontent {
    border-bottom: 2px solid #f2f2ef;
    padding: 20px 20px;
    .publish {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-bottom: 10px;
      width: 100%;
      #exchangeplace {
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
          width: 25px;
          height: 25px;
          border-radius: 50%;
        }
        span{
          font-size: 17px;
          margin-left: 10px;
          color: #af69f8;
        }
      }
      .intime {
        font-size: 12px;
        margin-left: 10px;
        margin-top: 5px;
        color: #999;
      }
    }
    .downcon {
      font-size: 16px;
      color: #686868;
      padding: 0 0 0 35px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
}
.tuisong {
  position: fixed;
  bottom: 50px;
  text-align: center;
  height: 50px;
  line-height: 50px;
  width: 100%;
  font-size: 1rem;
  background-color: #c787fc;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 999;
}
</style>
