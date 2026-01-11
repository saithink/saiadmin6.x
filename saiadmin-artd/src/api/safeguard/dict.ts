import request from '@/utils/http'

/**
 * 字典数据API
 */
export default {
  /**
   * 获取数据列表
   * @param params 搜索参数
   * @returns 数据列表
   */
  typeList(params: Record<string, any>) {
    return request.get<Api.Common.ApiPage>({
      url: '/core/dictType/index',
      params
    })
  },

  /**
   * 创建数据
   * @param params 数据参数
   * @returns 执行结果
   */
  save(params: Record<string, any>) {
    return request.post<any>({
      url: '/core/dictType/save',
      data: params
    })
  },

  /**
   * 更新数据
   * @param params 数据参数
   * @returns 执行结果
   */
  update(params: Record<string, any>) {
    return request.put<any>({
      url: '/core/dictType/update',
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
      url: '/core/dictType/destroy',
      data: params
    })
  },

  /**
   * 字典项数据列表
   * @param params 搜索参数
   * @returns 数据列表
   */
  dataList(params: Record<string, any>) {
    return request.get<Api.Common.ApiData[]>({
      url: '/core/dictData/index',
      params
    })
  },

  /**
   * 创建字典项数据
   * @param params 数据参数
   * @returns 执行结果
   */
  dataSave(params: Record<string, any>) {
    return request.post<any>({
      url: '/core/dictData/save',
      data: params
    })
  },

  /**
   * 更新字典项数据
   * @param params 数据参数
   * @returns 执行结果
   */
  dataUpdate(params: Record<string, any>) {
    return request.put<any>({
      url: '/core/dictData/update',
      data: params
    })
  },

  /**
   * 删除数据
   * @param id 数据ID
   * @returns 执行结果
   */
  dataDelete(params: Record<string, any>) {
    return request.del<any>({
      url: '/core/dictData/destroy',
      data: params
    })
  }
}
