<template>
  <nuxt-link class="nav-link" :to="nextRoute" title="next">
    <img class="next" :src="next" alt="next" />
  </nuxt-link>
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
  },
}
</script>

<style lang="scss">
.next {
  position: fixed;
  top: calc(50% - 25px); // half width
  right: 30px;
  width: 40px;
}
</style>
