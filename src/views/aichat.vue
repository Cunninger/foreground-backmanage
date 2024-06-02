<template>
  <div v-if="!isLoaded">
    <iframe class="xxx" ref="iframe" @load="iframeLoaded" src="xxxxxxxx" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false
    }
  },
  methods: {
    iframeLoaded() {
      this.isLoaded = true;
    }
  }
}
</script>

<style scoped>
.xxx {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  border: none;
}
</style>
  </style>

