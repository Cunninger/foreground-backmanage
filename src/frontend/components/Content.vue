<template>
  <div>
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
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Content',
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
    };
  },
};
</script>

<style scoped>
.content {
  margin-top: 40px;
  padding: 20px;
  margin-left: 200px;
}
.post-list {
  margin-top: 30px;

}
.box-card {
  margin-bottom: 20px;
  margin-left: 10px;
}
</style>
