<template>
  <div class="app-container">
    <app-header />
    <Nuxt class="app-content" />
    <next-btn />
    <light-logo />
  </div>
</template>

<style lang="scss">
.app-container {
  z-index: 1;
  position: relative;
  box-sizing: border-box;
  padding: 16px 24px;
  min-height: 100vh;

  background: url('@/assets/img/background.svg') no-repeat;
  background-position-y: bottom;
  background-size: contain;

  overflow: hidden;
  * {
    box-sizing: border-box;
  }
}
</style>
