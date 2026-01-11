<template>
  <div class="page-content mb-5">
    <el-row :gutter="20">
      <el-col :span="24" class="mb-4">
        <!-- 字典缓存 信息 -->
        <el-card class="art-table-card" shadow="never">
          <template #header>
            <span class="text-lg font-medium">数据字典-缓存信息</span>
          </template>
          <el-descriptions :column="2" border>
            <el-descriptions-item label="缓存TAG">
              <div class="flex-c">
                <span>{{ cacheInfo.dict_cache?.tag }}</span>
                <ElButton
                  v-permission="'core:server:clear'"
                  class="ml-2"
                  v-ripple
                  @click="handleClearCache(cacheInfo.dict_cache?.tag)"
                >
                  <template #icon>
                    <ArtSvgIcon icon="ri:eraser-line" />
                  </template>
                  清理缓存
                </ElButton>
              </div>
            </el-descriptions-item>
            <el-descriptions-item label="有效期">
              {{ cacheInfo.dict_cache?.expire }}
            </el-descriptions-item>
          </el-descriptions>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="24" class="mb-4">
        <!-- 配置缓存 信息 -->
        <el-card class="art-table-card" shadow="never">
          <template #header>
            <span class="text-lg font-medium">系统配置-缓存信息</span>
          </template>
          <el-descriptions :column="2" border>
            <el-descriptions-item label="缓存TAG">
              <div class="flex-c">
                <span>{{ cacheInfo.config_cache?.tag }}</span>
                <ElButton
                  v-permission="'core:server:clear'"
                  class="ml-2"
                  v-ripple
                  @click="handleClearCache(cacheInfo.config_cache?.tag)"
                >
                  <template #icon>
                    <ArtSvgIcon icon="ri:eraser-line" />
                  </template>
                  清理缓存
                </ElButton>
              </div>
            </el-descriptions-item>
            <el-descriptions-item label="有效期">
              {{ cacheInfo.config_cache?.expire }}
            </el-descriptions-item>
            <el-descriptions-item label="缓存前缀">
              {{ cacheInfo.config_cache?.prefix }}
            </el-descriptions-item>
          </el-descriptions>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="24" class="mb-4">
        <!-- 菜单缓存 信息 -->
        <el-card class="art-table-card" shadow="never">
          <template #header>
            <span class="text-lg font-medium">菜单数据-缓存信息</span>
          </template>
          <el-descriptions :column="2" border>
            <el-descriptions-item label="缓存TAG">
              <div class="flex-c">
                <span>{{ cacheInfo.menu_cache?.tag }}</span>
                <ElButton
                  v-permission="'core:server:clear'"
                  class="ml-2"
                  v-ripple
                  @click="handleClearCache(cacheInfo.menu_cache?.tag)"
                >
                  <template #icon>
                    <ArtSvgIcon icon="ri:eraser-line" />
                  </template>
                  清理
                </ElButton>
              </div>
            </el-descriptions-item>
            <el-descriptions-item label="有效期">
              {{ cacheInfo.menu_cache?.expire }}
            </el-descriptions-item>
            <el-descriptions-item label="缓存前缀">
              {{ cacheInfo.menu_cache?.prefix }}
            </el-descriptions-item>
          </el-descriptions>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="24" class="mb-4">
        <!-- 权限缓存 信息 -->
        <el-card class="art-table-card" shadow="never">
          <template #header>
            <span class="text-lg font-medium">权限按钮-缓存信息</span>
            <span class="text-sm text-gray-500"> 缓存权限按钮的数据 </span>
          </template>
          <el-descriptions :column="2" border>
            <el-descriptions-item label="缓存TAG">
              <div class="flex-c">
                <span>{{ cacheInfo.button_cache?.tag }}</span>
                <ElButton
                  v-permission="'core:server:clear'"
                  class="ml-2"
                  v-ripple
                  @click="handleClearCache(cacheInfo.button_cache?.tag)"
                >
                  <template #icon>
                    <ArtSvgIcon icon="ri:eraser-line" />
                  </template>
                  清理
                </ElButton>
              </div>
            </el-descriptions-item>
            <el-descriptions-item label="有效期">
              {{ cacheInfo.button_cache?.expire }}
            </el-descriptions-item>
            <el-descriptions-item label="缓存前缀">
              {{ cacheInfo.button_cache?.prefix }}
            </el-descriptions-item>
            <el-descriptions-item label="角色前缀">
              {{ cacheInfo.button_cache?.role }}
            </el-descriptions-item>
          </el-descriptions>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="24" class="mb-4">
        <!-- 反射文件缓存 信息 -->
        <el-card class="art-table-card" shadow="never">
          <template #header>
            <span class="text-lg font-medium">反射文件-缓存信息</span>
            <span class="text-sm text-gray-500"> 缓存反射文件的反射属性的方法名称和权限参数 </span>
          </template>
          <el-descriptions :column="2" border>
            <el-descriptions-item label="缓存TAG">
              <div class="flex-c">
                <span>{{ cacheInfo.reflection_cache?.tag }}</span>
                <ElButton
                  v-permission="'core:server:clear'"
                  class="ml-2"
                  v-ripple
                  @click="handleClearCache(cacheInfo.reflection_cache?.tag)"
                >
                  <template #icon>
                    <ArtSvgIcon icon="ri:eraser-line" />
                  </template>
                  清理缓存
                </ElButton>
              </div>
            </el-descriptions-item>
            <el-descriptions-item label="有效期">
              {{ cacheInfo.reflection_cache?.expire }}
            </el-descriptions-item>
            <el-descriptions-item label="非验证方法缓存前缀">
              {{ cacheInfo.reflection_cache?.no_need }}
            </el-descriptions-item>
            <el-descriptions-item label="方法名称和权限缓存参数">
              {{ cacheInfo.reflection_cache?.attr }}
            </el-descriptions-item>
          </el-descriptions>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  import api from '@/api/safeguard/server'
  import { onMounted } from 'vue'
  import { ElMessage, ElMessageBox } from 'element-plus'

  const loading = ref(false)

  const cacheInfo = reactive({
    menu_cache: {} as any,
    button_cache: {} as any,
    config_cache: {} as any,
    dict_cache: {} as any,
    reflection_cache: {} as any
  })

  /**
   * 更新缓存信息
   */
  const updateCacheInfo = async () => {
    loading.value = true
    try {
      const data = await api.cache({})
      cacheInfo.menu_cache = data.menu_cache
      cacheInfo.button_cache = data.button_cache
      cacheInfo.config_cache = data.config_cache
      cacheInfo.dict_cache = data.dict_cache
      cacheInfo.reflection_cache = data.reflection_cache
    } finally {
      loading.value = false
    }
  }

  /**
   * 清理缓存
   */
  const handleClearCache = (tag: string): void => {
    if (!tag) {
      ElMessage.warning('请选择要清理的缓存')
      return
    }
    ElMessageBox.confirm(`确定要清理标签：【${tag}】的缓存吗？`, '清理选中缓存', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'error'
    }).then(() => {
      api.clear({ tag }).then(() => {
        ElMessage.success('操作成功')
        updateCacheInfo()
      })
    })
  }

  onMounted(() => {
    updateCacheInfo()
  })
</script>

<style lang="scss" scoped>
  :deep(.el-descriptions__label) {
    width: 200px;
  }
  :deep(.el-descriptions__content) {
    width: 400px;
  }
</style>
