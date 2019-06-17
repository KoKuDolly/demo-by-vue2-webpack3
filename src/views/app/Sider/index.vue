<template>
  <el-aside width="200px">
    <Menu>
      <Submenu index="1">
        <template slot="title">
          <span>导航1</span>
        </template>
        <template>
          <MenuItem index="1-1">
            <span slot="title">选项1</span>
            <!-- eslint-disable-next-line -->
          </MenuItem>
          <MenuItem index="1-2">
            <span slot="title">选项2</span>
            <!-- eslint-disable-next-line -->
          </MenuItem>
        </template>
      </Submenu>
    </Menu>
  </el-aside>
</template>
<script>
import { Menu, Submenu, MenuItem, MenuItemGroup, DropdownMenu } from 'element-ui'
export default {
  name: 'ElSider',
  components: {
    Menu, Submenu, MenuItem, MenuItemGroup, DropdownMenu
  }
}
</script>
<style lang="scss">
  .el-aside {
    padding-top: 60px;
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
</style>
