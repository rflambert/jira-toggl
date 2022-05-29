import Vue from 'vue';
import App from './App';
import {  MdButton, MdContent, MdCheckbox, MdField, MdToolbar, MdTable, MdSnackbar } from 'vue-material/dist/components';

Vue.use(MdField);
Vue.use(MdButton);
Vue.use(MdCheckbox);
Vue.use(MdToolbar);
Vue.use(MdSnackbar);
Vue.use(MdContent);
Vue.use(MdTable);

global.browser = require('webextension-polyfill');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
});
