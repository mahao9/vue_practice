<template>
  <div class="login_container">
      <h3 class="login-title">我的测试项目</h3>
      <div>
    <el-form
      ref="elForm"
      :model="formData"
      :rules="rules"
      size="medium"
      label-width="100px"
    >
      <el-form-item label="账号" prop="userName">
        <el-input
          v-model="formData.userName"
          placeholder="请输入账号"
          clearable
          :style="{ width: '100%' }"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-input
          v-model="formData.passWord"
          placeholder="请输入密码"
          clearable
          show-password
          :style="{ width: '100%' }"
        ></el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  components: {},
  props: [],
  data() {
    return {
      formData: {
        userName: undefined,
        passWord: undefined,
      },
      rules: {
        userName: [
          {
            required: true,
            message: "请输入账号",
            trigger: "blur",
          },
        ],
        passWord: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs["elForm"].validate((valid) => {
        if (!valid) return;
        // TODO 提交表单
        this.$router.push('Home')
      });
    },
    resetForm() {
      this.$refs["elForm"].resetFields();
    },
  },
};
</script>
<style>
.login-title {
    margin-bottom: 20px;
}
.login_container {
    padding: 100px 0 0 0;
    width: 500px;
    margin: 0 auto;
}
</style>

