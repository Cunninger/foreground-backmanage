<template>
  <div>
  <div class="sidebar">
    <el-card class="box-card" v-for="post in posts" :key="post.id">
      <div slot="header" class="clearfix">
        <span>{{ post.title }}</span>
      </div>
      <div class="text item">
        <p>{{ post.content }}</p>
        <el-button type="text">阅读全文</el-button>
      </div>
    </el-card>
  </div>
  <router-view name="Sidebar"></router-view>
</div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      posts: [
        { id: 1, title: '私奔到云端', content: '私奔到云端，可能性是无限的，云端的美好不可胜数...' },
        { id: 2, title: '网站中图片背景固定位置', content: '网站中图片背景固定位置，如何用css实现...' },
        // 更多内容...
      ],
    };
  },
};
</script>

<style scoped>
.sidebar {
  padding: 20px;
}
.box-card {
  margin-top: 60px;
  margin-bottom: 20px;
  height: 200px;
}
</style>
