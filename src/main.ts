import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import './assets/main.css'
// element
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/display.css'
import 'element-plus/dist/index.css'
import './static/text/text.css'
import './static/iconfont/iconfont.css'
import 'animate.css';
// liuxing
import './static/liuxing.css'
const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.mount('#app')