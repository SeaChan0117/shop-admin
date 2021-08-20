import { RouteRecordRaw, RouterView } from 'vue-router'

const route: RouteRecordRaw = {
  path: 'order',
  name: '',
  component: RouterView,
  meta: {
    title: '订单'
  },
  children: [
    {
      path: 'list',
      name: 'list',
      component: () => import('@/views/order/list/index.vue'),
      meta: {
        title: '订单管理'
      }
    },
    {
      path: 'offline',
      name: 'offline',
      component: () => import('@/views/order/offline/index.vue'),
      meta: {
        title: '收银订单'
      }
    }
  ]
}

export default route
