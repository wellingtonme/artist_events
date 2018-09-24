/* eslint-disable no-shadow, no-param-reassign */
const state = {
  isLoading: false,
};

const getters = {
  IS_LOADING: state => state.isLoading,
};

const mutations = {
  SET_IS_LOADING: (state, isLoading) => {
    state.isLoading = isLoading;
  },
};

const actions = {
  SET_IS_LOADING: ({ commit }, isLoading) => {
    commit('SET_IS_LOADING', isLoading);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
