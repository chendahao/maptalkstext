/*
 * @Author: chenhao
 * @Date: 2022-11-16 18:30:30
 * @LastEditTime: 2022-11-16 18:38:22
 * @FilePath: \maptalkstext\src\mixins\fileMixin.js
 * @Description: 
 */
var fileMixin = {
  methods: {
    jsonToFile(res, name){
      const stringData = JSON.stringify(res, null, 2)
        const blob = new Blob([stringData], {
          type: 'application/json'
        })
        const objectURL = URL.createObjectURL(blob)
        const aTag = document.createElement('a')
        // 设置文件的下载地址
        aTag.href = objectURL
        // 设置保存后的文件名称
        aTag.download = `${name}.json`
        // 给 a 标签添加点击事件
        aTag.click()
        // 释放一个之前已经存在的、通过调用 URL.createObjectURL() 创建的 URL 对象。
        // 当你结束使用某个 URL 对象之后，应该通过调用这个方法来让浏览器知道不用在内存中继续保留对这个文件的引用了。
        URL.revokeObjectURL(objectURL)
    },
  },
}

export default fileMixin