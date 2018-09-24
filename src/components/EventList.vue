<template>
  <div class="mb-3" v-if="hasToShowEvents">
    <v-layout row flex>
      <v-flex
        xs12
        s6
        offset-s4
        md8
        offset-md2
        lg6
        offset-lg3
      >
        <v-carousel hide-delimiters id="events-carousel">
          <v-carousel-item
            v-for="(eventsGroup,i) in events"
            :key="i"
          >
            <v-container
              fluid
              grid-list-xl
              class="fill-height"
            >
              <v-layout
                row
                justify-space-between
              >
                <event-card
                  v-for="(event, i) in eventsGroup"
                  :key="i"
                  :event="event"
                  offset-s1
                />
              </v-layout>
            </v-container>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { isEmpty, cond, equals, T, always } from 'ramda';
import { mapEvents } from './utils/map_events';
import EventCard from './EventCard.vue';

export default {
  name: 'EventList',
  components: {
    EventCard,
  },
  computed: {
    ...mapGetters({
      allEvents: 'events/EVENTS',
      isLoadingEvents: 'events/IS_SEARCHING_EVENTS',
    }),
    hasToShowEvents() {
      console.log((!isEmpty(this.allEvents) && !this.isLoadingEvents));
      return (!isEmpty(this.allEvents) && !this.isLoadingEvents);
    },
    events() {
      const limit = this.getLimit();
      return mapEvents(limit)(this.allEvents);
    },
  },
  methods: {
    getLimit() {
      return cond([
        [equals('xs'), always(2)],
        [equals('xl'), always(4)],
        [T, always(3)],
      ])(this.$vuetify.breakpoint.name);
    },
  },
};
</script>

<style lang="stylus" scoped>
#events-carousel {
  height 300px
  box-shadow none
}
</style>
