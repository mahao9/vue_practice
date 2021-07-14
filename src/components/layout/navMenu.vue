<template>
  <div>
    <div class="nav-logo">我是logo</div> 
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo al"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <i class="el-icon-document"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">列表页</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "navMenu",
  data() {
    return {
      activeMenu: "2"
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.al.el-menu {
  border-right: 0;
}
.nav-logo {
    background-color: rgb(84, 92, 100);
    padding: 10px 0;
    border-bottom: 1px solid rgb(67, 74, 80);
    color: #fff;
    font-weight: bold;
}
</style>
