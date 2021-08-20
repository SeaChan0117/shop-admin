<template>
  <i
    class="toggle-sidebar"
    :class="collapseIcon"
    @click="handleCollapse"
  />
</template>

<script lang="ts" setup>
import { useStore } from '@/store'
import { computed } from 'vue'

const store = useStore()
const collapseIcon = computed(() => {
  return !store.state.isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'
})
const handleCollapse = () => {
  store.commit('setCollapse', !store.state.isCollapse)
}
</script>

<style lang="scss" scoped>
.toggle-sidebar {
  font-size: 18px;
}
.toggle-sidebar:hover {
  color: #2d8cf0;
  cursor: pointer;
}
</style>
