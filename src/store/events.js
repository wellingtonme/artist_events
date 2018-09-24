/* eslint-disable no-shadow, no-param-reassign */
import { getArtistEvents } from '@/data/event_model';

const state = {
  events: [],
  isSearchingEvents: false,
};
const getters = {
  EVENTS: state => state.events,
  IS_SEARCHING_EVENTS: state => state.isSearchingEvents,
};
const mutations = {
  GET_EVENTS: (state, payload) => {
    state.events = payload;
  },
  SET_IS_SEARCHING_EVENTS: (state, payload) => {
    state.isSearchingEvents = payload;
  },
};
const actions = {
  GET_EVENTS: async ({ commit }, artistName) => {
    commit('SET_IS_SEARCHING_EVENTS', true);
    const result = await getArtistEvents(artistName);
    commit('GET_EVENTS', result);
    commit('SET_IS_SEARCHING_EVENTS', false);
  },
  CLEAR_EVENTS: ({ commit }) => {
    commit('GET_EVENTS', []);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
