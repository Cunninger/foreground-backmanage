<template>
    <div class="header">
      <el-row :gutter="20">
        <el-col :span="6">
          <h1>游晓竹的Blog</h1>
        </el-col>
        <el-col :span="18">
          <el-menu mode="horizontal" :default-active="activeIndex" class="el-menu-demo" @select="handleSelect">
            <el-menu-item index="1">网站首页</el-menu-item>
            <el-menu-item index="2">关于我</el-menu-item>
            <el-menu-item index="3">模板分享</el-menu-item>
            <el-menu-item index="4">学习笔记</el-menu-item>
            <el-menu-item index="5">生活记录</el-menu-item>
      
          </el-menu>
        </el-col>
        <el-col :span="6">
          <h1>后台中心</h1>
        </el-col>
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
    },
  };
  </script>
  
  <style scoped>
  .header {
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  h1 {
    margin: 0;
    font-size: 24px;
  }
  </style>
  