import request from '@/utils/http'

/**
 * 定时任务API
 */
export default {
  /**
   * 获取数据列表
   * @param params 搜索参数
   * @returns 数据列表
   */
  list(params: Record<string, any>) {
    return request.get<Api.Common.ApiPage>({
      url: '/tool/crontab/index',
      params
    })
  },

  /**
   * 读取数据
   * @param id 数据ID
   * @returns 数据详情
   */
  read(id: number | string) {
    return request.get<Api.Common.ApiData>({
      url: '/tool/crontab/read?id=' + id
    })
  },

  /**
   * 创建数据
   * @param params 数据参数
   * @returns 执行结果
   */
  save(params: Record<string, any>) {
    return request.post<any>({
      url: '/tool/crontab/save',
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
      url: '/tool/crontab/update',
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
      url: '/tool/crontab/destroy',
      data: params
    })
  },

  /**
   * 运行
   * @param params 数据参数
   * @returns 执行结果
   */
  run(params: Record<string, any>) {
    return request.post<any>({
      url: '/tool/crontab/run',
      data: params
    })
  },

  /**
   * 获取运行日志列表
   * @param params 搜索参数
   * @returns 数据列表
   */
  logPageList(params: Record<string, any>) {
    return request.get<Api.Common.ApiPage>({
      url: '/tool/crontab/logPageList',
      params
    })
  },

  /**
   * 删除运行日志
   * @param params 数据参数
   * @returns 执行结果
   */
  deleteCrontabLog(params: Record<string, any>) {
    return request.del<any>({
      url: '/tool/crontab/deleteCrontabLog',
      data: params
    })
  }
}
