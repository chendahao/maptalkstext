/*
 * @Author: chenhao
 * @Date: 2022-11-02 14:19:28
 * @LastEditTime: 2022-11-02 14:19:36
 * @FilePath: \maptalkstext\src\store\MapModule\request.js
 * @Description: 
 */
import Axios from 'axios'
const axios = Axios.create({
  baseURL: '',
  timeout: 60000
})
const checkStatus = res => {
  if (res.status >= 200 && res.status < 300) {
    return res
  }
  throw new Error(res.statusText)
}
const request = async (url, config = {}) => {
  try {
    const res = await axios.request({ url, ...config })
    checkStatus(res)
    return await res.data
  } catch (err) {
    alert('request failed with error')
  }
}
const requestAll = async (urls) => {
  let requests = urls.map(makeRequest)
  const res = await Axios.all(requests)
  return res
}
const makeRequest = url => {
  return Axios.get(url)
}
export default {
  request,
  requestAll
}
