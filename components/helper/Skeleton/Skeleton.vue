<template>
  <span
    :style="[ !fullSize && { height, width: computedWidth }]"
    :class="[
      round ? 'rounded-full' : 'rounded',
      fullSize ? 'h-full w-full absolute top-0 left-0 bottom-0 right-0 block' : 'relative inline-block'
    ]"
    class="skeleton"
  />
</template>

<script>
export default {
  name: 'Skeleton',

  props: {
    /**
     * Maximum width
     */
    maxWidth: {
      default: 100,
      type: Number
    },
    /**
     * Minimum width
     */
    minWidth: {
      default: 80,
      type: Number
    },
    /**
     * Height of the element
     */
    height: {
      default: '1rem',
      type: String
    },
    /**
     * Width of the element
     */
    width: {
      default: null,
      type: String
    },
    /**
     * If the element is to be completely round
     */
    round: {
      type: Boolean,
      default: false
    },
    /**
     * If the skeleton is to assume the full size of the outer container
     */
    fullSize: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    computedWidth () {
      return this.width || `${Math.floor((Math.random() * (this.maxWidth - this.minWidth)) + this.minWidth)}%`
    }
  }
}
</script>

<style>
  .skeleton {
    vertical-align: middle;
    background-color: #DDDBDD;
    overflow: hidden;
  }

  .skeleton::after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));
    animation: shimmer 5s infinite;
  }
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }

</style>
