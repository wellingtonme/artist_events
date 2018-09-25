<template>
  <v-snackbar
    v-model="hasError"
    color="error"
    :timeout=0
  >
    {{ $t(this.errorMessageKey) }}
    <v-btn
      dark
      flat
      @click="clearError"
      ref="errorMessageElBtn"
    >
      {{ $t('errors.closeButton') }}
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ErrorMessages',
  computed: {
    ...mapGetters({
      hasError: 'app/HAS_ERROR',
      errorMessageKey: 'app/ERROR_MESSAGE_KEY',
    }),
  },
  methods: {
    ...mapActions({
      clearError: 'app/CLEAR_ERROR',
    }),
  },
  updated() {
    if (this.hasError) {
      this.$refs.errorMessageElBtn.$el.focus(); // closes search field if still opened
    }
  },
};
</script>

<style lang="stylus" scoped>

</style>

