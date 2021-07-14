<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="40%"
      :show-close="showClo"
      class="eltable-header-line"
    >
      <el-table :data="gridData" class="">
        <el-table-column
          property="date"
          label="日期"
          width="150"
        ></el-table-column>
        <el-table-column
          property="name"
          label="姓名"
          width="200"
        ></el-table-column>
        <el-table-column property="address" :label="typeParam"></el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="closeDialog">确 定</el-button>
        <el-button @click="closeDialog">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "addData",
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
    gridData: {
      type: Array,
      default: ()=>[]
    },
    typeParam: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      showClo: false,
    };
  },
  methods: {
    closeDialog() {
      this.$emit("update:dialogVisible", false);
    },
  },
};
</script>

<style>
.eltable-header-line .el-dialog__body {
    padding-top: 10px;
}
.el-table-wrapper .el-dialog__header {
    border-bottom: 1px solid #eee;
}
</style>