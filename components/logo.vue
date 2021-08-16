<template>
  <a href="/">
    <img class="logo" :src="logo" alt="logo" />
  </a>
</template>

<script>
import logo from 'assets/img/logo.png'

export default {
  data() {
    return {
      logo,
    }
  },
}
</script>

<style lang="scss">
.logo {
  width: 100px;
  animation: 1s appear;
  text-transform: uppercase;

  &-highlight {
    color: $color-green;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
