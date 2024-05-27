
<template>
  <div>
    <div>
      <el-button @click="openContent" type="primary">查看元素</el-button>
    </div>
    <div id='quillEditorQiniu'>
      <!-- 基于elementUi的上传组件 el-upload begin-->
      <el-upload
          class="avatar-uploader"
          :action="uploadImgUrl"
          :accept="'image/*,video/*'"
          :show-file-list="false"
          :on-success="uploadEditorSuccess"
          :on-error="uploadEditorError"
          :before-upload="beforeEditorUpload"
        >
      </el-upload>
      <!-- 基于elementUi的上传组件 el-upload end-->
      <quill-editor  class="editor"  v-model="content" ref="customQuillEditor" :options="editorOption" >
      </quill-editor>
    </div>

  </div>
</template>

<script>
import * as Quill from 'quill'
// 这里引入修改过的video模块并注册
import Video from './video'
Quill.register(Video, true)

// 富文本框配置

//获取登录token，引入文件，如果只是简单测试，没有上传文件是否登录的限制的话，
//这个token可以不用获取，文件可以不引入，把上面对应的上传文件携带请求头  :headers="headers" 这个代码删掉即可

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{'header': 1}, {'header': 2}],               // custom button values
  [{'list': 'ordered'}, {'list': 'bullet'}],
  [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
  [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
  [{'direction': 'rtl'}],                         // text direction

  [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
  [{'header': [1, 2, 3, 4, 5, 6, false]}],

  [{'color': []}, {'background': []}],          // dropdown with defaults from theme
  [{'font': []}],
  [{'align': []}],
  ['link', 'image', 'video'],
  ['clean']                                         // remove formatting button
];
export default {
  data(){
    return {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
      uploadImgUrl:"/v1/admin/common/upload",
      uploadUrlPath:"没有文件上传",
      quillUpdateImg:false,
      content:'',    //最终保存的内容
      editorOption:{
        placeholder:'你想说什么？',
        modules: {
          imageResize: {
            displayStyles: {
              backgroundColor: 'black',
              border: 'none',
              color: 'white'
            },
            modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
          },
          toolbar: {
            container: toolbarOptions,  // 工具栏
            handlers: {
              'image': function (value) {
                if (value) {
                  document.querySelector('#quillEditorQiniu .avatar-uploader input').click()
                } else {
                  this.quill.format('image', false);
                }
              },
              'video': function (value) {
                if (value) {
                  document.querySelector('#quillEditorQiniu .avatar-uploader input').click()
                } else {
                  this.quill.format('video', false);
                }
              },
            }
          }
        }
      },
    }
  },
  methods:{
    //上传图片之前async
    beforeEditorUpload(res, file){
      //显示上传动画
      this.quillUpdateImg = true;
      //  const res1 = await uploadImage()
      // console.log(res1,'=====');
      // this.$emit('before',res, file)
      console.log(res);
      console.log(file);
    },
    // 上传图片成功
    uploadEditorSuccess(res, file) {
      console.log("上传成功")
      // this.$emit('upload',res, file)
      console.log(res, file);
      //拼接出上传的图片在服务器的完整地址
      let imgUrl=res.data.url;
      let type=imgUrl.substring(imgUrl.lastIndexOf(".")+1);
      console.log(type);
      // 获取富文本组件实例
      let quill = this.$refs.customQuillEditor.quill;
      // 获取光标所在位置
      let length = quill.getSelection().index;
      // 插入图片||视频  res.info为服务器返回的图片地址
      if(type=='mp4' || type=='MP4'){
        quill.insertEmbed(length, 'video', imgUrl)
      }else{
        quill.insertEmbed(length, 'image', imgUrl)
      }
      // 调整光标到最后
      quill.setSelection(length + 1)
      //取消上传动画
      this.quillUpdateImg = false;
    },
    // 上传(文件)图片失败
    uploadEditorError(res, file) {
      console.log(res);
      console.log(file);
      //页面提示
      this.$message.error('上传图片失败')
      //取消上传动画
      this.quillUpdateImg = false;
    },
    //上传组件返回的结果
    uploadResult:function (res){
      this.uploadUrlPath=res;
    },
    openContent:function (){
      console.log(this.content)
    },

  },
  created () {

  },
  //只执行一次，加载执行
  mounted () {
    console.log("开始加载")
    // 初始给编辑器设置title
  },
  watch:{
    content(newVal, oldVal) {
      //this.$emit('input', newVal);
      console.log(newVal)
      console.log(oldVal)
    }
  },


}
</script>

<style>
.editor {
  line-height: normal !important;
  height: 400px;
  margin-bottom: 50px;
}
.ql-snow .ql-tooltip[data-mode="link"]::before {
  content: "请输入链接地址:";
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
  border-right: 0px;
  content: "保存";
  padding-right: 0px;
}

.ql-snow .ql-tooltip[data-mode="video"]::before {
  content: "请输入视频地址:";
}

.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
  content: "14px";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="small"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {
  content: "10px";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="large"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {
  content: "18px";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="huge"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {
  content: "32px";
}

.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
  content: "文本";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
  content: "标题1";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
  content: "标题2";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
  content: "标题3";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
  content: "标题4";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
  content: "标题5";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
  content: "标题6";
}

.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
  content: "标准字体";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="serif"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {
  content: "衬线字体";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="monospace"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before {
  content: "等宽字体";
}
</style>
