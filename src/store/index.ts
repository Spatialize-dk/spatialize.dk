import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/**
 * The store where we hold global stuff.
 *
 */
const store = new Vuex.Store({
  state: {
    language: 'dk',
  },
  mutations: {
    setLanguage(state, sI) {
      // console.log('Store.mutations.setLanguage ', sI);
      state.language = sI.value;
    },
  },
  actions: {
    setLanguage(context, lang) {
      context.commit('setLanguage', lang);
    },
  },
  modules: {},
});

export default store;
export const SetLanguage = 'setLanguage';
