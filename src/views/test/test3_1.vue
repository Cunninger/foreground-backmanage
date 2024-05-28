<template>
  <el-card class="compute-card">
    <el-header style="text-align: center">
      <div>计算相对路径-</div>
    </el-header>
    <el-input v-model="input1" class="input" placeholder="请输入路径A" style="display: flex; align-items: center;">
      <template slot="prepend">
        <!-- <div style="text-align: left;">路径A</div> -->
      </template>
    </el-input>

    <el-input v-model="input2" class="input" placeholder="请输入路径B" style="display: flex; align-items: center;">
      <template slot="prepend">
        <!-- <div style="text-align: left;">路径B</div> -->
      </template>
    </el-input>
    <el-divider></el-divider>
    <el-button style="display: block; margin: 0 auto" type="primary" @click="submit">提交</el-button>
    <el-input class="input result-input" :value="result" readonly style="display: flex; align-items: center; margin-top: 10px;" placeholder="结果将显示在这里"></el-input>
    <!-- <el-input class="input result-input" :value="otherResult" readonly style="display: flex; align-items: center; margin-top: 10px;" placeholder="结果将显示在这里"></el-input> -->
  </el-card>
</template>

<script>
export default {
  name: 'test3_1',
  data() {
    return {
      input1: '',
      input2: '',
      result: '',
      otherResult: ''
    }
  },
  methods: {
    submit() {
      let url = '/api/computerelativepath';
      let data = { path: this.input1, otherPath: this.input2 };
      this.$axios.post(url, data)
        .then(res => {
          console.log(res);
          this.result = res.data.relativePath; // 假设返回数据在res.data.result中
          this.otherResult = res.data.otherRelativePath;
          console.log(this.result)
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
}
</script>

<style scoped>
.compute-card {
  height: 500px;
  width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.input {
  width: auto;
  margin: 20px auto;
}

.result-input {
  width: 800px;
  margin: 20px auto;
}
</style>
