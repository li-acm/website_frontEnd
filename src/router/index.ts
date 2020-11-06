/*
 * @Description: 
 * @Author: hongzai
 * @version: 
 * @Date: 2020-09-27 11:08:33
 * @LastEditors: hongzai
 * @LastEditTime: 2020-11-04 13:31:33
 */
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
         meta:{
                // 页面标题title
                title: '轻院计协官网'
            }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
