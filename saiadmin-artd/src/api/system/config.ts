import request from '@/utils/http'

/**
 * 系统设置API
 */
export default {
  /**
   * 获取数据列表
   * @param params 搜索参数
   * @returns 数据列表
   */
  groupList(params: Record<string, any>) {
    return request.get<Api.Common.ApiPage>({
      url: '/core/configGroup/index',
      params
    })
  },

  /**
   * 创建数据
   * @param params 数据参数
   * @returns 执行结果
   */
  save(params: Record<string, any>) {
    return request.post<Api.Common.ApiData>({
      url: '/core/configGroup/save',
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
      url: '/core/configGroup/update',
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
      url: '/core/configGroup/destroy',
      data: params
    })
  },

  /**
   * 系统设置项数据列表
   * @param params 搜索参数
   * @returns 数据列表
   */
  configList(params: Record<string, any>) {
    return request.get<Api.Common.ApiData>({
      url: '/core/config/index',
      params
    })
  },

  /**
   * 创建系统设置项数据
   * @param params 数据参数
   * @returns 执行结果
   */
  configSave(params: Record<string, any>) {
    return request.post<any>({
      url: '/core/config/save',
      data: params
    })
  },

  /**
   * 更新系统设置项数据
   * @param params 数据参数
   * @returns 执行结果
   */
  configUpdate(params: Record<string, any>) {
    return request.put<any>({
      url: '/core/config/update',
      data: params
    })
  },

  /**
   * 删除数据
   * @param id 数据ID
   * @returns 执行结果
   */
  configDelete(params: Record<string, any>) {
    return request.del<any>({
      url: '/core/config/destroy',
      data: params
    })
  },

  /**
   * 批量修改配置
   * @param params
   * @returns
   */
  batchUpdate(params: Record<string, any>) {
    return request.post<any>({
      url: '/core/config/batchUpdate',
      data: params
    })
  },

  /**
   * 邮件测试
   * @param params
   * @returns
   */
  emailTest(params: Record<string, any>) {
    return request.post<any>({
      url: '/core/configGroup/email',
      data: params
    })
  }
}
