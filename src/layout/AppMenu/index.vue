<template>
  <el-menu
    :unique-opened="true"
    :default-active="$route.path"
    class="el-menu-vertical"
    background-color="#304156"
    text-color="rgba(255, 255, 255, 0.7)"
    active-text-color="#2d8cf0"
    :collapse="$store.state.isCollapse"
    :router="true"
  >
    <el-menu-item index="/">
      <i class="el-icon-s-home" />
      <template #title>
        首页
      </template>
    </el-menu-item>
    <el-submenu index="/product">
      <template #title>
        <i class="el-icon-present" />
        <span>商品</span>
      </template>
      <el-menu-item index="/product/product_list">
        商品管理
      </el-menu-item>
      <el-menu-item index="/product/product_classify">
        商品分类
      </el-menu-item>
      <el-menu-item index="/product/product_attr">
        商品规格
      </el-menu-item>
      <el-menu-item index="/product/product_reply">
        商品评论
      </el-menu-item>
    </el-submenu>
    <el-submenu index="/order">
      <template #title>
        <i class="el-icon-document-copy" />
        <span>订单</span>
      </template>
      <el-menu-item index="/order/list">
        订单管理
      </el-menu-item>
      <el-menu-item index="/order/offline">
        收银订单
      </el-menu-item>
    </el-submenu>
    <el-submenu index="/permission">
      <template #title>
        <i class="el-icon-user-solid" />
        <span>管理权限</span>
      </template>
      <el-menu-item index="/permission/role">
        角色管理
      </el-menu-item>
      <el-menu-item index="/permission/admin">
        管理员列表
      </el-menu-item>
      <el-menu-item index="/permission/rule">
        权限规则
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.el-menu {
  border-right: none;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
