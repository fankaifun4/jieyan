<style lang="less" scoped>
.container{
  background: #fff;
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

.wx-body{
  margin: 32px 28px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 5px 15px 3px rgba(70,189,0,.2);
  padding-bottom: 20px;
}
  .loader{
    width: 100%;
    font-size: 36px;
    color:#999;
    text-align: center;
    padding:32px 28px;
  }
  .list-step{
    display: flex;
    font-size: 43px;
    padding:32px 28px;
    align-items: center;
    justify-content: space-between;
    &:first-child{
      background: #7fffd4;
    }
    >div{
      padding:15px;
      text-align: center;
    }
  }
  .red{
    color: #f74c31;
  }
</style>
<template>
  <div class="wx-body">
    <div v-if="loader" class="loader">正在努力加载....</div>
    <div>
      <div v-for="(item,index) in steps" :key="index" class="list-step">
        <div>{{item.timestamp}}</div>
        <div> <span class="red">{{item.step}}</span> 步</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getRunData} from "../../server/index"

  export default {
    data () {
      return {
        steps:[],
        loader:true
      }
    },
    created () {

    },
    onShow () {
      this.loader=true
      this.steps=[]
      this.getRunDatas()
    },
    methods: {
      getRunDatas () {
        let _this = this
        wx.login({
          success (res) {
            let code = res.code
            _this.getDataFormat(code)
          }
        })
      },
      getDataFormat (code) {
        let _this=this
        wx.showLoading({
          mask: true
        })
        wx.getWeRunData({
          success (res) {
            wx.hideLoading()
            getRunData(res.iv, res.encryptedData, code).then(res => {
              _this.loader=false
              if (res.code === 1) {
                let data = res.data.info.stepInfoList||[]
                _this.formatStep(data)
              } else {
                wx.showToast({
                  title: '获取数据失败'
                })
              }
            }).catch(res=>{
              _this.loader=false
            })
          },
          fail (res) {
            wx.hideLoading()
            wx.showToast({
              title: '获取数据失败'
            })
          }
        })
      },
      formatStep(data){
        if(data.length<1){
          wx.showToast({
            title: '您还没有开启步数记录'
          })
          return
        }
        data.forEach(item=>{
          let date =  new Date(item.timestamp*1000)
          let year = date.getFullYear()
          let month =  date.getMonth()+1>9?date.getMonth()+1:'0'+(date.getMonth()+1)
          let day =  date.getDate()>9?date.getDate():'0'+date.getDate()
          item.timestamp = year+'年'+month+'月'+day+'日'
        })
        this.steps = data.reverse()
      }
    }
  }
</script>


