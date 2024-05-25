<!-- 左边的导航 -->
<style scoped>
.el-row {
  height: 100%;
}

.el-menu-vertical-demo .el-menu-item span {
  color: #BFCBD9;
  /* Change color to white */
  font-family: 'Arial', sans-serif;
  /* Change font style */
  font-size: 14px;
  /* Optional: Change font size */
}

/* Additional styling for submenu titles */
.el-menu-vertical-demo .el-submenu__title span {
  color: #BFCBD9;
  /* Change color to gold */
  font-weight: bold;
  /* Make font bold */
}

.el-menu {
  border-right: none;
  background-color: #304156;
  /* 添加这行 */
}

.el-aside {
  border-right: 1px solid #f5f1f1;
  background-color: #304156;
  /* 添加这行 */
}
</style>

<template>
  <el-aside :width="isCollapsed ? '53.5px' : '242px'">
    <el-row class="tac">
      <el-col>
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">

          <el-menu-item index="1" @click="goPage('home')">
            <i class="el-icon-menu"></i>
            <span slot="title">后台中心</span>
          </el-menu-item>

          <el-menu-item index="2" @click="goPage('order')">
            <i class="el-icon-s-order"></i>
            <span slot="title">订单列表</span>
          </el-menu-item>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>测试3</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1" @click="goPage('test3_1')">测试3-1</el-menu-item> <!-- 添加这行 -->
            </el-menu-item-group>

            <el-menu-item-group>
              <el-menu-item index="3-2" @click="goPage('test3_2')">测试3-2</el-menu-item> <!-- 添加这行 -->
            </el-menu-item-group>
          

            <el-menu-item-group>
              <el-menu-item index="3-3" @click="goPage('test3_3')">测试3-3</el-menu-item> <!-- 添加这行 -->
            </el-menu-item-group>

            <el-menu-item-group>
              <el-menu-item index="3-4" @click="goPage('test3_4')">测试3-4</el-menu-item> <!-- 添加这行 -->
            </el-menu-item-group>

          </el-submenu>


          <el-menu-item index="2" @click="goPage('editor')">
            <i class="el-icon-s-order"></i>
            <span slot="title">编辑</span>
          </el-menu-item>


          <el-menu-item index="4" @click="goPage('user')">
            <i class="el-icon-user"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>

          <el-menu-item index="5" @click="goPage('algoritms')">
            <i class="el-icon-trophy"></i>
            <span slot="title">算法查询</span>
          </el-menu-item>

          <el-menu-item index="6" @click="goPage('aichat')">
            <i class="el-icon-chat-dot-square"></i>
            <span slot="title">AI问答</span>
          </el-menu-item>



        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['isCollapsed'],
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goPage(link) {
      const routes = {
        home: '/layout',
        order: '/order',
        test3: '/test3',
        test3_1: '/test3_1',
        test3_2: '/test3_2',
        test3_3: '/test3_3',
        test3_4: '/test3_4',
        user: '/user',
        editor: '/editor',
        algoritms: '/algoritms',
        aichat: '/aichat'
      };

      const path = routes[link];
      if (path) {
        this.$router.push(path).catch(error => error);
      }
    }
  }
};
</script>