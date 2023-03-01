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
