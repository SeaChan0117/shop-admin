<template>
  <div class="login-page">
    <el-form
      :model="loginForm"
      status-icon
      ref="ruleForm"
      :rules="rules"
      class="demo-ruleForm"
    >
      <div class="login-logo">
        <img
          style="width: 100%;"
          src="@/assets/login_logo.png"
          alt="logo"
        >
      </div>
      <el-form-item
        prop="account"
      >
        <el-input
          prefix-icon="el-icon-user"
          v-model="loginForm.account"
          placeholder="用户名"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item
        prop="pwd"
      >
        <el-input
          type="password"
          prefix-icon="el-icon-lock"
          v-model="loginForm.pwd"
          placeholder="密码"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item
        prop="imgcode"
      >
        <div class="img-code-form-item">
          <el-input
            style="width: calc(100% - 140px)"
            prefix-icon="el-icon-key"
            placeholder="验证码"
            v-model.number="loginForm.imgcode"
          />
          <img
            class="img-code"
            :src="imgCodeUrl"
            @click="changImgCode"
            alt=""
          >
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          style="width: 100%"
          type="primary"
          @click="submitForm"
        >
          提交
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { getCaptcha } from '@/api/common'
const loginForm = reactive({
  account: '',
  pwd: '',
  imgcode: ''
})
const rules = ref({
  account: [
    { required: true, message: '请输入账号', trigger: 'change' }
  ],
  pwd: [
    { required: true, message: '请输入密码', trigger: 'change' }
  ],
  imgcode: [
    { required: true, message: '请输入验证码', trigger: 'change' }
  ]
})

const imgCodeUrl = ref('')

const changImgCode = async () => {
  const data = await getCaptcha()
  imgCodeUrl.value = URL.createObjectURL(data)
}

const submitForm = () => {}

onMounted(() => {
  changImgCode()
})
</script>

<style lang="scss" scoped>
.login-page {
  background-color: #304156;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .el-form {
    background-color: #ffffff;
    width: 350px;
    border: 1px solid #eeeeee;
    padding: 20px;
    border-radius: 10px;

    .login-logo {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 30px;
    }
    .img-code-form-item {
      display: flex;
      justify-content: space-between;
      .img-code{
        width: 120px;
        height: 32px;
        cursor: pointer;
      }
    }
  }
}
</style>
