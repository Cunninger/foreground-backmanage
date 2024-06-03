<template>
  <div>
    <el-row :gutter="20" v-if="images.length">
      <el-col :span="6" v-for="image in images" :key="image">
        <el-card :body-style="{ padding: '0px' }" class="image-card">
          <!-- Use Base64 string as image URL -->
          <img :src="image" class="image" @click="previewImage(image)" />
        </el-card>
      </el-col>
    </el-row>
    <el-empty description="images is loading" v-else></el-empty>
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
      // 先尝试从 localStorage 中获取数据
      const cachedImages = localStorage.getItem('images');
      if (cachedImages) {
        this.images = JSON.parse(cachedImages);
      } else {
        // 如果 localStorage 中没有数据，再发送网络请求获取
        fetch('/api/images')
          .then(response => response.json())
          .then(data => {
            this.images = data;
            // 将数据保存到 localStorage 中
            localStorage.setItem('images', JSON.stringify(data));
          })
          .catch(error => {
            // console.error('Error fetching images:', error);
            // this.$message.error('Failed to load images');
          });
      }
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
