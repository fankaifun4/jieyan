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
    padding-bottom: 50px;
  }
  .wx-bd-t{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:15px 28px;
    border-bottom: 1px solid #f2f2f2;
  }
  .picker{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#090;
    font-size: 36px;
    padding: 0 15px;
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
</style>
<template>
  <div class="container">
    <div class="header">
        <div class="h-top">少吸一口，也是进步</div>
        <div class="days"><span class="days-num">{{updateDay}}</span><span>天</span></div>
        <div class="date-now">2018年11月16日16:00</div>
    </div>
    <div class="wx-body">
      <div class="wx-bd-t">
        <picker @change="bindPickerChange" class="picker-val" :value="multiIndex" :range="cigarette">
          <view class="picker">
            <div class="icon icon-fire mg-lr10">
              <img src="/static/images/fire.png" alt="" mode="widthFix">
            </div>
            <div>今天：</div>
            <div class="yan-nu">{{cigarette[multiIndex]}}</div>
          </view>
        </picker>
      </div>
      <div class="sing-up"> 签到 </div>
    </div>
    <div class="wx-body">
      <div class="wx-bd-title">
        <div class="title">与君共勉人</div>
      </div>
      <div>
        <div v-for="(man,index) in manList" :key="index">
          <img src="man" mode="widthFix" />
          {{man.name}} {{man.value}}
        </div>
      </div>
    </div>
    <div>
      <button open-type="getUserInfo" @getuserinfo="getLogin">登录</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userInfo: {},
      cigarette:[
        "1根没抽",
        "少于5根",
        "少于10根",
        "少于15根",
        "少于1包",
        "少于2包",
        "少于3包",
        "少于5包"
      ],
      updateDay:1,
      multiIndex:0,
      manList:[
        {
          value:"少于5根",
          name:"撒打算",
        }
      ]
    }
  },
  methods: {
    bindPickerChange(e){
      let value = e.target.value
      this.multiIndex=value
    },
    getLogin(e){
      console.log(e.target)
    }
  },
  created () {

  }
}
</script>


