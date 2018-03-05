<template>
  <div class="layout">
    <div class="headerTitle">后台管理系统</div>
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']" @on-select="chooseFun">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
           角色管理
        </template>
          <MenuItem name="role">角色</MenuItem>
          <!--<MenuItem name="1-2">Option 2</MenuItem>-->
          <!--<MenuItem name="1-3">Option 3</MenuItem>-->
        </Submenu>
        <Submenu name="/component">
          <template slot="title">
            <Icon type="ios-keypad"></Icon>
            组件
        </template>
          <MenuItem name="/component/form">表单</MenuItem>
          <MenuItem name="/component/richText">富文本框</MenuItem>
          <MenuItem name="/component/upFile">上传文件</MenuItem>
          <MenuItem name="/component/chart">图表</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            Item 3
        </template>
          <MenuItem name="3-1">Option 1</MenuItem>
          <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{marginLeft: '200px'}">
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Card>
        <div style="height: 600px"><router-view></router-view></div>
        </Card>
      </Content>
    </Layout>

    <!--<Layout :style="{marginLeft: '200px'}">-->
      <!--<Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>-->
      <!--<Content :style="{padding: '0 16px 16px'}">-->
        <!--<Breadcrumb :style="{margin: '16px 0'}">-->
          <!--<BreadcrumbItem>Home</BreadcrumbItem>-->
          <!--<BreadcrumbItem>Components</BreadcrumbItem>-->
          <!--<BreadcrumbItem>Layout</BreadcrumbItem>-->
        <!--</Breadcrumb>-->
        <!--<Card>-->
          <!--<div style="height: 600px">Content</div>-->
        <!--</Card>-->
      <!--</Content>-->
    <!--</Layout>-->
  </div>
</template>
<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  /*.layout-header-bar{*/
    /*background: #fff;*/
    /*box-shadow: 0 1px 1px rgba([=[0,0,0,.1);*/
  /*}*/
  .headerTitle{
      height: 60px;
      background: white;
      line-height: 60px;
      border: 1px solid #d7dde4;
      font-size: 25px;

  }
</style>
<script>
export default {
  data () {
    return {
      name: '',
    }
  },
  methods:{
    chooseFun(e){
      this.$router.push(e);
    }
  }


}
</script>
