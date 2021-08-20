<template>
  <i
    class="el-icon-full-screen"
    @click="toggleFullScreen"
  />
</template>

<script lang="ts" setup>
const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}
</script>

<style lang="scss" scoped>
.el-icon-full-screen {
  font-size: 18px;
}
.el-icon-full-screen:hover {
  color: #2d8cf0;
  cursor: pointer;
}
</style>
