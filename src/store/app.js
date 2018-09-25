/* eslint-disable no-shadow, no-param-reassign */
const state = {
  isLoading: false,
  hasError: false,
  errorMessageKey: '',
};

const getters = {
  IS_LOADING: state => state.isLoading,
  HAS_ERROR: state => state.hasError,
  ERROR_MESSAGE_KEY: state => state.errorMessageKey,
};

const mutations = {
  SET_IS_LOADING: (state, isLoading) => {
    state.isLoading = isLoading;
  },
  SET_ERROR_STATE: (state, { hasError = false, errorMessageKey = '' }) => {
    state.hasError = hasError;
    state.errorMessageKey = errorMessageKey;
  },
};

const actions = {
  SET_IS_LOADING: ({ commit }, isLoading) => {
    commit('SET_IS_LOADING', isLoading);
  },
  SET_ERROR: ({ commit }, errorMessageKey) => {
    commit('SET_ERROR_STATE', { hasError: true, errorMessageKey });
  },
  CLEAR_ERROR: ({ commit }) => {
    commit('SET_ERROR_STATE', {});
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
