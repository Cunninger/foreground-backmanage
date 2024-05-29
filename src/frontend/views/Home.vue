<template>
  <el-container style="height: 100vh">
    <el-main style="padding: 0">
      <el-row :gutter="20">
        <!-- Content 部分 -->
        <el-col :span="18">
          <div class="content">
            <el-row :gutter="-10">
              <el-col :span="24">
                <el-carousel indicator-position="outside">
                  <el-carousel-item v-for="item in items" :key="item.id">
                    <img :src="item.src" :alt="item.alt" />
                  </el-carousel-item>
                </el-carousel>
              </el-col>
            </el-row>
            <el-row :gutter="20" class="post-list">
              <el-col :span="24" v-for="post in posts" :key="post.id">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span>{{ post.title }}</span>
                  </div>
                  <div class="text item">
                    <p>{{ post.content }}</p>
                    <el-button type="text">阅读全文</el-button>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <!-- Sidebar 部分 -->
        <el-col :span="6">
          <div class="sidebar">
            <el-card class="box-card" v-for="sidePost in sidePosts" :key="sidePost.id">
              <div slot="header" class="clearfix">
                <span>{{ sidePost.title }}</span>
              </div>
              <div class="text item">
                <p>{{ sidePost.content }}</p>
                <el-button type="text">阅读全文</el-button>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  name: 'Home',
  components: {
    Header,

  },
  data() {
    return {
      items: [
        { id: 1, src: require('@/assets/imgs/aabc.jpg'), alt: 'aabc' },
        { id: 2, src: require('@/assets/imgs/google.png'), alt: 'Image 2' },
        { id: 3, src: require('@/assets/imgs/openai.png'), alt: 'Image 3' },
      ],
      posts: [
        { id: 1, title: '文章标题1', content: '文章内容1...' },
        { id: 2, title: '文章标题2', content: '文章内容2...' },
        // 更多内容...
      ],
      sidePosts: [
        { id: 1, title: '私奔到云端', content: '私奔到云端，可能性是无限的，云端的美好不可胜数...' },
        { id: 2, title: '网站中图片背景固定位置', content: '网站中图片背景固定位置，如何用css实现...' },
        // 更多内容...
      ],
    };
  },
};
</script>

<style scoped>
/* Content 部分的样式 */
.content {
  margin-top: 40px;
  padding: 20px;
}
.post-list {
  margin-top: 30px;
}
.box-card {
  margin-bottom: 20px;
  margin-left: 10px;
}
/* Sidebar 部分的样式 */
.sidebar {
  padding: 20px;
}
.box-card {
  margin-top: 20px;
  margin-bottom: 20px;
  height: 200px;
}
</style>
