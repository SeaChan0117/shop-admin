<template>
  <h1 class="title">
    首页
  </h1>
  <div>{{ $store.state.count }}</div>
  <el-button type="primary">
    测试
  </el-button>
  <el-date-picker
    v-model="value1"
    type="date"
    placeholder="选择日期"
  />
</template>

<script lang="ts" setup>
import { useStore } from '@/store'
const store = useStore()
const value1 = ''
console.log(store.state.count)
</script>

<style lang="scss" scoped>
.title{
  color: $color;
}
</style>
