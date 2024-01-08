import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios';
import LoginPage from '../components/LoginComponent.vue'
import MainPage from '../components/MainPage.vue'


// 라우터 설계
const routes = [
    { 
        path: '/login', 
        component:LoginPage
    },
    {
        path: '/',
        component: MainPage,
        // meta: { requiresAuth: true }
    },
    {
        path: '/test',
        component: MainPage,       
        meta: { requiresAuth:true}
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!(await isLoggedIn())) {
          next('/login');
      } else {
          next();
      }
  } else {
      next();
  }
});

async function isLoggedIn() {
  try {
      const response = await axios.get('http://localhost:8080/api/checkSession', { withCredentials: true });
      console.log(response)
      return response.status === 200;
  } catch (error) {
      return false;
  }
}

export { router };