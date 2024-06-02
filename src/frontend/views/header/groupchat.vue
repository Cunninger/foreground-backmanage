
<template>

  <div style="padding: 10px; margin-bottom: 50px">
    <el-button type="info" @click="$router.push('/singlechat')">前往私聊</el-button>
    {{ "当前用户:" + user.username }}
    <el-row>
      <el-col :span="4">
        <el-card style="width: 300px; height: 300px; color: #333; margin-top: 10px;">
          <div style="padding-bottom: 10px; border-bottom: 1px solid #ccc">房间</div>
          <div style="padding: 10px 0" v-for="roomName in rooms" :key="roomName">
            <span>{{ roomName }}</span>
            <i class="el-icon-s-home" style="margin-left: 10px; font-size: 16px; cursor: pointer"
              @click="selectRoom(roomName)"></i>
            <span style="font-size: 12px;color: limegreen; margin-left: 5px" v-if="room === roomName">chatting...</span>
          </div>
        </el-card>
      </el-col>

      <el-col :span="20">
        <div style="width: 800px; margin: 0 auto; background-color: white;
                    border-radius: 5px; box-shadow: 0 0 10px #ccc">
          <div style="text-align: center; line-height: 50px;">
            Web聊天室（{{ room || chatUser }})
          </div>
          <div style="height: 350px; overflow:auto; border-top: 1px solid #ccc" v-html="content"></div>
          <div style="height: 200px">
            <textarea v-model="text" style="height: 160px; width: 95%; padding: 20px; border: none; border-top: 1px solid #ccc;
             border-bottom: 1px solid #ccc; outline: none"></textarea>
            <div style="text-align: right; padding-right: 10px">
              <el-button type="primary" size="mini" @click="send">发送</el-button>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
let socket;

export default {
  name: "Im",
  data() {
    return {
      roomMessages: {}, // 存储每个房间的消息数组
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      user: {},
      isCollapse: false,
      users: [],
      rooms: ['room1', 'room2'],  // 增加房间列表
      chatUser: '',
      room: '',
      text: "",
      messages: [],
      content: ''
    }
  },
  created() {
    this.user = sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : {};
     this.loadMessages();  // 加载消息从存储
  },
  methods: {
      saveRoomMessages() {
    localStorage.setItem('roomMessages', JSON.stringify(this.roomMessages));
  },
    send() {
      if (!this.chatUser && !this.room) {
        this.$message({ type: 'warning', message: "请选择聊天对象或房间" })
        return;
      }
      if (!this.text) {
        this.$message({ type: 'warning', message: "请输入内容" })
      } else {
        if (typeof (WebSocket) == "undefined") {
          console.log("您的浏览器不支持WebSocket");
        } else {
          console.log("您的浏览器支持WebSocket");
          let message = { from: this.user.username, text: this.text };
          if (this.chatUser) {
            message.to = this.chatUser;
          } else if (this.room) {
            message.room = this.room;
          }
          socket.send(JSON.stringify(message));
          this.messages.push({ user: this.user.username, text: this.text });
          this.saveMessages();  // 保存消息到存储
          this.createContent(null, this.user.username, this.text);
          this.text = '';
        }
      }
    },
    createContent(remoteUser, nowUser, text) {
      let html;
      if (nowUser) {
        html = "<div class=\"el-row\" style=\"padding: 5px 0\">\n" +
          "  <div class=\"el-col el-col-22\" style=\"text-align: right; padding-right: 10px\">\n" +
          "    <div class=\"tip left\">" + text + "</div>\n" +
          "  </div>\n" +
          "  <div class=\"el-col el-col-2\">\n" +
          "  <span class=\"el-avatar el-avatar--circle\" style=\"height: 40px; width: 40px; line-height: 40px;\">\n" +
          "    <img src=\"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png\" style=\"object-fit: cover;\">\n" +
          "  </span>\n" +
          "  </div>\n" +
          "</div>";
      } else if (remoteUser) {
        html = "<div class=\"el-row\" style=\"padding: 5px 0\">\n" +
          "  <div class=\"el-col el-col-2\" style=\"text-align: right\">\n" +
          "  <span class=\"el-avatar el-avatar--circle\" style=\"height: 40px; width: 40px; line-height: 40px;\">\n" +
          "    <img src=\"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png\" style=\"object-fit: cover;\">\n" +
          "  </span>\n" +
          "  </div>\n" +
          "  <div class=\"el-col el-col-22\" style=\"text-align: left; padding-left: 10px\">\n" +
          "    <div class=\"tip right\">" + text + "</div>\n" +
          "  </div>\n" +
          "</div>";
      }
      console.log(html);
      this.content += html;
    },
    init(room) {
      let username = this.user.username;
      let _this = this;
      if (typeof (WebSocket) == "undefined") {
        console.log("您的浏览器不支持WebSocket");
      } else {
        console.log("您的浏览器支持WebSocket");
        let socketUrl = "ws://localhost:7788/imserver/" + username + "/" + (room || "default");
        if (socket != null) {
          socket.close();
          socket = null;
        }
        socket = new WebSocket(socketUrl);
        socket.onopen = function () {
          console.log("websocket已打开");
        };
        socket.onmessage = function (msg) {
          console.log("收到数据====" + msg.data);
          let data = JSON.parse(msg.data);
          if (data.users) {
            _this.users = data.users.filter(user => user.username !== username);
          } else {
            if ((data.from === _this.chatUser && data.to === username) || data.room === _this.room) {
              _this.messages.push(data);
              _this.saveMessages();  // 保存消息到存储
              _this.createContent(data.from, null, data.text);
            }
          }
        };
        socket.onclose = function () {
          console.log("websocket已关闭");
        };
        socket.onerror = function () {
          console.log("websocket发生了错误");
        }
      }
    },
    
    selectRoom(roomName) {
      this.room = roomName;
      this.chatUser = '';
      this.init(roomName);  // 选择房间后重新初始化WebSocket连接
    },
    selectUser(username) {
      this.chatUser = username;
      this.room = 'private';
      this.init('private');  // 选择用户后重新初始化WebSocket连接
    },
    saveMessages() {
    localStorage.setItem('messages', JSON.stringify(this.messages));
  },
  loadMessages() {
    const messages = localStorage.getItem('messages');
    if (messages) {
      this.messages = JSON.parse(messages);
    }
  }
}
}
</script>

<style>
.tip {
  color: white;
  text-align: center;
  border-radius: 10px;
  font-family: sans-serif;
  padding: 10px;
  width: auto;
  display: inline-block !important;
  display: inline;
}

.right {
  background-color: deepskyblue;
}

.left {
  background-color: forestgreen;
}
</style>
