<!-- src/components/Chat.vue -->
<template>
  <div>
    <el-input v-model="message" placeholder="Type a message" @keyup.enter="sendMessage"></el-input>
    <el-button type="primary" @click="sendMessage">Send</el-button>
    <div class="chat-window">
      <div v-for="(msg, index) in messages" :key="index" class="message">
        <span>{{ msg }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';


export default {
  data() {
    return {
      message: '',
      messages: [],
      stompClient: null,
    };
  },
  created() {
    this.connect();
  },
  methods: {
    connect() {
      const socket = new SockJS('http://localhost:8080/chat');
      this.stompClient = Stomp.over(socket);
      this.stompClient.connect({}, (frame) => {
        console.log('Connected: ' + frame);
        this.stompClient.subscribe('/topic/messages', (msg) => {
          this.messages.push(JSON.parse(msg.body).content);
        });
      });
    },
    sendMessage() {
      if (this.message.trim() !== '') {
        this.stompClient.send('/app/chat', {}, JSON.stringify({ content: this.message }));
        this.message = '';
      }
    },
  },
};
</script>

<style>
.chat-window {
  border: 1px solid #ccc;
  padding: 10px;
  height: 300px;
  overflow-y: scroll;
}
.message {
  margin: 5px 0;
}
</style>
