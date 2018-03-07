<template>
  <div class="login-wrap">
    <div class="login">
      <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
        <FormItem label="账号" prop="account">
          <Input type="text" v-model="formCustom.account"></Input>
        </FormItem>
        <FormItem label="密码" prop="passwd">
          <Input type="password" v-model="formCustom.passwd"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formCustom')">Submit</Button>
          <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">Reset</Button>
        </FormItem>
      </Form>
    </div>
  </div>


</template>
<style>
    .login-wrap{
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .login{
      width: 300px;
      height: 300px;
      position: absolute;
      left:0;
      right: 0;
      top:0;
      bottom: 0;
      margin: auto;
    }


</style>
<script>
  export default {
    data () {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };



      return {
        formCustom: {
          account:'',
          passwd: ''

        },
        ruleCustom: {
          account:[{required: true,trigger: 'blur',message:"账户必填"} ],
          passwd: [
            { validator: validatePass, trigger: 'blur' }
          ],


        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
            this.$router.push("/layout")
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      }
    }
  }
</script>
