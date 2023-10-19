import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createStore } from 'vuex'

import App from './App.vue'
import router from './router'

const store = createStore({
  modules: {
    myModule: {
      namespaced: true,
      state: { text: 'hello' }
    }
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(store)

app.mount('#app')
