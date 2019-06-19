<template>
  <div>
    <el-container>
      <ElSider></ElSider>
      <el-container>
        <el-header>
          <el-dropdown @command="changeLanguage">
            <span class="el-dropdown-link">切换语言<i class="el-icon-arrow-down el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="en">英文</el-dropdown-item>
              <el-dropdown-item command="zh">中文</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
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
  },
  methods: {
    changeLanguage (command) {
      this.$i18n.locale = command
    }
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
  }
</style>
