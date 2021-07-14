<template>
  <div class="wrapper-container">
    <h3 class="ac list-title">我是列表页</h3>
    <div class="list-table-data margin-bottom-15">
      <el-table :data="tableData" style="width: 100%" :key="itemKey">
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="180"> </el-table-column>
        <el-table-column prop="personInfo" label="个人说明" width="180">
        </el-table-column>
        <el-table-column prop="tel" label="电话" width="180"> </el-table-column>
        <el-table-column prop="age" label="年龄" width="180"> </el-table-column>
        <el-table-column prop="adress" label="地址"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              @click="handleEdit(scope.$index, scope.row, '修改个人信息')"
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
    <div class="">
      <el-button
        type="primary"
        size="mini"
        @click="addPersonInfo('新增个人信息')"
        >新增个人信息</el-button
      >
    </div>
    <add-list
      :title="title"
      :dialogVisible.sync="isShowInfoBox"
      :echoInfo="echoInfo"
      @personTrans="personTrans"
    ></add-list>
  </div>
</template>

<script>
import addList from "./addList.vue";
import { formatDate } from "../../utils/utils.js";
export default {
  name: "List",
  components: { addList },
  data() {
    return {
      tableData: [],
      isShowInfoBox: false,
      title: "",
      echoInfo: {},
      itemKey: "",
    };
  },
  watch: {},
  methods: {
    personTrans(event, value) {
      if (event.index !== "") {
        this.tableData[event.index] = event;
        this.itemKey = Math.random();
      } else {
        this.tableData.push(event);
        this.itemKey = Math.random();
      }
    },
    addPersonInfo(word) {
      this.title = word;
      this.isShowInfoBox = true;
      const date = formatDate(new Date(), "yyyy-MM-dd");
    },
    handleEdit(x, y, word) {
      this.title = word;
      this.echoInfo = {
        index: x,
        data: this.tableData[x],
      };
      this.isShowInfoBox = true;
    },
  },
};
</script>

<style>
.list-title {
  padding: 15px 0;
  font-weight: bold;
}
.margin-bottom-15 {
  margin-bottom: 15px;
}
</style>
