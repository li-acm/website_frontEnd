/*
 * @Description: 
 * @Author: hongzai
 * @version: 
 * @Date: 2020-09-27 12:44:32
 * @LastEditors: hongzai
 * @LastEditTime: 2020-11-03 22:52:57
 */
module.exports = {
    devServer: {
        host: '0.0.0.0', //host改成自己的IP
        port: 8080,
        proxy: null, // string | Object
        before: app => {}
      }
}