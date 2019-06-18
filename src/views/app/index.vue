<template>
  <div>
    <el-container>
      <ElSider></ElSider>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view/>
        </el-main>
        <el-footer>footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
// import { Container, Header, Main } from 'element-ui'
import ElSider from './Sider/'
// import ElHeader from './Header/'
// import ElBody from './Body/'
export default {
  name: 'appLayout',
  components: {
    // Container,
    // Header,
    // Main,
    ElSider
    // ElHeader,
    // ElBody
  }
}
</script>
<style lang="scss">
  .el-header,
  .el-footer {
    display: inline-block;
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    min-height: 500px;
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
