/**
 * 公共业务接口
 */
import request from '@/utils/request'
import { ILoginInfo } from '@/api/types/common'

// interface ResponseData<T = any> {
//   status: number
//   msg: string
//   data: T
// }

export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/admin/login/info'
  })

  // return request.get<ResponseData<{
  //   logo_square: string
  //   logo_rectangle: string
  //   login_logo: string
  //   slide: string[]
  // }>>('/login/info')
}

export const getCaptcha = () => {
  return request<Blob>({
    method: 'GET',
    url: '/captcha_pro',
    params: {
      stamp: Date.now()
    },
    responseType: 'blob' // 请求获取图片数据
  })
}
