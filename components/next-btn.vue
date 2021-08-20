<template>
  <div>
    <nuxt-link
      v-if="previousRoute"
      class="nav-link"
      :to="previousRoute"
      title="next"
    >
      <img class="next next--previous" :src="next" alt="next" />
    </nuxt-link>
    <nuxt-link v-if="nextRoute" class="nav-link" :to="nextRoute" title="next">
      <img class="next" :src="next" alt="next" />
    </nuxt-link>
  </div>
</template>

<script>
import next from 'assets/img/next.png'

import steps from '@/static/steps'

export default {
  data() {
    return {
      next,
    }
  },
  computed: {
    nextRoute() {
      return (
        steps[steps.findIndex((step) => step.name === this.$route.name) + 1]
          ?.name ?? null
      )
    },
    previousRoute() {
      return (
        steps[steps.findIndex((step) => step.name === this.$route.name) - 1]
          ?.name ?? null
      )
    },
  },
}
</script>

<style lang="scss">
.next {
  position: fixed;
  top: calc(50% - 25px); // half width
  right: 30px;
  width: 40px;
  &--previous {
    top: calc(50% - 25px); // half width
    left: 30px;
    height: 40px;
    width: 40px;
    right: auto;
    transform: rotate(180deg);
    transform-origin: center;
  }
}
</style>
