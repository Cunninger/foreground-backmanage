<template>
  <el-card class="xxx">
    <div>
    <el-row :gutter="15">
      <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
        <el-col :span="11">
          <el-divider></el-divider>
          <el-form-item label="上传" prop="field105" required>
            <el-upload
              ref="field105"
              :file-list="field105fileList"
              :action="field105Action"
              :before-upload="field105BeforeUpload"
              @on-success="handleSuccess"
            >
              <el-button size="small" type="primary" icon="el-icon-upload">点击上传</el-button>
            </el-upload>
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
  </el-card>
</template>

<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        field105: null,
      },
      rules: {},
      field105Action: '/api/upload/avatar', // 修改为后端接收上传的地址
      field105fileList: [],
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs['elForm'].validate(valid => {
        if (!valid) return
        // TODO 提交表单
      })
    },
    resetForm() {
      this.$refs['elForm'].resetFields()
    },
    field105BeforeUpload(file) {
      let isRightSize = file.size / 1024 / 1024 < 5
      if (!isRightSize) {
        this.$message.error('文件大小超过 5MB')
      }
      return isRightSize
    },
    handleSuccess(response) {
      // 处理上传成功后的逻辑，比如更新文件列表等
      console.log('上传成功', response)
    },
  }
}
</script>

<style>
.el-upload__tip {
  line-height: 1.2;
}
.xxx {
  width: 300px;
  height: 500px;
  margin: 0 auto;
}
</style>
