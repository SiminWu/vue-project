import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/comment/layout/layoutWrap'
import Component from '@/components/comment/layout/layoutWrap'
//角色
import Role from '@/components/comment/setting/role'

//组件
//图表
import Chart from '@/components/comment/setting/component-example/chartView'
//表单
import Form from '@/components/comment/setting/component-example/formView'
//富文本框
import RichText from '@/components/comment/setting/component-example/richTextView'
//上传文件
import UpFile from '@/components/comment/setting/component-example/upFileView'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children:[
        {//角色管理---角色
          path: '/role',
          name: 'Role',
          component: Role
        }
      ]
    },
    {//组件
      path: '/component',
      name: 'component',
      component: Layout,
      children:[
        {//图表
          path: '/component/chart',
          name: 'chart',
          component: Chart
        },
        {//富文本框
          path: '/component/richText',
          name: 'richText',
          component: RichText
        },
        {//表单
          path: '/component/form',
          name: 'form',
          component: Form
        },
        {//上传文件
          path: '/component/upFile',
          name: 'upFile',
          component: UpFile
        }
      ]
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
