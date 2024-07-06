<template>
  <!--  写一个复选框，用于选择编程语言-->


  <div class="common-editor">
    <el-select v-model="mode" placeholder="请选择语言" @change="changeMode">
      <el-option
          v-for="item in modes"
          :key="item.value"
          :label="item.label"
          :value="item.value"
      ></el-option>
    </el-select>
    <textarea ref="textarea" v-model="code"></textarea>

    <el-button @click="goToRun">运行</el-button>

    <!-- 使用 el-card 美化结果框 -->
    <el-card class="result-display">
      <h3>执行结果:</h3>
      <pre>{{ result }}</pre>

    </el-card>

  </div>

</template>

<script>
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-dark.css'
import 'codemirror/theme/blackboard.css'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/hint/show-hint.js'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/addon/hint/sql-hint'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/sql/sql'
import 'codemirror/mode/php/php'
import 'codemirror/mode/clike/clike'
import 'codemirror/mode/python/python'
import 'codemirror/mode/shell/shell'
import 'codemirror/mode/powershell/powershell'
import axios from "axios";

const CodeMirror = require('codemirror/lib/codemirror')

export default {
  name: 'CommonEditor',
  props: {
    value: {
      type: String,
      default: ''
    },
    language: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      CommonEditor: false,
      code: '',
      type: '',// 代码类型  java python C++
      coder: null,
      result: '', // 用于存储执行结果
      mode: 'java',
      theme: 'default',
      modes: [
        {value: 'javascript', label: 'Javascript'},
        {value: 'x-java', label: 'Java'},
        {value: 'x-c++src', label: 'C++'},
        {value: 'x-c', label: 'C'},
        {value: 'x-python', label: 'Python'},
        {value: 'x-sql', label: 'SQL'},
        {value: 'x-shell', label: 'Shell'},
        {value: 'x-powershell', label: 'PowerShell'},
        {value: 'x-php', label: 'PHP'}
      ],
      defaultCodes: {
        'javascript': '// JavaScript 示例代码\nconsole.log("Hello, world!");',
        'x-java': '// Java 示例代码\npublic class Code {\n  public static void main(String[] args) {\n    System.out.println("Hello, world!");\n  }\n}',
        'x-c++src': '// C++ 示例代码\n#include <iostream>\nint main() {\n  std::cout << "Hello, world!" << std::endl;\n  return 0;\n}',
        'x-c': '// C 示例代码\n#include <stdio.h>\nint main() {\n  printf("Hello, world!\\n");\n  return 0;\n}',
        'x-python': '# Python 示例代码\nprint("Hello, world!")',
        'x-sql': '-- SQL 示例代码\nSELECT \'Hello, world!\';',
        'x-shell': '# Shell 示例代码\necho "Hello, world!"',
        'x-powershell': '# PowerShell 示例代码\nWrite-Output "Hello, world!"',
        'x-php': '<?php\n// PHP 示例代码\necho "Hello, world!";\n?>'
      },
    }
  },
  watch: {
    language: {
      handler(language) {
        this.getCoder().then(() => {
          // 尝试从父容器获取语法类型
          if (language) {
            // 获取具体的语法类型对象
            const modeObj = this.getLanguage(language)
            // 判断父容器传入的语法是否被支持
            if (modeObj) {
              this.mode = modeObj.label
              this.coder.setOption('mode', `text/${modeObj.value}`)
            }
          }
        })
      },
      immediate: true
    }
  },
  computed: {
    coderOptions() {
      return {
        line: true,
        mode: 'application/json', // json数据高亮
        theme: 'blackboard', //设置主题 记得引入对应主题才有显示   import 'codemirror/theme/blackboard.css'
        tabSize: 1,
        lineNumbers: true, // 显示行号
        cursorHeight: 0.8, //光标高度，默认是1
        autoCloseBrackets: true,
        matchBrackets: true, // 括号匹配
        lineWrapping: 'wrap', // 文字过长时，是换行(wrap)还是滚动(scroll),默认是滚动
        showCursorWhenSelecting: true, // 文本选中时显示光标
        smartIndent: true, // 智能缩进
        completeSingle: false // 当匹配只有一项的时候是否自动补全
      }
    }
  },
  mounted() {
    // 初始化
    this.initialize();
    this.setCodeContent(this.defaultCodes[this.mode]);
  },
  methods: {
    // 初始化
    initialize() {
      // 初始化编辑器实例，传入需要被实例化的文本域对象和默认配置
      this.coder = CodeMirror.fromTextArea(
          this.$refs.textarea,
          this.coderOptions
      )
      this.coder.on('inputRead', () => {
        this.coder.showHint()
      })
      // 编辑器赋值
      if (this.value || this.code) {
        this.setCodeContent(this.value || this.code)
      } else {
        this.coder.setValue('')
      }
      // 支持双向绑定
      this.coder.on('change', (coder) => {
        this.code = coder.getValue()
        if (this.$emit) {
          this.$emit('input', this.code)
        }
      })
    },
    setCodeContent(val) {
      setTimeout(() => {
        if (!val) {
          this.coder.setValue('')
        } else {
          this.coder.setValue(val)
        }
      }, 300)
    },
    getCoder() {
      const that = this
      return new Promise((resolve) => {
        ;(function get() {
          if (that.coder) {
            resolve(that.coder)
          } else {
            setTimeout(get, 10)
          }
        })()
      })
    },
    getLanguage(language) {
      // 在支持的语法类型列表中寻找传入的语法类型
      return this.modes.find((mode) => {
        // 所有的值都忽略大小写，方便比较
        const currentLanguage = language.toLowerCase()
        const currentLabel = mode.label.toLowerCase()
        const currentValue = mode.value.toLowerCase()

        // 由于真实值可能不规范，例如 java 的真实值是 x-java ，所以讲 value 和 label 同时和传入语法进行比较
        return (
            currentLabel === currentLanguage || currentValue === currentLanguage
        )
      })
    },
    changeMode(val) {
      // 修改编辑器的语法配置
      this.coder.setOption('mode', `text/${val}`)

      // 获取修改后的语法
      const label = this.getLanguage(val).label.toLowerCase()
      // 允许父容器通过以下函数监听当前的语法值
      this.$emit('language-change', label);
      // 更新编辑器内容为所选语言的默认代码模板
      this.setCodeContent(this.defaultCodes[val]);
    },
    goToRun() {
      // Retrieve the current content from the editor
      const codeContent = this.coder.getValue();

      // URL of the backend endpoint
      const endpoint = '/api/codeeditor';

      // Send a POST request with the code content
      axios.post(endpoint, {
        code: codeContent,
        type: this.mode, // 加上代码类型
        stdin: '' // 如果需要，可以添加标准输入内容
      })
          .then(response => {
            // Handle the response from the server
            console.log('Server response:', response.data);

            // 假设后端返回的数据结构如下：
            // {
            //   "code": 0,
            //   "data": {
            //     "output": "hello ^!\r\n",
            //     "code": 0,
            //     "time": 0,
            //     "message": ""
            //   }
            // }

            // 处理响应数据
            if (response.data.code === 0) {
              const result = response.data.data;
              console.log('Execution Output:', result.output);
              console.log('Execution Time:', result.time);
              console.log('Execution Message:', result.message);

              // 在前端显示结果
              this.displayResult(result);
            } else {
              console.error('Error in execution:', response.data.message);
            }
          })
          .catch(error => {
            // Handle errors if the request fails
            console.error('Error sending code:', error);
          });
    },

    displayResult(result) {
      // 处理 result.output 中的 ANSI 转义序列
      const cleanOutput = result.output.replace(/\u001b\[[0-9;]*m/g, '');

      // 构建要显示的结果字符串
      this.result = `Output: \n${cleanOutput}\nTime: ${result.time}\nMessage: ${result.message}`;
    }
  }
}
</script>
<style lang="less">
.common-editor {
  width: 70%;
  height: 70%;

  .CodeMirror {
    // color: #ccc;
    direction: ltr;
    line-height: 20px;
    width: 100%;
    height: 95%;
    // background-color: #000;
  }

  .CodeMirror-hints {
    z-index: 9999 !important;
  }

  .custom-class .CodeMirror {
    width: 100%;
  }
}

//.CodeMirror-hints {
//  z-index: 1000;
//}

.CodeMirror-hints {
  z-index: 1000;
  background-color: #f5f5f5; /* 浅灰色背景 */
  color: #333; /* 更深的文本颜色以提高可读性 */
  font-size: 14px; /* 稍大的字体大小 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* 微妙的阴影增加深度 */
  border-radius: 4px; /* 圆角 */
  padding: 5px 10px; /* 提示框内的间距 */
}

.result-display {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ebeef5;
  background-color: #f9f9f9;
}

.result-display h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 16px;
  color: #e5baba;
}

.result-display pre {
  white-space: pre-wrap; /* 保持换行 */
  word-wrap: break-word; /* 防止长单词溢出 */
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
}
/* CSS样式，用于美化代码输出 */
.code-output {
  font-family: 'Courier New', Courier, monospace; /* 使用等宽字体 */
  font-size: 14px; /* 设置合适的字体大小 */
  background-color: #f7f7f7; /* 设定背景色 */
  padding: 10px; /* 添加内边距 */
  border: 1px solid #ccc; /* 添加边框 */
  white-space: pre-wrap; /* 保留换行符和空格 */
}
</style>