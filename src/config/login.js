//登录接口
import http from './http'

const login  = (headers)=>http.req('/login').options(headers).$get()

const loginController = {
  login(User,cb){
    wx.login({
      success:res=>{
        let code = res.code
        this.LoginFunc(code,User,cb)
      }
    })
  },
  /**
   * 获取用户信息函数
   * @param code 登录的code
   * @param cb 回调函数 callback
   */
  LoginFunc(code,userData,cb){
    const _this =this
    const iv = userData.iv
    const encrypted_data=userData.encryptedData
    const signature =  userData.signature
    const headers={
      'wx-code':code,
      'wx-iv':iv,
      'wx-encrypted-data':encrypted_data,
      'wx-signature':signature
    }
    wx.removeStorageSync('userInfo')
    wx.removeStorageSync('token')
    /**
     * 登录接口
     * 成功则将token存入缓存
     * 失败则清除token
     */
    login(headers).then(res=>{
     
      if( res.code===1){
        wx.setStorageSync('userInfo',userData.userInfo)
        wx.setStorageSync('token',res.data.token)
        cb && cb(res)
      }else{
        console.log(2)
        wx.showToast({
          icon:'none',
          mask:true,
          title:"登录失败"
        })
        wx.removeStorageSync('token')
        cb && cb(null)
      }
    }).catch(er=>{
      console.log(er)
      if(er){
        wx.showToast({
          icon:'none',
          mask:true,
          title:"登录失败"
        })
        wx.removeStorageSync('token')
        cb && cb(null)
      }
    })
    
  }
}

export default loginController
