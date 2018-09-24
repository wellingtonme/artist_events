<template>
  <v-flex xs6 md4 xl3>
    <v-card class="fill-height event-card">
      <v-card-title class="align-center">
        <v-layout row wrap>
          <v-flex xs12>
            <div class="title">
              {{ this.getDay() }}
            </div>
            <div class="display-1">
              {{ this.getMonth() }}
            </div>
          </v-flex>
          <v-flex xs12>
            <div class="subheading font-weight-medium">
              {{ this.event.venue.name }}
            </div>
          </v-flex>
        </v-layout>
      </v-card-title>
      <v-card-text>
        <div class="subheading">
          {{ this.event.venue.city }}
        </div>
        <div class="subheading">
          {{ this.event.venue.country }}
        </div>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import moment from 'moment';

export default {
  name: 'EventCard',
  props: {
    event: Object,
  },
  methods: {
    getDay() {
      return moment(this.event.datetime).format('Do');
    },
    getMonth() {
      return moment(this.event.datetime).format('MMM');
    },
  },
};
</script>

<style lang="stylus" scoped>
.event-card {
  transition all .4s ease-in-out
  &:hover {
    transform scale(1.1)
    cursor pointer
    background-color #29b6f6
    color #212121
  }
}
</style>

