// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import firebase from 'firebase';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

let app;
// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDXPbBlliKa4gWIKYkoKIroqxaZj1-LUIQ',
  authDomain: 'vue-firebase-tutorial-a9a70.firebaseapp.com',
  databaseURL: 'https://vue-firebase-tutorial-a9a70.firebaseio.com',
  projectId: 'vue-firebase-tutorial-a9a70',
  storageBucket: 'vue-firebase-tutorial-a9a70.appspot.com',
  messagingSenderId: '170725666184',
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>',
    });
  }
});
