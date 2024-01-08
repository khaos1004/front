// store.js
import { createStore } from 'vuex';

const store = createStore({

  state() {
    return {
      sideMenuData: ''
    };
  },

  mutations: {
    setSideMenuData(state, Data) {
        state.sideMenuData = Data;
      }
  },
  
  /**
   * action은 비동기작업이나 복작한 로직 수행
   */
  actions: {
    increment(context) {
      context.commit('increment');
    }
  },

  /**
   * 다른 유의미한 값을 도출할때 사용
   */
  getters: {
    doubleCount(state) {
      return state.sideMenuData * 2;
    }
  }
});

export default store;