<template>
    <div class="image-fetcher">
        <el-input v-model="content" placeholder="请输入内容" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" @click="fetchImage">获取图片</el-button>
        </el-input>
        <div v-if="loading" style="color: bisque;" class="loading">
            <el-spinner></el-spinner>
        </div>
        
        <div v-if="imageData" class="image-display">
            <el-card class="image-card" shadow="never">
                <el-image :src="'data:image/png;base64,' + imageData" fit="cover"></el-image>
            </el-card>
     
            <el-button type="primary" @click="showImageFullScreen" class="view-button">查看大图</el-button>
            <el-dialog title="图片预览" :visible.sync="dialogVisible" width="80%">
                <el-image :src="'data:image/png;base64,' + imageData" fit="cover"></el-image>
            </el-dialog>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImageFetcher',
    data() {
        return {
            content: '',
            imageData: null,
            loading: false,
            dialogVisible: false
        };
    },
    methods: {
        async fetchImage() {
            this.loading = true;
            const response = await this.$axios.post('/api/draw', {
                content: this.content
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            this.imageData = response.data;
            this.loading = false;
        },
        showImageFullScreen() {
            this.dialogVisible = true;
        }
    }
}
</script>

<style scoped>
.input-with-select {
    width: 700px;
}
.image-card {
    width: 400px;
    height: 300px;
    margin: 0 auto;
}
.loading, .image-display {
    margin-top: 20px;
    text-align: center;
    color: #2ff610;
}

.view-button {
    margin-top: 20px;
}
</style>

