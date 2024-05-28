<template>
  <el-container>

    <el-header>
      <Header />
    </el-header>
    <div v-if="$route.name !== 'Discuss'">
      <el-container>

        <el-main>
          <Content />
        </el-main>
        <el-aside width="350px">
          <Sidebar />
        </el-aside>

        

      </el-container>
      

      


    </div>
   


  </el-container>
  
</template>

<script>
import Content from '../components/Content.vue';
import Sidebar from '../components/Sidebar.vue';
import Header from '../components/Header.vue';
import Discuss from '@/frontend/views/header/discuss.vue';
export default {
  components: {
    Header,
    Sidebar,
    Content,
    Discuss
  },
};
</script>