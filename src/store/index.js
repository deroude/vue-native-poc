import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import counter from './modules/counter';
import themes from './modules/themes';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    counter,
    themes
  },
  strict: debug,
});

Vue.prototype.$store = store;

module.exports = store;