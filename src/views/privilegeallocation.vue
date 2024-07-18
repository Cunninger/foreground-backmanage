<template>
    <el-table :data="roleList" style="width: 100%">
      <el-table-column prop="name" label="角色名" width="180"></el-table-column>
      <el-table-column prop="description" label="角色描述"></el-table-column>
      <el-table-column label="是否可用" width="120">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.enabled"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <el-button type="success" icon="el-icon-view" circle></el-button>
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
  </template>
  
  <script>
  export default {
    data() {
      return {
        roleList: [
          {
            name: 'role:user',
            description: '普通用户',
            enabled: true
          },
          {
            name: 'role:root',
            description: '超级管理员',
            enabled: true
          },
          {
            name: 'role:admin',
            description: '管理员',
            enabled: true
          },
          {
            name: 'role:comment',
            description: '评论审核管理员',
            enabled: true
          }
        ]
      }
    }
  }
  </script>