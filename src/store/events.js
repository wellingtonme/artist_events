/* eslint-disable no-shadow, no-param-reassign */
import { getArtistEvents } from '@/data/event_model';
import {
  cond,
  T,
} from 'ramda';
import {
  hasError,
  isNilOrEmpty,
} from '@/utils/validations';

const state = {
  events: [],
  isSearchingEvents: false,
};
const getters = {
  EVENTS: state => state.events,
  IS_SEARCHING_EVENTS: state => state.isSearchingEvents,
};
const mutations = {
  SET_EVENTS: (state, payload) => {
    state.events = payload;
  },
  SET_IS_SEARCHING_EVENTS: (state, payload) => {
    state.isSearchingEvents = payload;
  },
};
const actions = {
  GET_EVENTS: async ({ commit, dispatch }, artistName) => {
    dispatch('CLEAR_EVENTS');
    commit('SET_IS_SEARCHING_EVENTS', true);

    const result = await getArtistEvents(artistName);
    cond([
      [hasError, () => dispatch('app/SET_ERROR', 'errors.failToLoadEvents', { root: true })],
      [isNilOrEmpty, () => dispatch('app/SET_ERROR', 'errors.eventsNotFound', { root: true })],
      [T, () => commit('SET_EVENTS', result)],
    ])(result);

    commit('SET_IS_SEARCHING_EVENTS', false);
  },
  CLEAR_EVENTS: ({ commit }) => {
    commit('SET_EVENTS', []);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
