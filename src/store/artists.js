/* eslint-disable no-shadow, no-param-reassign */
import { getArtist } from '@/data/artist_model';

const state = {
  artist: {},
};
const getters = {
  ARTIST: state => state.artist,
};
const mutations = {
  GET_ARTIST: (state, payload) => {
    state.artist = payload;
  },
};
const actions = {
  GET_ARTIST: async ({ commit, dispatch }, artistName) => {
    const artist = await getArtist(artistName);
    commit('GET_ARTIST', artist);
    dispatch('app/SET_IS_LOADING', false, { root: true });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
