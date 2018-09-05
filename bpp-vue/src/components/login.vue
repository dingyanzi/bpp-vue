<template>
  <div class="content">
    <mt-header  title="登录">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="logo">
      <img src="../../static/images/login-logo.png" alt="">
    </div>
    <form @submit.prevent="submit">
      <div class="fromList">
        <img class="ico" src="../../static/images/login-phone.png">
        <input v-model="phone" class="mint-field-core" placeholder="请输入手机号码" type="text">
      </div>
      <div class="fromList">
        <img class="ico" src="../../static/images/login-jisuanqi.png">
        <input style="width: 50%" type="text" v-model="password" placeholder="请输入计算结果">
        <img :src="img" @click="getsum" class="jisuannum">
      </div>
      <div class="fromList">
        <img class="ico" src="../../static/images/login-dunpai.png">
        <input style="width: 48%"  type="text" v-model="code" placeholder="输入验证码">
        <span  v-show="show" @click="getCode" class="yanzhengnum" >获取验证码</span>
        <span  v-show="!show" class="yanzhengnum" >{{count+'s'}}</span>
      </div>
      <div class="usetxt">
        <label>
          <input type="checkbox"  v-model="checked" checked>
          <i>✓</i>
          <span id="" style="color:rgb(119, 119, 119) ;">
						已阅读并同意
					</span>
        </label>
        <span id="rule" @click="offClose">
					《使用协议》
				</span>
      </div>
      <input class="login" type="button" @click="submit" value="登陆">
    </form>
    <div class="loginhr">
      或使用以下方式登录
    </div>
    <div class="applogin">
      <img src="../../static/images/login-wx.png" alt="" id="btnlogin">
    </div>

    <div class="dialog-modal">
      <div class="dialog-wrapper" @click="onClose" v-show="isShow"></div>
      <transition name="drop">
        <div class="dialog-container" v-show="isShow">
          <slot>
            <div class="xieTxt">
              <p class="title">币泡泡注册协议</p>
              <textarea class="textareaBox" disabled="">服务条款
                欢迎使用币泡泡（BPOP.io）提供的服务。本协议由服务使用人（以下称"用户"）与币泡泡达成的协议，请您仔细阅读以下全部条款内容。如用户不同意本服务条款任意内容，请不要注册或使用币泡泡服务。如用户一经注册即视为认可及接受本协议所有条款。此后，用户不得以未阅读本服务条款内容作任何形式的抗辩。用户注册成功后，应当对以其用户帐号进行的所有活动和事件负法律责任。
                服务内容
                （1）币泡泡具体的服务内容由币泡泡收集、聚合及提供，例如数字资产行情、新闻资讯等服务，用户必须在遵守本服务条款的前提下使用币泡泡提供的服务。币泡泡并不承诺服务在开始、变更或者结束时，均事先通知用户。同时，币泡泡也不构成任何投资建议，亦不对用户的任何投资或交易行为负责。
                （2）币泡泡的服务若涉及收费服务，我们会在用户使用之前给予用户明确的提示，只有用户根据提示确认其愿意支付相关交易费用，用户才能使用该收费服务。
                条款更改、添加或删除
                币泡泡有随时更改、添加或删除部分条款的最终决定权。一旦更改条款，币泡泡将视其重要性发布通告。条款公布后如若用户继续使用币泡泡服务，则视为接受这些条款的变更，并同意以后在使用币泡泡服务时须遵循这些条款。
                服务变更、中断或终止
                鉴于互联网服务的特殊性，用户同意币泡泡有权随时变更、中断或终止部分或全部的网络服务（包括收费的网络交易服务）。如变更、中断或终止的网络服务，币泡泡无需通知用户，也无需对任何用户或任何第三方承担任何责任。
                用户账号
                币泡泡为了保障用户账号信息安全，用户须同意以下条款：
                （1）用户有责任保管好自己的账号信息，以及在此账号下发生的任何活动。
                （2）由于他人使用自己账号和密码而导致币泡泡或平台其他用户带来的任何损失，用户须对此负责。
                （3）任何情况下用户不得使用除自己账号以外的其他任何账号登录，否则币泡泡有权冻结此类审查此类账号。
                （4）用户同意提供在注册过程中按系统要求提供的准确，最新，完整的个人信息给币泡泡，并保证这些信息是最新的。
                隐私保护
                用户在创建账号使用币泡泡时，可能会被要求提供个人信息，这些个人信息将被保密。非经用户许可，币泡泡保证不对外公开或向第三方提供单个用户的注册资料及用户在使用网络服务时存储在币泡泡的非公开内容，但下列情况除外：遵守有关法律、法规的规定，包括在国家有关机关查询时，提供用户的注册信息，存储资料，以及用户在币泡泡的操作记录等。
                免责声明
                （1）用户明确同意其使用币泡泡服务所存在的风险将完全由其自己承担；因其使用币泡泡服务而产生的一切后果也由其自己承担，币泡泡对用户不承担任何责任。
                （2）币泡泡所提供的任何信息（包括但不限于币泡泡官方提供的、外部获取的、币泡泡邀请的他人发布的），币泡泡并不能保证其完全实时或完全准确，也不表明币泡泡证实其描述或赞同其观点。所有内容仅供参考，不构成投资建议或者其他实际的操作意见，用户据此操作所造成的后果自行负责。
                （3）币泡泡不保证服务一定能满足用户的要求，也不保证服务不会中断，对服务的及时性、安全性、准确性也都不作保证。对于各种原因造成的网络服务中断、资料丢失、数据损毁或其他缺陷，币泡泡不承担任何责任。
                （4）用户明确同意使用币泡泡的风险由用户个人承担。对于所有的用户注册资料、姓名、身份、手机以及其他行为，币泡泡拒绝提供任何担保。
                （5）用户同意，对于币泡泡因为黑客攻击、水灾、风灾、旱灾、地震、战争、封锁、政府禁令等不可抗力事件，而导致用户资料意外泄漏，币泡泡并不对此负责。
                版权声明
                币泡泡上发布的内容，包括但不限于：文字报导、图片、声音、录像、图表、标志、标识、广告、商标、商号、域名、软件、程序、版面设计以及为注册用户提供的任何或所有信息，为币泡泡所有或合法使用，任何媒体、网站或个人未经或相关权利人书面授权或同意不得转载、摘编或利用其它方式使用上述内容；已经授权或同意的，应在授权或同意范围内使用，并注明"来源：币泡泡（BPOP.io）"。违反上述声明者，本网将追究其相关法律责任。
                责任和义务
                （1）用户须保证他们是账号合法的拥有者，用户对币泡泡服务的使用必须遵守所有适用于服务的地方法律、国家法律和国际法律。
                （2）由网络连接造成的故障，崩溃，延迟或扰乱，或由于任何原因网站在任何时候或期间不可用，币泡泡均不负责任。币泡泡上链接的第三方网站的内容仅供参考。我们对这些网站和资源没有控制权，不负有责任，您个人因使用这些信息而发生损失或损害我们对此不负责任。
                （3）对于诈骗，币泡泡会向相关政府机构举报，并向其提供所有必要的信息，包括名字，地址和其他要求的信息。用户应知晓到在相关政府部门要求调查诈骗或任何非法活动时，其账号可能随时被冻结。
                （4）用户应遵守币泡泡的所有条款规定，不得以任何方式干扰币泡泡的服务。
                适用法律和管辖权
                本协议适用中华人民共和国的法律，并且排除一切冲突法律法规的适用。如出现纠纷，用户和币泡泡一致同意将纠纷交由币泡泡所在地法院管辖。
                解释权
                在法律允许的最大范围内，币泡泡保留对本服务条款的最终解释权。
                其他
                在适用法律界定下遇到不可抗力事件时，受影响一方的责任将被暂缓，等待解决办法。如果有关司法机关认为条款的任何规定不能强制履行，则在最大允许范围内实施该规定，其余规定依然生效。
                通知和联系
                用户知晓并且同意，币泡泡的各类通知，通过网页公告、系统通知、官方管理帐号通知（公开或者私下）、电子邮件或者常规信件进行，通知发出时，即被视为已送达收件人。用户可通过币泡泡官网的“联系我们”功能与我们取得联系。
                </textarea>
            </div>
          </slot>
          <div id="closeBtn" @click="onClose"></div>
        </div>
      </transition>
    </div>

  </div>
</template>
<script>
  import qs from 'qs';
  export default {
    name: 'login',
    data () {
      return {
        checked:true,
        phone: '',
        password:'',
        code: '',
        show: true,
        count: '获取验证码',
        timer: null,
        img:require('../../static/images/aibg.png'),
        isShow: false

      }
    },
    created() {
      this.getsum()
    },
    methods: {
      submit () {
        if (!this.phone) {
          this.$toast('请输入手机号');
          return false
        }
        let phoneReg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        if (!phoneReg.test(this.phone)) {
          this.$toast('手机号格式不正确');
          return false
        }
        if (!this.password) {
          this.$toast('请输入计算结果');
          return false
        }
        if(!this.code){
          this.$toast('请输入验证码');
          return false
        }
        if (!this.checked == true) {
          this.$toast('请阅读使用协议');
          return false
        }
        this.getLogin()

      },
      getCode(){
        if (!this.phone) {
          this.$toast('请输入手机号');
          return false
        }
        let phoneReg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        if (!phoneReg.test(this.phone)) {
          this.$toast('手机号格式不正确');
          return false
        }else if(!this.password){
          this.$toast('请输入计算结果');
          return false
        }else {
          const TIME_COUNT = 60;
          if (!this.timer) {
            this.count = TIME_COUNT;
            this.show = false;
            this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--;
              } else {
                this.show = true;
                clearInterval(this.timer);
                this.timer = null;
              }
            }, 1000)
            this.getcodeData()
          }
        }
      },
      getcodeData(){
        var that = this;
        const url = window.BASE_URL+'login/checkCode';
        var params = qs.stringify({
          mobilenum: that.phone,
          captchaNo: that.password,
          captchaToken:sessionStorage.captcha,
          codetype:'login'
        });
        this.$axios({
          method: 'post',
          url:url,
          data:params
        }).then((res)=>{
          if (res.data.errorMsg=="计算验证码错误！请刷新重新操作"||res.data.errorMsg=="请刷新重新获取图片验证码") {
            this.show = true;
            this.timer = null;
            this.getsum();
          }
          if(res.data.success == false) {
            this.$toast(res.data.errorMsg);
          } else {
            this.getCode();
          }

        });

      },
      getsum() {
        var date = new Date();
        var time = date.getTime();
        sessionStorage.captcha = time+"-"+Math.floor(Math.random()*1000);
        this.img = window.BASE_URL +'login/getcaptchaNo?time='+sessionStorage.captcha;
        //console.log(sessionStorage.captcha)
      },
      getLogin(){
        var that = this;
        const url = window.BASE_URL+'login/applogin';
        var params = qs.stringify({
          mobilenum: that.phone,
          validCode: that.code,
        });
        this.$axios({
          method: 'post',
          url:url,
          data:params
        }).then((res)=>{
          if(res.data.success == false) {
            this.$toast(res.data.errorMsg)
          }
          if(res.data.success == true) {
            this.$toast(res.data.errorMsg)
            localStorage.setItem("loginToken",res.data.data.loginToken)
            localStorage.setItem("tokenid",res.data.data.userid)
            sessionStorage.sdk= false;
            that.$router.push("/")
          }
        });
      },
      offClose() {
        this.isShow = !this.isShow;
      },
      onClose() {
        this.isShow = false;
      }
    },
    mounted() {

    }
  }
</script>
<style lang="less" scoped>
  .mint-header{
    background: linear-gradient(to right, rgb(189, 128, 245), rgb(222, 156, 239))
  }
  .usetxt {
    padding: 10px 25px;
    label{
      font-size: 0.8rem;
     i {
      font-size: 0.8rem;
      font-style: normal;
      display: inline-block;
      width: 15px;
      height: 15px;
      text-align: center;
      line-height: 12px;
      color: white;
      vertical-align: middle;
      margin: -2px 2px 1px 0px;
      border: #bb7df7 2px solid;
    }
    }
    #rule {
      font-size: 0.8rem;
      cursor: pointer;
    }
  }

  input[type="checkbox"],
  input[type="radio"] {
    display: none;
  }

  input[type="radio"]+i {
    border-radius: 7px;
  }

  input[type="checkbox"]:checked+i,
  input[type="radio"]:checked+i {
    background: #bb7df7;
  }

  .logo {
    height: 124px;
    text-align: center;
    img{
      width: 64px;
      margin-top: 35px;
    }
  }
  .fromList{
    position: relative;
    padding: 0 15px 0 25px;
    border-bottom: 1px solid #ebebec;
    input{
      width: 82%;
      height: 40px;
      -webkit-user-select: text;
      border: none;
      color: rgb(119, 119, 119);
      font-size: 1rem;
      margin-bottom: 0;
      padding: 10px;
    }
    .yanzhengnum{

      text-align: center;
      display: inline-block;
      color: #fff;
      font-size: 1rem;
      width: 35%;
      height: 30px;
      line-height: 30px;
      background: #bb7df7;
      border-radius: 15px;
    }
  }
  .ico{
    width: 4%;
  }
  .login{
    width: 90%;
    margin: 20px 17px;
    background-color: #c787fc;
    height: 35px;
    color: white;
    border-radius: 18px;
    border: 0;
  }
  .loginhr {
    width: 95%;
    text-align: center;
    background-image: url(../../static/images/login-hr.png);
    background-size: 100% 100%;
    height: 20px;
    font-size: 12px;
    color: #dadada;
  }
  .applogin {
    text-align: center;
    img {
      width: 50px;
      margin-top: 20px;
    }
  }
  .mint-cell-wrapper{
    background: none !important;
  }
  .jisuannum{
    background: #dde0e0;
    border-radius: 15px;
    width:30%;
    height: 30px;
    position: absolute;
    top: 15px;
  }

  .dialog-modal {
    position: absolute;
    z-index: 5;
  }

  .dialog-wrapper {
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .dialog-wrapper {
    background-color: rgba(0, 0, 0, 0.5);
    opacity: .8;
  }
  .dialog-container {
    position: fixed;
    z-index: 80;
    top: 15%;
    left: 0;
    right:0;
    background: white;
    width: 80%;
    margin: 0 auto;
    overflow: auto;
    border-radius: 20px;
    border: 5px solid #cc8cf3;
    color: black;
  }
  span.close-btn {
    padding: 5px 10px;
    float: right;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
  }
  .xieTxt{
    height:100%;
    width:100%;
    overflow: hidden;
    .title{
      text-align: center;
      font-size: 0.8rem;
    }
  }
  .textareaBox{
    display: block;
    margin: 0 auto;
    width: 80%;
    font-size: 1rem;
    height: 250px;
    border: none;
    padding: 10px 15px;
    background: none;
  }
  #closeBtn{
    background-image: url(../../static/images/login-iknow.png);
    background-size: 100% 100%;
    height: 4rem
  }
</style>

