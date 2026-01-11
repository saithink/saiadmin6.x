import request from '@/utils/http'
import { AppRouteRecord } from '@/types/router'

/**
 * 获取验证码
 * @returns 响应
 */
export function fetchCaptcha() {
  return request.get<Api.Auth.CaptchaResponse>({
    url: '/core/captcha'
  })
}

/**
 * 登录
 * @param params 登录参数
 * @returns 登录响应
 */
export function fetchLogin(params: Api.Auth.LoginParams) {
  return request.post<Api.Auth.LoginResponse>({
    url: '/core/login',
    params
  })
}

/**
 * 获取用户信息
 * @returns 用户信息
 */
export function fetchGetUserInfo() {
  return request.get<Api.Auth.UserInfo>({
    url: '/core/system/user'
  })
}

/**
 * 修改资料
 * @param params 修改资料参数
 * @returns 响应
 */
export function updateUserInfo(params: Record<string, any>) {
  return request.post<any>({
    url: '/core/user/updateInfo',
    params
  })
}

/**
 * 修改密码
 * @param params 修改密码参数
 * @returns 响应
 */
export function modifyPassword(params: Record<string, any>) {
  return request.post<any>({
    url: '/core/user/modifyPassword',
    params
  })
}

/**
 * 获取登录日志
 * @returns 登录日志数组
 */
export function fetchGetLogin(params: Record<string, any>) {
  return request.get<Api.Common.ApiPage>({
    url: '/core/system/getLoginLogList',
    params
  })
}

/**
 * 获取操作日志
 * @returns 操作日志数组
 */
export function fetchGetOperate(params: Record<string, any>) {
  return request.get<Api.Common.ApiPage>({
    url: '/core/system/getOperationLogList',
    params
  })
}

/**
 * 清理缓存
 * @returns
 */
export function fetchClearCache() {
  return request.get<any>({
    url: '/core/system/clearAllCache'
  })
}

/**
 * 获取字典数据
 * @returns 字典数组
 */
export function fetchGetDictList() {
  return request.get<Api.Auth.DictData>({
    url: '/core/system/dictAll'
  })
}

/**
 * 获取菜单列表
 * @returns 菜单数组
 */
export function fetchGetMenuList() {
  return request.get<AppRouteRecord[]>({
    url: '/core/system/menu'
  })
}

/**
 * 上传图片
 * @param params
 * @returns
 */
export function uploadImage(params: any) {
  return request.post<any>({
    url: '/core/system/uploadImage',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    params
  })
}

/**
 * 上传文件
 * @param params
 * @returns
 */
export function uploadFile(params: any) {
  return request.post<any>({
    url: '/core/system/uploadFile',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    params
  })
}

/**
 * 切片上传
 * @param params
 * @returns
 */
export function chunkUpload(params: any) {
  return request.post<any>({
    url: '/core/system/chunkUpload',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    params
  })
}

/**
 * 资源分类
 * @param params
 * @returns
 */
export function getResourceCategory(params: any) {
  return request.get<Api.Common.ApiData[]>({
    url: '/core/system/getResourceCategory',
    params
  })
}

/**
 * 图片资源列表
 * @param params
 * @returns
 */
export function getResourceList(params: any) {
  return request.get<Api.Common.ApiPage>({
    url: '/core/system/getResourceList',
    params
  })
}

/**
 * 用户列表
 * @param params
 * @returns
 */
export function getUserList(params: any) {
  return request.get<Api.Common.ApiPage>({
    url: '/core/system/getUserList',
    params
  })
}
