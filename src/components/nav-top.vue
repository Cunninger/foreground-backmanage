<template>
  <el-container>

    <el-aside class="header-logo tap" width="auto">

      <img alt="Logo" class="logo" src="@/assets/imgs/logo.png"/>
      <el-button @click="toggleSidebar">{{ isCollapsed ? '展开' : '收起' }}</el-button>
      <el-button class="logo" icon="el-icon-s-home" style="margin-right: 20px;" @click="goPage('home')"></el-button>

      <el-tag class="date" style="margin-left: 20px;">{{ currentDate }}</el-tag>
    </el-aside>

    <el-aside class="header-logo tap" width="auto">
      <div style="margin-right: 10px;"><strong>{{ user?.username }}</strong></div>
      <el-dropdown ref="dropdown">

        <el-avatar class="headerLogo" icon="el-icon-user-solid" @click.native="goProfile()"></el-avatar>
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
import {mapState} from 'vuex';

export default {
  name: 'nav-top',
  props: {
    isCollapsed: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    ...mapState([
      'user' // 直接映射 this.user 到 store.state.user
    ]),
  },
  mounted() {
    this.updateTime();
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
    signout() {
      this.$router.push('/login').catch(error => error);
    },
    updateTime() {
      setInterval(() => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const date = String(now.getDate()).padStart(2, '0');
        const hour = String(now.getHours()).padStart(2, '0');
        const minute = String(now.getMinutes()).padStart(2, '0');
        const second = String(now.getSeconds()).padStart(2, '0');
        this.currentDate = `${year}-${month}-${date} ${hour}:${minute}:${second}`;
      }, 1000);
    }
  }
};
</script>

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

.date {
  font-size: 16px;
  color: #666;
}
</style>
