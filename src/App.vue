<template>
  <div id="app">
    <!-- 
      router-view 是 Vue Router 的一个组件，用于渲染匹配路径的组件。
      在这个例子中，根据当前的路由路径，router-view 会渲染对应的组件。
      比如，如果当前的路由是 /login，那么 router-view 会渲染 Login 组件。
      如果当前的路由是 /user/123，那么 router-view 会渲染 User 组件，并且传递一个参数 id，值为 123。
    -->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
 
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
#app {
  height: 100%;
}
</style>


