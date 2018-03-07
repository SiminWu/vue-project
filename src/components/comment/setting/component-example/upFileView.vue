<template>
  <div>
    <Upload action="//jsonplaceholder.typicode.com/posts/">
      <Button type="ghost" icon="ios-cloud-upload-outline">文件上传</Button>
    </Upload>
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
