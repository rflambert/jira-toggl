import Vue from 'vue/dist/vue.js';
import App from './App';
import Moment from 'moment';
import { MdDatepicker, MdButton, MdDialog, MdContent, MdCheckbox, MdIcon, MdToolbar, MdTable, MdSnackbar } from 'vue-material/dist/components';

Vue.use(MdDatepicker);
Vue.use(MdButton);
Vue.use(MdCheckbox);
Vue.use(MdIcon);
Vue.use(MdToolbar);
Vue.use(MdTable);
Vue.use(MdSnackbar);
Vue.use(MdContent);
Vue.use(MdDialog);

Vue.prototype.$moment = Moment;

global.browser = require('webextension-polyfill');
Vue.prototype.$browser = global.browser;

Vue.component('duration-input', {
  props: ["value"],
  template: ` <input ref="input" v-bind:value="formatDuration(value)" v-on:blur="parseInputChange($event.target)">`,
  methods: {
    formatDuration(duration) {
      return App.methods.formatDuration(duration);
    },
    parseInputChange: function (inputField) {
      let newInput = inputField.value.trim();
      let matched = newInput.match(/^(?:(\d+)h)?\s*(?:(\d+)m)?$/);
      if (matched) {
        let hours = matched[1] ? parseInt(matched[1]) : 0;
        let mins = matched[2] ? parseInt(matched[2]) : 0;
        let seconds = hours * 3600 + mins * 60;
        this.$emit('input', seconds);
      } else {
        inputField.value = this.formatDuration(this.value);
        this.$emit('input', this.value);
      }
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
});
