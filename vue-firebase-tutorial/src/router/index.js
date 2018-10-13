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
  const kappa = to.path !== '/hello';

  if (requiresAuth && !currentUser) {
    console.log('redirect to login');
    next('/login');
  } else if (!requiresAuth && currentUser && kappa) {
    console.log('redirect to hello');
    next('/hello');
  } else {
    console.log('redirect to next');
    next();
  }
});

export default router;
