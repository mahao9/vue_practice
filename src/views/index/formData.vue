<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    width="50%"
    :show-close="showClo"
    class="eltable-header-line"
  >
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
      <el-form-item label="单选框组" prop="sex">
        <el-radio-group v-model="infoModel.sex" size="medium">
          <el-radio
            v-for="(item, index) in sexOptions"
            :key="index"
            :label="item.value"
            :disabled="item.disabled"
            >{{ item.label }}</el-radio
          >
        </el-radio-group>
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
      <el-form-item label="工龄" prop="age">
        <el-input-number
          v-model="infoModel.age"
          placeholder="工龄"
          :step="1"
          :max="99"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="出生日期" prop="birthday">
        <el-date-picker
          v-model="infoModel.birthday"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
          :style="{ width: '100%' }"
          placeholder="请选择出生日期"
          clearable
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="技能" prop="skill">
        <el-checkbox-group v-model="infoModel.skill" size="medium">
          <el-checkbox
            v-for="(item, index) in skillOptions"
            :key="index"
            :label="item.value"
            :disabled="item.disabled"
            >{{ item.label }}</el-checkbox
          >
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="离职" prop="move" required>
        <el-switch v-model="infoModel.move"></el-switch>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitForm">确定</el-button>
      <el-button @click="resetForm">重置</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "formData",
  components: {},
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
    echoData: {
      type: Object,
      default: {},
    },
    title: {
      type: String,
      default: "新增个人信息",
    },
  },
  data() {
    return {
      showClo: false,
      infoModel: {
        name: undefined,
        tel: undefined,
        sex: 1,
        personInfo: undefined,
        age: 0,
        birthday: "2021-07-14",
        skill: [],
        move: false,
        id: "",
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
        sex: [
          {
            required: true,
            message: "单选框组不能为空",
            trigger: "change",
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
            message: "工龄",
            trigger: "blur",
          },
        ],
        birthday: [
          {
            required: true,
            message: "请选择出生日期",
            trigger: "change",
          },
        ],
        skill: [
          {
            required: true,
            type: "array",
            message: "请至少选择一个技能",
            trigger: "change",
          },
        ],
      },
      sexOptions: [
        {
          label: "男",
          value: 1,
        },
        {
          label: "女",
          value: 2,
        },
      ],
      skillOptions: [
        {
          label: "vue",
          value: 1,
        },
        {
          label: "react",
          value: 2,
        },
        {
          label: "html",
          value: 3,
        },
      ],
    };
  },
  computed: {},
  watch: {
    echoData() {
      this.handleEchoData();
    },
    title() {
      if (
        this.title === "新增个人信息" &&
        this.$refs["dataAddForm"] !== undefined
      ) {
        this.$refs["dataAddForm"].resetFields();
      }
    },
  },
  created() {},
  mounted() {},
  methods: {
    handleEchoData() {
      const copyObj = {};
      Object.assign(copyObj, this.echoData);
     
      this.infoModel = this.echoData;
    },
    submitForm() {
      this.$refs["infoForm"].validate((valid) => {
        if (!valid) return;
        // TODO 提交表单
        const copyObj = {};
        // 生成唯一编码
        //测试修改文件
        //我再次修改formData文件
        if (this.title === "新增个人信息") {
          function createRandomId() {
            return (
              (Math.random() * 10000000).toString(16).substr(0, 4) +
              "_" +
              new Date().getTime() +
              "_" +
              Math.random()
                .toString()
                .substr(2, 5)
            );
          }
          this.infoModel.id = createRandomId();
        }
        Object.assign(copyObj, this.infoModel);
        // copyObj.skill = this.skillContainer;
        this.$emit("personInfo", copyObj);
        this.$emit("update:dialogVisible", false);
        this.$refs["infoForm"].resetFields();
      });
    },
    resetForm() {
      this.$refs["infoForm"].resetFields();
      this.$emit("update:dialogVisible", false);
    },
  },
};
</script>
<style></style>
