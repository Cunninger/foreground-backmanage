<template>
    <div>
      <el-row :gutter="20" v-if="images.length">
        <el-col :span="6" v-for="image in images" :key="image">
          <el-card :body-style="{ padding: '0px' }" class="image-card">
            <img :src="image" class="image" @click="previewImage(image)" />
          </el-card>
        </el-col>
      </el-row>
      <el-empty description="No images found" v-else></el-empty>
      <el-dialog :visible.sync="dialogVisible" width="50%">
        <img :src="currentImage" class="preview-image" />
      </el-dialog>
    </div>
  </template>
  
  <script>
  import { Dialog, Empty } from 'element-ui';
  
  export default {
    data() {
      return {
        images: [],
        dialogVisible: false,
        currentImage: '',
      };
    },
    methods: {
      fetchImages() {
        fetch('/api/images')
          .then(response => response.json())
          .then(data => {
            this.images = data;
          })
          .catch(error => {
            console.error('Error fetching images:', error);
            this.$message.error('Failed to load images');
          });
      },
      previewImage(image) {
        this.currentImage = image;
        this.dialogVisible = true;
      },
    },
    mounted() {
      this.fetchImages();
    },
    components: {
      [Dialog.name]: Dialog,
      [Empty.name]: Empty,
    },
  };
  </script>
  
  <style scoped>
  .image-card {
    cursor: pointer;
  }
  .image {
    width: 100%;
    display: block;
  }
  .preview-image {
    width: 100%;
  }
  </style>
