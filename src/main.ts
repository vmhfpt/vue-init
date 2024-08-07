import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import './styles/ant_custom/ant_custom.scss'

//import VueGoogleMaps from '@fawmi/vue-google-maps' //Uncaught SyntaxError: The requested module '/node_modules/fast-deep-equal/index.js?v=697c5cfd' does not provide an export named 'default'
const app = createApp(App)
app.use(Antd)
app.use(router)

app.mount('#app')
