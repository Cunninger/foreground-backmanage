<template>
  <div class="personalinfo">
    <div class="card-container">
      <el-card class="personalcard">
        <div slot="header" class="clearfix">
          <span>个人信息</span>
        </div>
        <div>
          <el-upload
              :before-upload="beforeAvatarUpload"
              :on-success="handleAvatarSuccess"
              :show-file-list="false"
              action="/api/upload-avatar"
              class="avatar-uploader">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <div>
          <div slot="content" class="clearfix user-info">
            <span class="el-icon-user">用户名称</span>
            <span>{{ user?.username }}</span>
          </div>
          <div class="divider"></div> <!-- 分隔线 -->
          <div slot="content" class="clearfix user-info">
            <span class="el-icon-aim">用户职位</span>
            <span> {{ user.sysRole.description }}</span>
          </div>
          <div class="divider"></div> <!-- 分隔线 -->

          <div slot="content" class="clearfix user-info">
            <span class="el-icon-time">创建时间</span>
            <span> {{ user.createTime.slice(0, 10) }}</span></div>
          <div class="divider"></div> <!-- 分隔线 -->
        </div>
      </el-card>

      <el-card class="basecard">
        <div slot="header" class="clearfix">
          <span>基本资料</span>
        </div>
        <el-tabs v-model="activeTab">
          <el-tab-pane label="基本资料" name="userinfo">
            <div>
              <el-row :gutter="15">
                <el-form ref="" :model="formData" :rules="rules" label-width="100px" size="medium">
                  <el-col :span="24">
                    <el-form-item label="用户名称" prop="mobile">
                      <el-input v-model="formData.mobile" :maxlength="11" :style="{width: '100%'}" clearable
                                placeholder="" prefix-icon='el-icon-mobile' show-word-limit>

                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="11">
                    <el-form-item label="性别" prop="field108">
                      <el-radio-group v-model="formData.field108" size="medium">
                        <el-radio v-for="(item, index) in field108Options" :key="index" :disabled="item.disabled"
                                  :label="item.value" border>{{ item.label }}
                        </el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="24">
                    <el-form-item size="large">
                      <el-button type="primary" @click="submitForm">提交</el-button>
                      <el-button @click="resetForm">重置</el-button>
                    </el-form-item>
                  </el-col>
                </el-form>
              </el-row>
            </div>

          </el-tab-pane>
          <el-tab-pane label="修改密码" name="resetPwd">

          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>


import {mapState} from "vuex";

export default {
  name: 'personalinfo',
  data() {
    return {
      formData: {
        mobile: user.name,
        field108: undefined,
      },
      rules: {
        mobile: [{
          required: true,
          message: '请输入用户名称',
          trigger: 'blur'
        }, {
          pattern: /^1(3|4|5|7|8|9)\d{9}$/,
          message: '手机号格式错误',
          trigger: 'blur'
        }],
        field108: [{
          required: true,
          message: '性别不能为空',
          trigger: 'change'
        }],
      },
      field108Options: [{
        "label": "男",
        "value": 1
      }, {
        "label": "女",
        "value": 2
      }],
      activeTab: 'userinfo',
    };
  },
  computed: {
    ...mapState([
      'user'
    ]),
  },
}
// 组件逻辑
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: space-between;
}

.personalcard {
  flex: 0.3;
  height: 500px;
  margin: 0 10px;
}

.basecard {
  flex: 0.7;
  height: 400px;
  margin: 0 10px;
}

.divider {
  border-bottom: 1px solid #ebebeb; /* 设置边框颜色和宽度 */
  margin: 10px 0; /* 根据需要调整上下边距 */
}

.user-info {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #10e9f1;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

</style>