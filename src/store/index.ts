import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { InjectionKey } from 'vue'

const state = {
  count: 0,
  isCollapse: false
}

export type State = typeof state

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('store')

// Create a new store instance.
export const store = createStore<State>({
  state,
  mutations: {
    increment (state) {
      state.count++
    },
    setCollapse (state, payload) {
      state.isCollapse = payload
    }
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
