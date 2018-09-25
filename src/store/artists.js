/* eslint-disable no-shadow, no-param-reassign */
import { getArtist } from '@/data/artist_model';
import {
  cond,
  T,
} from 'ramda';
import {
  hasError,
  isNilOrEmpty,
} from '@/utils/validations';

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
    dispatch('events/CLEAR_EVENTS', undefined, { root: true });
    commit('GET_ARTIST', {});

    const artist = await getArtist(artistName);

    cond([
      [hasError, () => dispatch('app/SET_ERROR', 'errors.failToLoadArtist', { root: true })],
      [isNilOrEmpty, () => dispatch('app/SET_ERROR', 'errors.artistNotFound', { root: true })],
      [T, () => commit('GET_ARTIST', artist)],
    ])(artist);

    dispatch('app/SET_IS_LOADING', false, { root: true });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
