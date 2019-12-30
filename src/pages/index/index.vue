<style scoped lang="less">
  .container{
    height: 100%;
  }
  .header{
    width:100%;
    height: 400px;
    background-image: linear-gradient(180deg, #6ee800 0%, #46bd00 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    position: relative;
    &:after{
      content: "";
      position: absolute;
      width:700px;
      height: 10px;
      bottom:0;
      left: 50%;
      margin-left: -350px;
      z-index: -1;
      box-shadow: 0 5px 15px 3px rgba(70,189,0,.8);
    }
    .h-top{
      font-size: 30px;
    }
    .days{
      text-align: center;
      font-size: 50px;
      .days-num{
        font-size: 70pt;
      }
    }
    .date-now{
      font-size: 32px;
      margin-top:20px;
    }
  }
  .wx-body{
    margin: 32px 28px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 5px 15px 3px rgba(70,189,0,.2);
    padding-bottom: 20px;
  }
  .wx-bd-t{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:15px 28px;
    border-bottom: 1px solid #f2f2f2;
  }
  .pick-wrap{
    padding:32px 0;
  }
  .picker{
    background-image: linear-gradient(180deg, #f74c31 0%, #f00 100%);
    color: #fff;
    width: 620px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    padding: 0 15px;
    border-radius: 50px;
    margin:0 auto;
    .yan-nu{
      border-bottom: 1px solid #090;
    }
  }
  .picker-val{
    width: 100%;
  }
  .sing-up{
    width:550px;
    height: 90px;
    line-height: 90px;
    color:#fff;
    font-size: 38px;
    text-align: center;
    border-radius: 40px;
    background-image: linear-gradient(45deg, #6ee800 0%, #46bd00 100%);
    margin:0 auto;
    box-shadow: 0 5px 15px 3px rgba(0,70,0,.6);
    margin-top:30px;
  }
  .icon{
    width:80px;
    height: 80px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    &.icon-fire{
      background-image: linear-gradient(45deg, #f74c28 0%, #46bd00 100%);
    }
    &.icon-yfire{
      background-image: linear-gradient(45deg, #666 0%, #ccc 100%);
    }
    image{
      width:50px;
      height:50px;
      display: block;
    }
  }
  .mg-lr10{
    margin-left: 10px;
    margin-right: 10px;
  }
  .bd-r{
    border-right: 1px solid #f2f2f2;
  }
  .wx-bd-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:32px 28px;
    border-bottom: 1px solid #f2f2f2;
    background-image: linear-gradient(45deg, #6ee800 0%, #46bd00 100%);
    color:#fff;
  }

  .title{
    font-size: 40px;
    font-weight: 700;
  }
  .login-wrap{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.5);
    .login-content{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width:500px;
      height: 350px;
      background: #f7f7f7;
      margin: auto;
      border-radius: 8px;
      padding:15px;
      box-sizing: border-box;
    }
    .title-wrap{
      width:300px;
      margin:0 auto;
      text-align: right;
      color:#333;
      font-size: 32px;
      >div{
        padding:15px 0;
      }
    }
    .login-btn{
      width:400px;
      height: 80px;
      line-height: 80px;
      color: #fff;
      background-image: linear-gradient(45deg, #6ee800 0%, #46bd00 100%);
      border-radius: 40px;
    }
  }
  .list-header{
    padding:32px 28px;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    align-items: center;
    font-size: 40px;
    color:#999;
    .avatar-url{
      width:80px;
      height: 80px;
      border-radius: 100%;
      margin-right: 30px;
    }
  }
  .no-data{
    color: #e5e5e5;
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    padding-top:32px;
  }
  .ft-40{
    font-size: 46px;
    font-weight: 700;
  }
  .list-code{
    display: flex;
    align-items: center;
    .list{
      display: flex;
      justify-content: center;
      align-items: center;
      padding:32px 28px;
      >div{
        padding:0 5px;
        font-size: 36px;
      }
    }
  }
  .fs-c-r{
    color: #f74c31;
    font-weight: 700;
  }
  .man-list{
    padding:15px 28px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom:1px solid #f2f2f2;
    .avatar-url{
      width:80px;
      height: 80px;
      border-radius: 80px;
      margin-right: 10px;
    }
    .xingbie{
      width:60px;
      height: 60px;
      margin-right: 10px;
    }
  }
</style>
<template>
  <div class="container">
    <div class="header">
        <div class="h-top">少吸一口，也是进步</div>
        <div class="days"><span class="days-num">{{userTemp.signin||1}}</span><span>天</span></div>
    </div>
    <div class="wx-body">
      <div class="pick-wrap">
        <div class="sing-up" @click="signIn"  v-if="userTemp.isSign=='0'"> 签到 </div>
      </div>
      <div class="pick-wrap">
        <view class="picker" @click="addSmokeFun">
          <div class="icon icon-fire mg-lr10">
            <img src="/static/images/fire.png" alt="" mode="widthFix">
          </div>
          <div>每抽一根，记录一次</div>
        </view>
      </div>
    </div>
    <div class="wx-body">
      <div class="list-header">
        <img :src="userInfo.avatarUrl" mode="widthFix" class="avatar-url" />
        {{userInfo.nickName}} 最近记录
      </div>
      <div>
        <div class="list-code">
          <div  class="list" ><div> 今天： </div><div class="fs-c-r">{{tobaccoNum}}</div>根</div>
        </div>
        <div v-for="(item,index) in userList" :key="index" class="list-code">
          <div  class="list" v-if="index==0"><div>{{item.addtime}}： </div><div class="fs-c-r">{{item.value}}</div>根</div>
          <div  class="list"  v-if="index==1"><div>{{item.addtime}}： </div><div class="fs-c-r">{{item.value}}</div>根</div>
          <div  class="list"  v-if="index==2"><div>{{item.addtime}}： </div><div class="fs-c-r">{{item.value}}</div>根</div>
        </div>
      </div>
    </div>
    <div class="wx-body">
      <div class="wx-bd-title">
        <div class="title">与君共勉</div>
      </div>
      <div v-if="manList.length">
        <div v-for="(man,index) in manList" :key="index" class="man-list">
          <img :src="man.avatarurl" mode="widthFix" class="avatar-url" />
          <img src="/static/images/man.png" alt="" v-if="man.sex==1" class="xingbie">
          <img src="/static/images/women.png" alt="" v-else  class="xingbie">
          <div>{{man.nickname}}</div>
          <div class="fs-c-r" style="padding:0 10px">{{man.value}}</div>
          根
        </div>
      </div>
      <div v-else class="no-data">
        暂时还没有朋友签到
      </div>
    </div>
    <div class="login-wrap" v-if="!login">
      <div class="login-content">
        <div class="title-wrap">
          <div>从明天起</div>
          <div>做一个幸福的人</div>
          <div>---海子</div>
        </div>
        <button class="login-btn" open-type="getUserInfo" @getuserinfo="getLogin">登录</button>
      </div>
    </div>
  </div>
</template>
<script>
  import loginController from '../../config/login'
  import {addSmoke,addSign,getTodayData,getUserList,getManList} from '../../server/index'
export default {
  data () {
    return {
      userInfo: {},
      login:true,
      updateDay:0,
      manList:[],
      session:null,
      tobaccoNum:0,
      userList:[],
      userTemp:{},
      pageNo:1,
      isOver:false
    }
  },
  mounted(){
    let seesion =  wx.getStorageSync('token');
    let userInfo =  wx.getStorageSync('userInfo')
    if(userInfo) this.userInfo =userInfo
    if(seesion){
      this.session = seesion
      this.login=true
      this.getUserData()
    }else{
      this.session=null
      this.login=false
    }

    // this.getManListFunc()

  },
  methods: {
    addSmokeFun(){
      if( this.session  ){
        addSmoke().then(res=>{
          if(res.code===1){
            this.tobaccoNum =  res.data.info.value
          }
        })
      }else{
        this.login=false
      }
    },
    signIn(){
      if( this.session  ){
        addSign().then(res=>{
          //this.userTemp
          if(res.code===1){
            this.userTemp.signin = res.data.info.signin
            this.userTemp.isSign =1
            wx.showToast({
              title: '签到成功'
            })
          }else{
            wx.showToast({
              title: '已签到'
            })
          }
        })
      }else{
        this.login=false
      }
    },
    getLogin(e){
      let _this=this
      let User =  e.target
      let userInfo = User.userInfo
      if( userInfo ){
        loginController.login(User,function(res){
          if(res.code===1){
            _this.userInfo=wx.getStorageSync('userInfo');
            _this.session = wx.getStorageSync('token')
            _this.login=true
            _this.getUserData()
          }
        })
      }
    },
    getUserData(){
      return
      getTodayData().then(res=>{
        if(res.code===1){
          this.tobaccoNum = res.data.info.data.value
          this.userTemp = res.data.info.user
        }
      })
      getUserList().then(res=>{
        if(res.code===1){
          this.userList =res.data.info
        }
      })
    },
    getManListFunc(){
      wx.showLoading({
        title:"正在加载",
        mask:true
      })
      getManList(this.pageNo).then(res=>{
          wx.hideLoading()
          if(res.code===1){
            this.manList =  this.manList.concat(res.data.info)
            if( res.data.info.length>0 ){
              this.pageNo++
            }else{
              this.isOver=true
            }
          }
      }).catch(e=>{
        wx.hideLoading()
      })
    },
  },
  onReachBottom(){
    if( this.isOver ) return
    this.getManListFunc()
  },
  created () {

  }
}
</script>


