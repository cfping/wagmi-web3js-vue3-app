import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'
import { config } from './wagmi'
import { WagmiPlugin } from '@wagmi/vue'
const queryClient = new QueryClient()

createApp(App)
.use(WagmiPlugin, { config })
.use(VueQueryPlugin, { queryClient })
.mount('#app')
