<template>
    <div class="background">
        <div>
            <div class="container" v-for="(message, index) in messages" :key="index">
                <p :class="{ 'user-message': message.role === 'user', 'bot-message': message.role === 'bot' }"
                    v-html="message.content"></p>
            </div>
            <!-- 显示当前正在流式输出的消息 -->
            <p v-if="currentMessage" class="bot-message" v-html="currentMessage"></p>

            <el-input v-model="content" placeholder="输入内容并按回车发送请求"
                style="position:fixed; bottom: 0; left: 50%; transform: translateX(-50%); width: 250px;">
                <template v-slot:append>
                    <el-button @click="sendRequest()" type="primary">发送</el-button>
                </template>
            </el-input>

            <el-button @click="dialogVisible = true" type="primary"
                style="position:fixed; bottom: 0cm; left: 65%; width: 65px;">设置</el-button>
            <el-button @click="messages = []" type="danger"
                style="position:fixed; bottom: 0cm; left: 35%; width: 60px;">清除</el-button>
            <div></div>


        </div>
        <!-- 弹窗 -->
        <el-dialog title="模型设置" :visible.sync="dialogVisible" width="30%">
            <div>选择模型</div>
            <el-select v-model="model" placeholder="选择模型">
                <el-option label="llama2-70b-4096" value="llama2-70b-4096"></el-option>
                <el-option label="llama3-8b-8192" value="llama3-8b-8192"></el-option>
                <el-option label="mixtral-8x7b-32768" value="mixtral-8x7b-32768"></el-option>
                <el-option label="gemma-7b-it" value="gemma-7b-it"></el-option>
            </el-select>
            <br>
            <br>
            <div>输入ghu</div>
            <el-input v-model="accessToken" placeholder="输入ghu"></el-input>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>


    </div>


</template>

<script>
// 使用命名导入而不是默认导入 
import { marked } from 'marked';
import axios from 'axios'; // 确保 axios 已正确导入

export default {
    data() {
        return {
            dialogVisible: false,
            content: '',
            messages: [],
            model: 'mixtral-8x7b-32768',
            accessToken: 'M3UqqyTBhMy85WwoZ_IMtz0XQsfoYLX_VJi0uZN5WMID',
            currentMessage: '', // 当前正在流式输出的消息
            typeSpeed: 30, // 每个字符的打字速度（毫秒）
        }
    },

    methods: {
        async sendRequest() {
            try {
                const response = await axios.post('/chatapi/chatollama', {
                    model: this.model,
                    messages: [
                        {
                            role: 'user',
                            content: this.content
                        }
                    ],
                    max_tokens: 4096,
                    stream: false,
                    accessToken: this.accessToken,
                });
                const message = { role: 'user', content: this.content };
                this.messages.push(message);
                await axios.post('/savechatapi/messages/save', message);
                this.streamMessage(marked(response.data.choices[0].message.content));
                const botMessage = { role: 'assistant', content: response.data.choices[0].message.content };
                this.messages.push(botMessage);
                await axios.post('/savechatapi/messages/save', botMessage);
                this.content = '';
            } catch (error) {
                console.error('发送请求时出错:', error);
            }
        },
        saveMessage() {
            localStorage.setItem('messages', JSON.stringify(this.messages));
        },
        loadMessages() {
            const messages = localStorage.getItem('messages');
            if (messages) {
                this.messages = JSON.parse(messages);
            }
        },
        streamMessage(message) {
            let index = 0;
            this.currentMessage = ''; // 确保从空字符串开始流式输出
            const interval = setInterval(() => {
                if (index < message.length) {
                    this.currentMessage += message[index];
                    index++;
                } else {
                    clearInterval(interval);
                    this.messages.push({ role: 'bot', content: this.currentMessage }); // 将完整消息添加到消息列表
                    this.currentMessage = ''; // 重置当前消息，为下一次输出做准备
                }
            }, this.typeSpeed);
        },

    },
    mounted() {
        this.loadMessages();
    }
}
</script>

<style scoped>
.background {
    background-image: url('@/assets/imgs/aabc.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: repeat-y;
    height: auto;
    min-height: 100vh;
    width: 100vw;
}

.container {
    display: flex;
    flex-direction: column;
}

.user-message {
    width: 500px;
    border: 2px solid rgb(229, 202, 28);
    padding: 10px;
    margin-bottom: 5px;
    background-color: #f4f4f4;
    border-radius: 10px;
    align-self: flex-end;
}

.bot-message {
    width: 700px;
    border: 2px solid green;
    padding: 10px;
    margin-bottom: 5px;
    background-color: #e0e0e0;
    border-radius: 10px;
}

.message {
    width: 500px;
    word-wrap: break-word;
    margin: 5px 0;
    padding: 10px;
    background-color: #f4f4f4;
    border-radius: 10px;
}
</style>