<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="subapp-viewport"></div>
</template>

<script>
import start from '@/qiankun/index'
export default {
  mounted () {
    /* window.qiankunStarted
    给window添加qiankunStarted标识，代表为前端是否启动，防止重复调用。
    */
    // 启动微前端
    if (!window.qiankunStarted) {
      window.qiankunStarted = true
      start()
    }
  }

}
</script>
