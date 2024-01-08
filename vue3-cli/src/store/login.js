// import { createStore } from 'vuex';
import axios from 'axios';
import { router } from '@/router/router';

export default ({
  state: {
    user: null
  },
  mutations: {
    setUser(state, userData) {
      state.user = userData;
    }
  },
  actions: {
    async handleLogin({ commit }, loginData) {
      try {
        const response = await axios.post('http://localhost:8080/api/login', loginData, { withCredentials: true });
        commit('setUser', response.data);

        // 만료 시간 설정 ( 2시간 후)
        const expiryTime = 2 * 60 * 60 * 1000; // 2시간 (단위: 밀리초)
        const expiry = new Date().getTime() + expiryTime;

        // 로컬 스토리지에 사용자 데이터와 만료 시간 저장
        localStorage.setItem('user', JSON.stringify({ userData: response.data, expiry }));

        router.push('/');
      } catch (error) {
        console.error('Error during login:', error);
      }
    }
  }
});