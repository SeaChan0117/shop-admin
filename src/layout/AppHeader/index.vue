<template>
  <div class="header-box">
    <toggle-sidebar style="margin-right: 15px" />
    <breadcrumb />
  </div>
  <div class="header-box">
    <full-screen />
  </div>
</template>

<script lang="ts" setup>
import ToggleSidebar from '@/layout/AppHeader/ToggleSidebar.vue'
import Breadcrumb from '@/layout/AppHeader/Breadcrumb.vue'
import FullScreen from '@/layout/AppHeader/FullScreen.vue'

</script>

<style lang="scss" scoped>
.header-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
