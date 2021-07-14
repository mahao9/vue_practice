<template>
  <div class="container" id="app">
    <el-container>
      <el-aside width="200px">
          <nav-menu></nav-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import navMenu from './navMenu.vue'
export default {
  name: "Layout",
  components:{
      navMenu
  },
  computed: {
    routerKey() {
      console.log(this.$route.path)
      return this.$route.path
    }
  },
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: left;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.container,
.el-container {
  height: 100vh;
}
</style>
