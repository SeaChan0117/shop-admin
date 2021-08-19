<template>
  <h1>登录</h1>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { getLoginInfo } from '@/api/common'
import type { ILoginInfo } from '@/api/types/common'

const list = ref<ILoginInfo['slide']>([])

console.log(list.value)

onMounted(() => {
  getLoginInfo().then(_ => {
    console.log(_.login_logo)
  })
})
</script>

<style>
</style>
