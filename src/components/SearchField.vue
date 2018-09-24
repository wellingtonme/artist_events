<template>
  <div
    id="search-wrap"
    :class="{'search-expanded': isInFocus}"
  >
    <input
      type="text" id="search"
      placeholder="Enter artist name"
      @focus="isInFocus=true"
      @blur="isInFocus=false"
      @transitionend="handleTransition"
      v-model="artistName"
      @keyup.enter="searchArtist"
    >
    <div
      id="close-icon"
      :style="closeIconStyle"
      :class="{'closing': !isInFocus}"
      @click="handleCloseClick"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SearchField',
  data() {
    return {
      isInFocus: false,
      closeIconStyle: {
        display: 'none',
      },
      artistName: '',
    };
  },
  methods: {
    handleTransition() {
      this.closeIconStyle.display = this.isInFocus ? 'block' : 'none';
    },
    clearArtistName() {
      this.artistName = '';
    },
    handleCloseClick() {
      this.clearArtistName();
    },
    ...mapActions({
      getArtist: 'artists/GET_ARTIST',
      setIsLoading: 'app/SET_IS_LOADING',
    }),
    searchArtist() {
      if (!this.artistName) {
        return;
      }

      this.getArtist(this.artistName);
      this.setIsLoading(true);
      this.clearArtistName();
    },
  },
};
</script>

<style lang="stylus" scoped>
#search-wrap {
  display inline-block
  position relative
  width 80%
  @media screen and (min-width: 960px) {
    width 60%
  }
  @media screen and (min-width: 1264px) {
    width 50%
  }

  &.search-expanded {
    #close-icon {
      &:before {
        animation cross-1-in 0.25s linear 0s forwards
      }
      &:after {
        animation cross-2-in 0.25s linear 0.2s forwards
      }
    }
    &:after { // lens handle
      animation: lens-out 0.5s linear 1 forwards
    }
  }
  &:after {
    position relative
    bottom 7px
    right -52%
    display block
    content ""
    width 20px
    height 4px
    background-color: #29B6F6
    transform rotate(45deg) scaleX(0)
    transform-origin 0 50%
    animation lens-in 0.6s linear 0.9s forwards
  }
}

#search {
  color #29B6F6
  background none
  border 4px solid #29B6F6
  outline none
  padding 10px 20px
  border-radius 1000px
  width 0
  transition width 0.3s 0.6s

  &::-webkit-input-placeholder {
    color rgba(#29B6F6, 0.6)
  }

  &:focus {
    width 100%
  }
}

#close-icon {
  cursor pointer
  position absolute
  right 20px
  top 22px
  width 20px
  height 20px
  transform translateT(-2px)
  transition 0.2s all
  display none

  &[style*="display: block"] {
    color blue

    &:before {
      transform rotate(45deg) escaleX(1) translateY(10px)
    }

    &:after {
       transform rotate(-45deg) scaleX(1) translateY(-10px);
    }
  }

  &:before,
  &:after {
    display bloc;
    content ""
    position absolute
    width 20px
    height 4px
    background-color #29B6F6
    transform-origin 100% 50%
  }
  &:before {
    transform rotate(45deg) scaleX(0) translateY(10px)
  }
  &:after {
    transform rotate(-45deg) scaleX(0) translateY(-10px)
  }

  &.closing {
    &:before {
      animation cross-1-out 0.25s linear 0s forwards
    }
    &:after {
      animation cross-2-out 0.25s linear 0.2s forwards
    }
  }
}

// Animations
@keyframes lens-out {
  0% {
    transform rotate(45deg) scaleX(1)
  }
  30% {
    transform rotate(45deg) scaleX(1.4)
  }
  100% {
    transform rotate(45deg) scaleX(0)
  }
}
@keyframes lens-in {
  0% {
    transform rotate(45deg) scaleX(0)
  }
  30% {
    transform rotate(45deg) scaleX(1.4)
  }
  100% {
    transform rotate(45deg) scaleX(1)
  }
}
@keyframes cross-1-in {
  0% {
    transform rotate(45deg) scaleX(0) translateY(10px)
  }
  70% {
    transform rotate(45deg) scaleX(1.2) translateY(10px)
  }
  100% {
    transform rotate(45deg) scaleX(1) translateY(10px)
  }
}
@keyframes cross-2-in {
  0% {
    transform rotate(-45deg) scaleX(0) translateY(-10px)
  }
  70% {
    transform rotate(-45deg) scaleX(1.2) translateY(-10px)
  }
  100% {
    transform rotate(-45deg) scaleX(1) translateY(-10px)
  }
}
@keyframes cross-1-out {
  0% {
    transform rotate(45deg) scaleX(1) translateY(10px)
  }
  100% {
    transform rotate(45deg) scaleX(0) translateY(10px)
  }
}
@keyframes cross-2-out {
  0% {
    transform rotate(-45deg) scaleX(1) translateY(-10px)
  }
  100% {
    transform rotate(-45deg) scaleX(0) translateY(-10px)
  }
}
</style>

