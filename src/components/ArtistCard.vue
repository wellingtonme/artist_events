<template>
  <v-container fluid grid-list-lg v-if="hasToShow">
    <v-layout row wrap>
      <v-flex
        xs12
        s6
        offset-s4
        md8
        offset-md2
        lg6
        offset-lg3
      >
        <v-card color="secondary" class="primary--text">
          <v-layout row text-xs-left>
            <v-flex>
              <v-card-title primary-title>
                <div>
                  <div class="headline mb-3 artist-name">{{artist.name}}</div>
                  <div class="mt-2 title font-weight-thin">{{
                    $tc(
                      'artistTrackers',
                      this.artist.tracker_count,
                      { tracker_count: this.artist.tracker_count }
                    )
                    }}</div>
                  <div class="mt-2 title font-weight-thin">{{
                    $tc(
                      'artistUpcomingEvents',
                      this.artist.upcoming_event_count,
                      { events_count: this.artist.upcoming_event_count }
                    )
                  }}</div>
                </div>
              </v-card-title>
            </v-flex>
            <v-flex lg4 md4 xs5>
              <v-avatar :size="avatarImgSize">
                <v-img
                  :src="artist.thumb_url"
                  :height="avatarImgSize"
                  contain
                />
              </v-avatar>
            </v-flex>
          </v-layout>
          <v-divider light></v-divider>
          <v-card-actions class="pa3">
            <span>{{ $t('rateArtist') }}</span>
            <v-spacer />
            <v-rating
              v-model="rating"
              clearable
              background-color="primary"
            />
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import { cond, always, equals, T, isEmpty } from 'ramda';

export default {
  name: 'ArtistCard',
  data() {
    return {
      rating: 0,
    };
  },
  computed: {
    ...mapGetters({
      artist: 'artists/ARTIST',
      isLoading: 'app/IS_LOADING',
    }),
    avatarImgSize() {
      return cond([
        [equals('xs'), always('100')],
        [equals('s'), always('150')],
        [T, always('200')],
      ])(this.$vuetify.breakpoint.name);
    },
    hasToShow() {
      return (this.artist && !isEmpty(this.artist) && !this.isLoading);
    },
  },
};
</script>

<style lang="stylus" scoped>
.artist-name {
  text-decoration underline
}
</style>

