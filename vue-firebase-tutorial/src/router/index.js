import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/Login';
import SignUp from '@/components/SignUp';

Vue.use(Router);

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '*', redirect: '/login' },
    { path: '/hello', name: 'HelloWorld', component: HelloWorld },
    { path: '/login', name: 'Login', component: Login },
    { path: '/sign-up', name: 'SignUp', component: SignUp },
  ],
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('hello');
  else next();
});

export default router;
