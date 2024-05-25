<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-input v-model="searchQuery" placeholder="按用户名搜索" @input="fetchUsers"></el-input>
      </el-col>
      <el-col :span="12">
        <el-button @click="resetSearch">重置</el-button>
        <el-button @click="openNewUserDialog">添加用户</el-button>
      </el-col>
    </el-row>
    <el-table class="eltable" :data="users" stripe :header-cell-style="{ backgroundColor: 'aliceblue', color: '#666'}">
      <el-table-column prop="userId" label="用户ID"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="password" label="密码" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="editUser(scope.row)">编辑</el-button>
          <el-button @click="deleteUser(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 用户编辑对话框 -->
    <el-dialog title="编辑用户" :visible.sync="dialogVisible">
      <el-form :model="editFormData">
        <el-form-item label="用户名">
          <el-input v-model="editFormData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="editFormData.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveUser">保存</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      searchQuery: '',
      dialogVisible: false,
      editFormData: {},
    };
  },
  methods: {
    fetchUsers() {
      this.$axios.get('/api/users', {
        params: {
          search: this.searchQuery,
        }
      }).then(response => {
        this.users = response.data.users;
      }).catch(error => {
        console.error('Error fetching users:', error);
      });
    },
    resetSearch() {
      this.searchQuery = '';
      this.fetchUsers();
    },
    editUser(user) {
      this.editFormData = { ...user };
      this.dialogVisible = true;
    },
    saveUser() {
      const method = this.editFormData.userId ? 'post' : 'put';
      const url = this.editFormData.userId ? `/api/users/${this.editFormData.userId}` : '/api/users';
      this.$axios[method](url, this.editFormData).then(() => {
        this.$message({
          type: 'success',
          message: '用户保存成功!'
        });
        this.dialogVisible = false;
        this.fetchUsers();
      });
    },
    deleteUser(user) {
      this.$confirm('确认删除这位用户?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.delete(`/api/users/${user.userId}`).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.fetchUsers();
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    openNewUserDialog() {
      this.editFormData = {}; // 清空表单数据
      this.dialogVisible = true; // 显示对话框
    }
  },
  mounted() {
    this.fetchUsers();
  }
};
</script>

<style scoped>
.eltable {
  margin-top: 30px;
  margin-right: 20px;
  height: auto;
}
</style>
