import request from '@/utils/http'

/**
 * 操作日志数据API
 */
export default {
  /**
   * 数据列表
   * @param params 搜索参数
   * @returns 数据列表
   */
  list(params: Record<string, any>) {
    return request.get<Api.Common.ApiPage>({
      url: '/core/logs/getOperLogPageList',
      params
    })
  },

  /**
   * 删除数据
   * @param params
   * @returns
   */
  delete(params: Record<string, any>) {
    return request.del<any>({
      url: '/core/logs/deleteOperLog',
      data: params
    })
  }
}
