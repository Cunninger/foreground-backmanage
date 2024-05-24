<template>
    <div>
      <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
        <el-form-item label="编辑器" prop="field101">
          <tinymce v-model="formData.field101" placeholder="请输入编辑器编辑器" :height="308"></tinymce>
        </el-form-item>
        <el-form-item size="large">
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  <script>
  export default {
    components: {},
    props: [],
    data() {
      return {
        formData: {
          field101: null,
        },
        rules: {
          field101: [{
            required: true,
            message: '请输入编辑器编辑器',
            trigger: 'blur'
          }],
        },
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
    }
  }
  
  </script>
  <style>
  </style>
  