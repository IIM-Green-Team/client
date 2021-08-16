<template>
  <img class="light" :src="light" alt="light" />
</template>

<script>
import light from 'assets/img/light.png'

export default {
  data() {
    return {
      light,
    }
  },
}
</script>

<style lang="scss">
.light {
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 40px;
}
</style>
