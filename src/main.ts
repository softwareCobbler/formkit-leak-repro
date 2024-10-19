import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { defaultConfig } from '@formkit/vue'
import { plugin as formKitVuePlugin } from '@formkit/vue'

createApp(App).use(formKitVuePlugin, defaultConfig()).mount('#app')


