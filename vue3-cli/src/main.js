import { createApp } from 'vue'
import App from './App.vue'
import "./style.css"
import { router } from './router/router'
import login from '@/store/login';
import { createStore } from 'vuex';

const store = createStore(login);  // 스토어 인스턴스 생성

/**
 * 사용자정보 localStorage에서 불러오기 만료시 폐기
 */
const storedData = JSON.parse(localStorage.getItem('user'));
if (storedData) {
  const now = new Date();
  if (now.getTime() > storedData.expiry) {
    // 데이터 만료
    localStorage.removeItem('user');
  } else {
    // 데이터 사용
    store.commit('setUser', storedData.userData);
  }
}

const app = createApp(App)
app.use(store)
app.use(router)  // 라우터 사용
app.mount('#app')
