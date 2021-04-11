<template>
  <h1 class="logo"><span class="logo-highlight">zero</span>dechet</h1>
</template>

<style lang="scss">
.logo {
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
