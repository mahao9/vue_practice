<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose"
    :show-close="false"
  >
    <div>
      <el-form
        ref="infoForm"
        :model="infoModel"
        :rules="rules"
        size="medium"
        label-width="100px"
      >
        <el-form-item label="姓名" prop="name">
          <el-input
            v-model="infoModel.name"
            placeholder="请输入姓名"
            clearable
            :style="{ width: '100%' }"
          ></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="tel">
          <el-input
            v-model="infoModel.tel"
            placeholder="请输入电话"
            clearable
            :style="{ width: '100%' }"
          ></el-input>
        </el-form-item>
        <el-form-item label="个人说明" prop="personInfo">
          <el-input
            v-model="infoModel.personInfo"
            type="textarea"
            placeholder="请输入个人说明"
            :autosize="{ minRows: 4, maxRows: 4 }"
            :style="{ width: '100%' }"
          ></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input
            v-model="infoModel.age"
            placeholder="请输入年龄"
            clearable
            :style="{ width: '100%' }"
          ></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-input
            v-model="infoModel.sex"
            placeholder="请输入性别"
            clearable
            :style="{ width: '100%' }"
          ></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="adress">
          <el-input
            v-model="infoModel.adress"
            placeholder="请输入地址"
            clearable
            :style="{ width: '100%' }"
          >
          </el-input>
        </el-form-item>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="submitInfo">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
import { createRandomId } from '../../utils/utils.js'
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    echoInfo: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      infoModel: {
        id: "",
        name: undefined,
        tel: undefined,
        personInfo: undefined,
        age: undefined,
        sex: undefined,
        adress: undefined,
        index:''
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入姓名",
            trigger: "blur",
          },
        ],
        tel: [
          {
            required: true,
            message: "请输入电话",
            trigger: "blur",
          },
        ],
        personInfo: [
          {
            required: true,
            message: "请输入个人说明",
            trigger: "blur",
          },
        ],
        age: [
          {
            required: true,
            message: "请输入年龄",
            trigger: "blur",
          },
        ],
        sex: [
          {
            required: true,
            message: "请输入性别",
            trigger: "blur",
          },
        ],
        adress: [
          {
            required: true,
            message: "请输入地址",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {},
  watch: {
    title() {
      //   
    },
    echoInfo() {
      this.infoModel = this.echoInfo.data;
      this.infoModel.index = this.echoInfo.index
    },
  },
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs["infoForm"].validate((valid) => {
        if (!valid) return;
        // TODO 提交表单
      });
    },
    resetForm() {
      this.$refs["infoForm"].resetFields();
    },
    handleClose(done) {
      //比较合理的是当你点击关闭按钮的时候，你告诉外界你已经点了关闭按钮，外界收到了消息，再执行相应的操作(关闭弹窗)
      this.$emit("update:dialogVisible", false);
    },
    submitInfo() {
      const newObj = {};
      //表单数据不能直接复制给接口需要的参数 浅拷贝出一个新的来
      Object.assign(newObj, this.infoModel);
      if (this.title === "新增个人信息") {
        newObj.id = createRandomId();
      }
      this.$emit("personTrans", newObj);
      
      this.$emit("update:dialogVisible", false);
      this.$refs["infoForm"].resetFields();
    },
  },
};
</script>
<style></style>
