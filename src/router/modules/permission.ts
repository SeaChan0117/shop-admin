import { RouteRecordRaw, RouterView } from 'vue-router'

const route: RouteRecordRaw = {
  path: '/permission',
  name: '',
  component: RouterView,
  meta: {
    title: '管理权限'
  },
  children: [
    {
      path: 'role',
      name: 'permission-role',
      component: () => import('@/views/permission/role/index.vue'),
      meta: {
        title: '角色管理'
      }
    },
    {
      path: 'admin',
      name: 'permission-admin',
      component: () => import('@/views/permission/admin/index.vue'),
      meta: {
        title: '管理员列表'
      }
    },
    {
      path: 'rule',
      name: 'permission-rule',
      component: () => import('@/views/permission/role/index.vue'),
      meta: {
        title: '权限规则'
      }
    }
  ]
}

export default route
