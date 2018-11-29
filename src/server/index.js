import http from '../config/http'

export const addSmoke = ()=>http.req('/addSmoke').$get()
export const getTodayData =()=>http.req('/getTodayData').$get()
export const addSign = ()=>http.req('/addSinUser').$get()
export const getUserList = ()=>http.req('/getUserList').$get()
export const getManList = (pageNo)=>http.req('/getMansList',{pageNo,pageSize:10}).$get()
export const getRunData = (iv,encryptedData,code) =>http.req('/getRunData',{iv,encryptedData,code}).$post()
