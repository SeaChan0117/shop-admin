<template>
  <el-container>
    <el-aside>
      <app-menu />
    </el-aside>
    <el-container>
      <el-header>
        <app-header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import AppMenu from '@/layout/AppMenu/index.vue'
import AppHeader from '@/layout/AppHeader/index.vue'
</script>

<style scoped>
.el-header{
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.el-aside {
  width: auto;
  background-color: #304156;
  color: #333;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
}
.el-container {
  height: 100vh;
}
</style>
