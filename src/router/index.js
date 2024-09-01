import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AdminLoginView from '../views/AdminLoginView.vue'
import ProfileView from '../views/ProfileView.vue'
import RatingView from '../views/RatingView.vue' 

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/admin-login',
    name: 'AdminLogin',
    component: AdminLoginView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView
  },
  {
    path: '/rating',  
    name: 'Rating',
    component: RatingView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   // Perform logic before every route change
//   const { isAuthenticated } = useAuthticate()
//   if (to.name == 'About') {
//      if (isAuthenticated.value == true){
//       next()
//      }
//      else
//      {
//       next({name:'Login'})
//      } 
//   }
//   else{
//     next()
//   }
// });

export default router