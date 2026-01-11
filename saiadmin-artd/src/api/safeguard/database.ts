import request from '@/utils/http'

/**
 * 数据表维护API
 */
export default {
  /**
   * 数据列表
   * @param params 搜索参数
   * @returns 数据列表
   */
  list(params: Record<string, any>) {
    return request.get<Api.Common.ApiPage>({
      url: '/core/database/index',
      params
    })
  },

  /**
   * 获取数据源
   * @returns
   */
  getDataSource(params: Record<string, any> = {}) {
    return request.get<any>({
      url: '/core/database/dataSource',
      params
    })
  },

  /**
   * 获取表字段列表
   * @returns
   */
  getDetailed(params: Record<string, any> = {}) {
    return request.get<Api.Common.ApiData[]>({
      url: '/core/database/detailed',
      params
    })
  },

  /**
   * 获取回收站数据
   * @returns
   */
  getRecycle(params: Record<string, any> = {}) {
    return request.get<Api.Common.ApiPage>({
      url: '/core/database/recycle',
      params
    })
  },

  /**
   * 销毁数据
   * @returns
   */
  delete(params: Record<string, any>) {
    return request.del<any>({
      url: '/core/database/delete',
      data: params
    })
  },

  /**
   * 恢复数据
   * @returns
   */
  recovery(params: Record<string, any>) {
    return request.post<any>({
      url: '/core/database/recovery',
      data: params
    })
  },

  /**
   * 优化表
   * @returns
   */
  optimize(params: Record<string, any>) {
    return request.post<any>({
      url: '/core/database/optimize',
      data: params
    })
  },

  /**
   * 清理表碎片
   * @returns
   */
  fragment(params: Record<string, any>) {
    return request.post<any>({
      url: '/core/database/fragment',
      data: params
    })
  }
}
