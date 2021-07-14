<template>
  <div class="wrapper-container">
    <div class="my-practice-table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </div>
    <div class="ac look-diff">
      <el-form
        ref="selectData"
        :model="selectModel"
        :rules="rules"
        size="medium"
        label-width="100px"
      >
        <el-form-item label-width="0" prop="field101">
          <el-select
            v-model="selectModel.field101"
            placeholder="请选择下拉选择"
            clearable
            :style="{ width: '100%' }"
            @change="selectValue(selectModel.field101)"
          >
            <el-option
              v-for="(item, index) in field101Options"
              :key="index"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-row>
        <el-button type="primary" size="medium" @click="showDialog"
          >打开table弹窗</el-button
        >
        <el-button
          type="primary"
          size="medium"
          @click="showInfoDialog('新增个人信息')"
          >新增个人信息</el-button
        >
        <el-button
          type="primary"
          size="medium"
          @click="routerLinker"
          >跳转到list</el-button
        >
      </el-row>
    </div>
    <div class="person-info-tabledata">
      <el-table :data="personInfoTableData" style="width: 100%">
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="180"> </el-table-column>
        <el-table-column prop="tel" label="电话" width="180"> </el-table-column>
        <el-table-column prop="personInfo" label="个人说明" width="180">
        </el-table-column>
        <el-table-column prop="move" label="是否离职" width="180">
        </el-table-column>
        <el-table-column prop="skill" label="技能" width="180">
        </el-table-column>
        <el-table-column prop="age" label="工龄" width="180"> </el-table-column>
        <el-table-column prop="birthday" label="出生日期"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="mini"
              @click="handleEdit(scope.$index, scope.row, '编辑个人信息')"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="text"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div></div>
    <add-data
      :dialogVisible.sync="isShowDialog"
      :gridData="toGridData"
      :typeParam="selectLabel"
    ></add-data>
    <form-data
      @personInfo="personInfo"
      :echoData="echoData"
      :title="title"
      :dialogVisible.sync="isShowInfoDialog"
    ></form-data>
  </div>
</template>
<script>
import addData from "./addData.vue";
import formData from "./formData.vue";
export default {
  name: "Index",
  components: {
    addData,
    formData,
  },
  data() {
    return {
      isShowDialog: false, //控制table弹窗显示隐藏属性
      isShowInfoDialog: false, //控制form弹窗显示隐藏属性
      //personInfo:{},//个人信息
      personInfoTableData: [],
      originalData: [], //子组件传过来的原始数据
      echoData: {}, //编辑后回显给子组件formData的数据
      title: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      toGridData: [],
      //----select
      selectModel: {
        field101: 1,
      },
      rules: {
        field101: [
          {
            required: true,
            message: "请选择下拉选择",
            trigger: "change",
          },
        ],
      },
      field101Options: [
        {
          label: "选项一",
          value: 1,
        },
        {
          label: "选项二",
          value: 2,
        },
        {
          label: "选项三",
          value: 3,
        },
      ],
      //----select
      selectLabel: "",
    };
  },
  mounted() {},
  methods: {
    personInfo(event, value) {
      const copyObj = {};
      Object.assign(copyObj, event);
      for (let i = 0; i < this.personInfoTableData.length; i++) {
        if (this.personInfoTableData[i].id === copyObj.id) {
          this.personInfoTableData[i] = copyObj;
          return;
        }
      }
      this.personInfoTableData.push(copyObj);
    },
    showDialog() {
      this.$refs["selectData"].validate((valid) => {
        if (!valid) {
          this.$message({
            showClose: true,
            message: "请选择数据后提交",
            type: "warning",
          });
          return;
        }
        // TODO 提交表单
        this.isShowDialog = true;
        this.toGridData = this.tableData;
      });
    },
    selectValue(val) {
      this.field101Options.forEach((item) => {
        if (+item.value === +val) {
          this.selectLabel = item.label;
        }
      });
    },
    showInfoDialog(word) {
      this.title = word;
      this.isShowInfoDialog = true;
    },
    handleEdit(x, y, type) {
      this.echoData = this.personInfoTableData[x];
      this.title = type;
      this.isShowInfoDialog = true;
    },
    routerLinker() {
      this.$router.push('home/list')
    }
  },
};
</script>

<style>
.my-practice-table {
  padding: 40px;
}
.look-diff {
  display: flex;
  justify-content: start;
  padding-left: 40px;
}
.look-diff .el-form {
  margin-right: 30px;
}
.person-info-tabledata {
  padding: 30px;
}
</style>
