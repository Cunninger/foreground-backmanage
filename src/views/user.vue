<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-input v-model="searchQuery" placeholder="按用户名搜索" @input="fetchUsers"></el-input>
      </el-col>
      <el-col :span="12">
        <el-button @click="resetSearch">重置</el-button>
        <el-button @click="openNewUserDialog">添加用户</el-button>
        <el-button @click="exportUsers">导出用户</el-button>
        <el-button @click="triggerFileInput">导入用户</el-button>
        <input ref="fileInput" accept=".csv" style="display: none;" type="file" @change="importUsers">
      </el-col>
    </el-row>
    <el-table :data="users" :header-cell-style="{ backgroundColor: 'aliceblue', color: '#666' }" class="eltable" stripe>
      <!--      <el-table-column prop="userId" label="用户ID"></el-table-column>-->
      <el-table-column label="用户名" prop="username"></el-table-column>
      <el-table-column :show-overflow-tooltip="true" label="密码" prop="password"></el-table-column>
      <el-table-column :show-overflow-tooltip="true" label="权限" prop="sysRole.name"></el-table-column>
      <el-table-column :show-overflow-tooltip="true" label="状态" prop="status"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="editUser(scope.row)">编辑</el-button>
          <el-button @click="deleteUser(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination :current-page="currentPage" :page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
                   :total="totalUsers" layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange"
                   @current-change="handleCurrentChange">
    </el-pagination>
    <!-- 用户编辑对话框 -->
    <el-dialog :visible.sync="dialogVisible" title="编辑用户">
      <el-form :model="editFormData">
        <el-form-item label="用户名">
          <el-input v-model="editFormData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="editFormData.password" type="password"></el-input>
        </el-form-item>

        <el-form-item label="权限">
          <el-select v-model="editFormData.role" placeholder="请选择权限">
            <el-option label="admin" value="admin"></el-option>
            <el-option label="user" value="user"></el-option>
            <el-option label="guest" value="guest"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="状态">
          <el-select v-model="editFormData.status" placeholder="启用/禁用">
            <el-option label="启用" value="1"></el-option>
            <el-option label="禁用" value="0"></el-option>
          </el-select>
        </el-form-item>


        <el-form-item>
          <el-button type="primary" @click="saveUser">保存</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import Papa from 'papaparse';

export default {
  data() {
    return {
      users: [],
      searchQuery: '',
      dialogVisible: false,
      editFormData: {},
      currentPage: 1,
      pageSize: 10,
      totalUsers: 0,
    };
  },
  methods: {
    fetchUsers() {
      this.$axios.get('/api/users', {
        params: {
          search: this.searchQuery,
          page: this.currentPage,
          size: this.pageSize,
        }
      }).then(response => {
        this.users = response.data.users;
        this.totalUsers = response.data.total;
      }).catch(error => {
        console.error('Error fetching users:', error);
      });
    },
    resetSearch() {
      this.searchQuery = '';
      this.fetchUsers();
    },
    editUser(user) {
      this.editFormData = {...user};
      this.dialogVisible = true;
    },
    saveUser() {
      const method = this.editFormData.userId ? 'put' : 'post';
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
    },
    handleSizeChange(size) {
      this.pageSize = size;
      this.fetchUsers();
    },
    handleCurrentChange(page) {
      this.currentPage = page;
      this.fetchUsers();
    },

    exportUsers() {
      this.$axios.get('/api/users', {
        params: {
          search: this.searchQuery,
          page: 1,
          size: this.totalUsers
        }
      }).then(response => {
        const users = response.data.users;

        const csv = Papa.unparse(users, {
          header: true,
          // columns: ['userId', 'username', 'password', 'role', 'status']
          columns: ['username', 'password', 'sysRole.name', 'status']

        });

        const blob = new Blob(["\uFEFF" + csv], {type: 'text/csv;charset=utf-8;'});
        const link = document.createElement("a");
        if (link.download !== undefined) {
          const url = URL.createObjectURL(blob);
          link.setAttribute("href", url);
          link.setAttribute("download", "users.csv");
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }).catch(error => {
        console.error('Error exporting users:', error);
        this.$message.error('导出用户数据失败');
      });
    },
    // -- 导入方法开始 --
    triggerFileInput() {
      this.$refs.fileInput.click();
    },

    importUsers(event) {
      const file = event.target.files[0];
      if (!file) {
        return;
      }

      Papa.parse(file, {
        header: true,
        complete: (results) => {
          // 如果results 最后一个为空对象，那么删除
          if (Object.keys(results.data[results.data.length - 1]).length === 0) {
            results.data.pop();
          }
          if (results.data && results.data.length > 0) {
            this.uploadUsers(results.data);
          } else {
            this.$message.error('CSV 文件为空或格式不正确');
          }
        },
        error: (error) => {
          console.error('Error parsing CSV:', error);
          this.$message.error('CSV 解析失败');
        }
      });
    },

    parseCSV(csvData) {
      const lines = csvData.split('\n');
      const users = [];
      for (let i = 1; i < lines.length; i++) {  // 从1开始，跳过标题行
        const line = lines[i].trim();
        if (line) {
          const [username, password, role, status] = line.split(',');
          users.push({username, password, role, status});
        }
      }
      return users;
    },

    uploadUsers(users) {
      this.$axios.post('/api/users/import', users)
          .then(() => {
            this.$message.success(`成功导入 ${users.length - 1} 个用户`);
            this.fetchUsers();  // 刷新用户列表
          })
          .catch(error => {
            console.error('Error importing users:', error);
            this.$message.error('用户导入失败: ' + (error.response?.data?.message || '未知错误'));
          });
    },
    // --- 导入方法结束 ---
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
