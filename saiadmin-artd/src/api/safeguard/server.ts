import request from '@/utils/http'

/**
 * 服务器信息API
 */
export default {
  /**
   * 服务监控
   * @param params 搜索参数
   * @returns 数据列表
   */
  monitor(params: Record<string, any>) {
    return request.get<any>({
      url: '/core/server/monitor',
      params
    })
  },

  /**
   * 缓存列表
   * @param params 搜索参数
   * @returns 数据列表
   */
  cache(params: Record<string, any>) {
    return request.get<any>({
      url: '/core/server/cache',
      params
    })
  },

  /**
   * 清理缓存
   * @param params 搜索参数
   * @returns 数据列表
   */
  clear(params: Record<string, any>) {
    return request.post<any>({
      url: '/core/server/clear',
      params
    })
  }
}
