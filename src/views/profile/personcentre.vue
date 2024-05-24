<template>
    <div>
      <el-row :gutter="15">
        <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
          <el-col :span="14">
            <el-row>
            </el-row>
          </el-col>
          <el-col :span="14">
            <el-row>
            </el-row>
          </el-col>
          <el-col :span="14">
            <el-row>
            </el-row>
          </el-col>
          <el-col :span="14">
            <el-row>
            </el-row>
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
  </template>
  <script>
  export default {
    components: {},
    props: [],
    data() {
      return {
        formData: {},
        rules: {},
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
  