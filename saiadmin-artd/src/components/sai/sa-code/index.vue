<template>
  <pre class="code-pre"><code class="hljs" v-html="highlightedCode"></code></pre>
</template>

<script type="ts" setup>
  import { ref, watch, onMounted } from 'vue'
  import hljs from 'highlight.js/lib/core' // 核心
  import 'highlight.js/styles/github-dark.css' // 主题示例（可换成其他，如 atom-one-light.css、vscode-dark.css 等）

  const props = defineProps({
    code: {
      type: String,
      required: true
    },
    language: {
      type: String,
      default: 'javascript' // 默认语言，可传入 'vue' 或 'php'
    }
  })

  const highlightedCode = ref('')

  const doHighlight = () => {
    if (!props.code) {
      highlightedCode.value = ''
      return
    }
    try {
      // ignoreIllegals 防止非法语法报错
      highlightedCode.value = hljs.highlight(props.code, {
        language: props.language,
        ignoreIllegals: true
      }).value
    } catch (__) {
      console.error('代码高亮失败', __)
      highlightedCode.value = props.code // 降级：语法不支持时纯文本显示
    }
  }

  watch(() => [props.code, props.language], doHighlight)
  onMounted(doHighlight)
</script>

<style scoped>
  .code-pre {
    border-radius: 8px;
    overflow-x: auto;
    font-size: 14px;
    line-height: 1.5;
  }
</style>
