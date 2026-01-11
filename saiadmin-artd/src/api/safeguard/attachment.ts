import request from '@/utils/http'

/**
 * 附件API
 */
export default {
  /**
   * 数据列表
   * @param params 搜索参数
   * @returns 数据列表
   */
  list(params: Record<string, any>) {
    return request.get<Api.Common.ApiPage>({
      url: '/core/attachment/index',
      params
    })
  },

  /**
   * 更新数据
   * @param params 数据参数
   * @returns 执行结果
   */
  update(params: Record<string, any>) {
    return request.put<any>({
      url: '/core/attachment/update',
      data: params
    })
  },

  /**
   * 删除数据
   * @param id 数据ID
   * @returns 执行结果
   */
  delete(params: Record<string, any>) {
    return request.del<any>({
      url: '/core/attachment/destroy',
      data: params
    })
  },

  /**
   * 移动文件到分类
   * @param params 参数，包含文件ID数组和目标分类ID
   * @returns 执行结果
   */
  move(params: Record<string, any>) {
    return request.post<any>({
      url: '/core/attachment/move',
      data: params
    })
  }
}
