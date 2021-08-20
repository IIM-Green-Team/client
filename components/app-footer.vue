<template>
  <div class="app-footer">
    <div class="app-footer__tip" @click="openModal()">
      <img :src="assets.bulb" />
    </div>
  </div>
</template>

<script>
import bulb from '@/assets/img/lightbulb.svg'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      assets: {
        bulb,
      },
    }
  },
  methods: {
    ...mapActions(['openModal']),
    getCurrentPageName() {
      return this.$route.name
    },
  },
}
</script>

<style lang="scss">
.app-footer {
  position: fixed;
  bottom: 32px;
  right: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .app-footer__tip {
    cursor: pointer;
    img {
      width: 58px;
    }
  }
}
</style>
