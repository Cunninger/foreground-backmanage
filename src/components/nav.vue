<template>
  <el-aside :width="isCollapsed ? '53.5px' : '242px'">
    <el-row class="tac">
      <el-col>
        <el-menu class="el-menu-vertical-demo" default-active="1" @close="handleClose" @open="handleOpen">

          <el-menu-item index="1" @click="goPage('home')">
            <span v-if="!isCollapsed" slot="title">后台中心</span>
            <!-- <i class="el-icon-menu" :style="{'display' : isCollapsed ? 'inline-block' : 'none'}"></i> -->
            <i :style='inline - block' class="el-icon-menu"></i>

          </el-menu-item>

          <el-menu-item index="2" @click="goPage('myblog')">
            <span v-if="!isCollapsed" slot="title">我的博客</span>
            <i :style='inline - block' class="el-icon-s-order"></i>
          </el-menu-item>

          <el-submenu index="3">;
            <template slot="title">

              <i :style='inline - block' class="el-icon-location"></i>
              <span v-if="!isCollapsed">测试3</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1" @click="goPage('cnt')">
                chatnextweb
              </el-menu-item> <!-- 添加这行 -->
            </el-menu-item-group>

            <el-menu-item-group>
              <el-menu-item index="3-2" @click="goPage('aidraw')">AI绘画</el-menu-item> <!-- 添加这行 -->
            </el-menu-item-group>


            <el-menu-item-group>
              <el-menu-item index="3-3" @click="goPage('piclibrary')">AI图库</el-menu-item> <!-- 添加这行 -->
            </el-menu-item-group>

            <el-menu-item-group>
              <el-menu-item index="3-4" @click="goPage('test3_4')">测试3-4</el-menu-item> <!-- 添加这行 -->
            </el-menu-item-group>

          </el-submenu>


          <!-- <el-menu-item index="4" @click="goPage('user')">
            <span v-if="!isCollapsed" slot="title">用户管理</span>
            <i class="el-icon-user" :style='inline - block'></i>
          </el-menu-item> -->
          <el-menu-item v-if="isAdmin" index="4" @click="goPage('user')">
            <span v-if="!isCollapsed" slot="title">用户管理</span>
            <i :style='inline - block' class="el-icon-user"></i>
          </el-menu-item>


          <el-menu-item index="5" @click="goPage('algoritms')">
            <span v-if="!isCollapsed" slot="title">算法查询</span>
            <i :style='inline - block' class="el-icon-trophy"></i>
          </el-menu-item>

          <el-menu-item index="6" @click="goPage('aichat')">
            <span v-if="!isCollapsed" slot="title">AI问答</span>
            <i :style='inline - block' class="el-icon-chat-dot-square"></i>
          </el-menu-item>


          <el-menu-item index="7" @click="goPage('editor')">
            <span v-if="!isCollapsed" slot="title">文本编辑</span>
            <i :style='inline - block' class="el-icon-edit"></i>
          </el-menu-item>

          <el-menu-item index="8" @click="goPage('codeeditor')">
            <span v-if="!isCollapsed" slot="title">代码编辑</span>
            <i :style='inline - block' class="el-icon-edit"></i>
          </el-menu-item>

          <el-menu-item v-if="isAdmin" index="9" @click="goPage('privilegeallocation')">
            <span v-if="!isCollapsed" slot="title">权限分配</span>
            <i :style='inline - block' class="el-icon-edit"></i>
          </el-menu-item>


          <el-menu-item  index="9" @click="goPage('mypan')">
            <span v-if="!isCollapsed" slot="title">我的网盘</span>
            <i :style='inline - block' class="el-icon-edit"></i>
          </el-menu-item>


        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</template>

<script>
import {mapState} from 'vuex';
import ACCESS from "@/access/accessEnum";

export default {
  name: 'Sidebar',
  props: ['isCollapsed'],
  computed: {
    ...mapState([
      'user' // 直接映射 this.user 到 store.state.user
    ]),
    isAdmin() {
      return this.user.sysRole.name === ACCESS.ADMIN;
    }
  },
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
        myblog: '/myblog',
        test3: '/test3',
        cnt: '/cnt',
        aidraw: '/aidraw',
        piclibrary: '/piclibrary',
        test3_4: '/test3_4',
        user: '/user',
        editor: '/editor',
        algoritms: '/algoritms',
        aichat: '/aichat',
        codeeditor: '/codeeditor',
        privilegeallocation: '/privilegeallocation',
        mypan:"/mypan"

      };

      const path = routes[link];
      if (path) {
        this.$router.push(path).catch(error => error);
      }
    },

  }
};
</script>

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

/* 测试三下拉目录颜色 */
.el-menu-item-group {
  background-color: #a1abb7;
  font-weight: bold;
}
</style>
