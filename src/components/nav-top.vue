<!-- 顶部导航 -->
<style scoped>
.el-aside {
  display: flex;
  justify-content: center;
  align-items: center;
}

section {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo {
  width: 200px;
}

.headerLogo,
.logo {
  cursor: pointer;
}
</style>

<template>
  <el-container>

    <el-aside width="auto" class="header-logo tap">

      <img class="logo" src="@/assets/imgs/logo.png" alt="Logo" />
      <el-button @click="toggleSidebar">{{ isCollapsed ? '展开' : '收起' }}</el-button>
      <el-button icon="el-icon-s-home" class="logo" @click="goPage('home')"></el-button>
    </el-aside>

    <el-aside width="auto" class="header-logo tap">
      <el-dropdown ref="dropdown">
        <el-avatar icon="el-icon-user-solid" class="headerLogo" @click.native="goProfile()"></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item index="1" @click.native="goPage('personcentre')">个人中心</el-dropdown-item>
          <el-dropdown-item index="2" @click.native="goPage('setting')">设置</el-dropdown-item>
          <el-dropdown-item index="3" @click.native="signout()">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-aside>
  </el-container>
</template>

<script>
export default {
  name: 'nav-top',
  props: {
    isCollapsed: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggle-sidebar');
    },
    goPage(link) {
      const routes = {
        personcentre: '/personcentre',
        setting: '/setting',
        home: '/home',
  
      };

      const path = routes[link];
      if (path) {
        this.$router.push(path).catch(error => error);
      }
    },
    signout(){
      this.$router.push('/login').catch(error => error);
    },
  }
};
</script>
