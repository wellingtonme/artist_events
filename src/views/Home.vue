<template>
  <div class="home primary">
    <app-title />
    <search-description />
    <search-field />
    <loader />
    <artist-card />
    <event-list />
    <error-messages />
  </div>
</template>

<script>
// @ is an alias to /src
import AppTitle from '@/components/AppTitle.vue';
import SearchDescription from '@/components/SearchDescription.vue';
import SearchField from '@/components/SearchField.vue';
import Loader from '@/components/Loader.vue';
import ArtistCard from '@/components/ArtistCard.vue';
import EventList from '@/components/EventList.vue';
import ErrorMessages from '@/components/ErrorMessages.vue';

export default {
  name: 'home',
  components: {
    AppTitle,
    SearchDescription,
    SearchField,
    Loader,
    ArtistCard,
    EventList,
    ErrorMessages,
  },
};
</script>

<style lang="stylus" scoped>
.home {
  width 100%
  height 100%
  position fixed
  top 0
  left 0
  overflow-y scroll
  background-image url(https://images.pexels.com/photos/167480/pexels-photo-167480.jpeg?cs=srgb&dl=audience-band-concert-167480.jpg&fm=jpg)
  box-shadow inset 2000px 0 0 0 rgba(0, 0, 0, 0.8)
  background-position bottom
  background-size cover
}
</style>

