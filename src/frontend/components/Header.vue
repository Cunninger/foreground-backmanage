<template>


  <div class="header">
    <el-row :gutter="10">
      <el-col :span="6">
        <div style="text-align: right; font-size: 30px;">游晓竹Blog</div>
      </el-col>
      <el-col :span="12">
        <el-menu mode="horizontal" :default-active="activeIndex" class="el-menu-demo" @select="handleSelect">
          <el-menu-item index="1" @click="goPage('home')">网站首页</el-menu-item>
          <el-menu-item index="2" @click="goPage('aboutme')">关于我</el-menu-item>
          <el-menu-item index="3" @click="goPage('templates')">模板分享</el-menu-item>
          <el-menu-item index="4" @click="goPage('notes')">学习笔记</el-menu-item>
          <el-menu-item index="5" @click="goPage('life')">生活记录</el-menu-item>


        </el-menu>
        
        
      </el-col>
  

        <el-button type="info" @click="goToDiscuss">聊天室</el-button>
        <el-button type="primary" @click="goToAdmin">返回后台</el-button>

    </el-row>
  
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    goPage(link) {
      const routes = {
        home: '/home',
        aboutme: '/aboutme',
        templates: '/templates',
        notes: '/notes',
        life: '/life'
        // Add more routes as needed
      };

      const path = routes[link];
      if (path) {
        this.$router.push(path).catch(error => error);
      }
    },
    goToAdmin() {
      this.$router.push('/layout').catch(error => error);
    },
    goToDiscuss() {
      this.$router.push('/groupchat').catch(error => error);
    }
  }
};
</script>

<style scoped>
.header {
  background-color: #b9bbbc;
  padding: 0px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
h1 {
  margin: 0;
  font-size: 24px;
}
</style>
