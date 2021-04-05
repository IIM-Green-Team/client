<template>
  <div class="app-header">
    <logo class="logo" />
    <breadcrumb class="breadcrumb" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.app-header {
  margin: 16px auto 16px;
  display: flex;
  justify-content: space-between;

  .logo {
    /* width: 250px; */
  }

  .breadcrumb {
    /* flex-grow: 2; */
  }
}
</style>
