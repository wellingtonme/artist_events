<template>
  <div class="home primary">
    <app-title />
    <search-description />
    <search-field />
    <loader />
    <artist-card />
    <event-list />
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

export default {
  name: 'home',
  components: {
    AppTitle,
    SearchDescription,
    SearchField,
    Loader,
    ArtistCard,
    EventList,
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
}
</style>

