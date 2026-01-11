import request from '@/utils/http'

/**
 * 基础数据统计
 * @returns 响应
 */
export function fetchStatistics() {
  return request.get<any>({
    url: '/core/system/statistics'
  })
}

/**
 * 登录统计图表数据
 * @returns 响应
 */
export function fetchLoginChart() {
  return request.get<any>({
    url: '/core/system/loginChart'
  })
}

/**
 * 登录统计图表数据
 * @returns 响应
 */
export function fetchLoginBarChart() {
  return request.get<any>({
    url: '/core/system/loginBarChart'
  })
}
