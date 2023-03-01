# main-app

### 1.qiankun安装下载

```javascript
npm i qiankun -S
```

### 2.新建src/qiankun/index.js

```javascript
import { registerMicroApps, start } from 'qiankun'
import store from '@/store'

/* registerMicroApps()用法
注册微应用的基础配置信息。当浏览器 url 发生变化时，会自动检查
每一个微应用注册的 activeRule 规则，符合规则的应用将会被自动激活。 */

// registerMicroApps(apps, lifeCycles?) 第一个参数必选，微应用的一些注册信息
registerMicroApps([
  {
    name: 'sub-app', // 必选，微应用的名称，微应用之间必须确保唯一
    entry: 'http://localhost:8081/', // 微应用入口。配置为字符串时，表示微应用的访问地址
    container: '#subapp-viewport', // 微应用挂载在父应用的div
    activeRule: '/sub-vue/', // 当配置为字符串时会直接跟 url 中的路径部分做前缀匹配，匹配成功表明当前应用会被激活。
    props: {
      // 此处将主应用需要传递给微应用的数据
      store
    }
  }
])

/* start()用法
启动 qiankun */

export default start

```



### 3.`router/index.js` 添加当`url`中与`activeRule: '/sub-vue/'` 匹配的所有页面路径，渲染在指定的id容器中`container: '#subapp-viewport'`，则需要修改`router/index.js`  ,并且添加`views/qiankun/index.js` 



`router/index.js` 添加:

```javascript
{
    path: '/sub-vue/*',
    meta: { title: '子应用' },
    component: () => import('@/views/qiankun/index.vue')
  }
```

`views/qiankun/index.js` 完整代码：

```javascript
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

```

### 4.主应用测试

子应用添加路径为`/test`的路由页面；

主应用可添加按钮打开：

```vue
<template>
  <div class="home">
    <h1>This is an home page</h1>

    <div @click="onJump">按钮</div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    onJump () {
      this.$router.push('/sub-vue/test')
    }
  }
}
</script>

```

