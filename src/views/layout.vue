<template>

  <el-container>
    <!-- header部分 -->
    <el-header>
      <navtop :is-collapsed="isCollapsed" @toggle-sidebar="toggleSidebar"></navtop>
    </el-header>

    <el-container>
      <!-- aside部分 -->
      <leftNav :is-collapsed="isCollapsed"></leftNav>
      <el-main>
        <!-- main部分 -->
        <router-view></router-view>
      </el-main>

    </el-container>

  </el-container>

</template>


<script>
import navtop from "@/components/nav-top.vue";
import leftNav from "@/components/nav.vue";
export default {
  name: "layout",
  components: {
    navtop,
    leftNav,
  },
  data() {
    return {
      isCollapsed: false
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;

    }
  }
};
</script>
<style scoped>
.el-main {
  /* 主面板颜色 */
  background-color: #f5f7f9;
}

.el-header,
.el-footer {
  /* 顶部颜色 */
  background-color: white;
  box-sizing: border-box;
  border-bottom: 1px solid #f5f1f1;
}

.el-container {
  height: 100%;
}
</style>