<template>
  <img class="next" :src="next" alt="next" />
</template>

<script>
import next from 'assets/img/next.png'

export default {
  data() {
    return {
      next,
    }
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
