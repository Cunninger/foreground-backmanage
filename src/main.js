import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

 //引入quill-editor编辑器
 import VueQuillEditor from 'vue-quill-editor'
 import 'quill/dist/quill.core.css'
 import 'quill/dist/quill.snow.css'
 import 'quill/dist/quill.bubble.css'
 Vue.use(VueQuillEditor)
 
 //实现quill-editor编辑器拖拽上传图片
 import * as Quill from 'quill'
 import { ImageDrop } from 'quill-image-drop-module'
 Quill.register('modules/imageDrop', ImageDrop)
 
 //实现quill-editor编辑器调整图片尺寸
 import ImageResize from 'quill-image-resize-module'
 Quill.register('modules/imageResize', ImageResize)

Vue.use(ElementUI);
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
