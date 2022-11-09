// 获取localstorage中的数据

const Storage = window.localStorage

const setlocalStorage = function (text: string, val: any) {
  Storage.setItem(text, val)
}

const setlocalStorage_UserData = function (val: any) {
  Storage.setItem('userdata', val)
}

const setlocalStorage_UserToken = function (val: any) {
  Storage.setItem('usertoken', val)
}

const removelocalStorage = function (text: any) {
  Storage.removeItem(text)
}

const getlocalStorage_UserData = function () {
  let dat = Storage.getItem('userdata')
  if (dat) {
    return dat
  }
  return ''
}

const getlocalStorage_UserToken = function () {
  let dat = Storage.getItem('usertoken')
  if (dat) {
    return dat
  }
  return ''
}

const getlocalStorage = function (text: string) {
  let dat = Storage.getItem(text)
  if (dat) {
    return dat
  }
  return ''
}

// 获取用户信息
const getUserdata = function () {
  let dat = Storage.getItem('userdata')
  if (dat) {
    return JSON.parse(dat)
  }
  return false
}

export default {
  setlocalStorage_UserData,
  setlocalStorage_UserToken,
  getlocalStorage_UserData,
  getlocalStorage_UserToken,
  setlocalStorage,
  removelocalStorage,
  getlocalStorage,
  getUserdata
}
