/*
 * @Author: chenhao
 * @Date: 2021-09-29 14:42:30
 * @LastEditTime: 2022-01-13 17:08:07
 * @FilePath: \tdsp.web\src\utils\dateTimeFormat.ts
 * @Description: 时间格式化工具方法
 */
// 时间类型的格式化显示
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'
import zhcn from 'dayjs/locale/zh-cn'
dayjs.locale(zhcn)
dayjs.extend(relativeTime)
dayjs.extend(updateLocale)
dayjs.updateLocale('zh-cn', {
  relativeTime: {
    future: '%s后',
    past: '%s前',
    s: '几秒',
    m: '1 分钟',
    mm: '%d 分钟',
    h: '1 小时',
    hh: '%d 小时',
    d: '1 天',
    dd: '%d 天',
    M: '1 个月',
    MM: '%d 个月',
    y: '1 年',
    yy: '%d 年'
  }
})
/**
 * 相对当前时间
 * @param {*} val
 * @returns
 */
export const fromNow = function (val: dayjs.ConfigType) {
  return dayjs(val).fromNow()
}

export const date_Format = function (value: dayjs.ConfigType) {
  if (!value) return ''
  if (!dayjs(value).isValid()) return value // 当时间不是正确的时间格式时，如string类型的日期 返回value
  return dayjs(value).format('YYYY-MM-DD')
}

export const formatSortTime = function (value: dayjs.ConfigType) {
  if (!value) return ''
  if (!dayjs(value).isValid()) return value
  const min = dayjs(value).minute() % 10 // 得到个位数分钟
  let diff = 0
  if (min < 3) {
    // 0 1 2
    diff = ~min + 1
  } else if (min >= 3 && min < 8) {
    //  3 4 5 6 7
    diff = 5 - min
  } else {
    // 8 9
    diff = 10 - min
  }
  return dayjs(value).add(diff, 'minute').format('HH:mm')
}

export default {
  fromNow, date_Format, formatSortTime
}
