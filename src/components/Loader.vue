<template>
  <div class="loader" v-if="isLoading">
    <v-progress-circular
      :size="50"
      color="secondary"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Loader',
  computed: {
    ...mapGetters({
      isLoading: 'app/IS_LOADING',
    }),
  },
};
</script>

<style lang="stylus" scoped>
.loader {
  padding 20px 0
}
</style>

