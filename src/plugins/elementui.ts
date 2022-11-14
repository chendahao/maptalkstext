/*
 * @Author: chenhao
 * @Date: 2022-11-14 15:16:53
 * @LastEditTime: 2022-11-14 15:41:14
 * @FilePath: \maptalkstext\src\plugins\elementui.ts
 * @Description: 
 */
import Vue from 'vue'
import { Message, Input, MessageBox, InputNumber, ColorPicker } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ColorPicker)
Vue.use(Input)
Vue.use(InputNumber)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm;
