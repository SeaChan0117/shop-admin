<template>
  <h1 class="title">
    首页
  </h1>
  <div>{{ $store.state.count }}</div>
</template>

<script lang="ts" setup>
import { useStore } from '@/store'
const store = useStore()
console.log(store.state.count)
</script>

<style lang="scss" scoped>
.title{
  color: $color;
}
</style>
