<template>
  <div class="title-header">
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.title-header {
  margin-bottom: 20px;

  h1 {
    color: $color-blue;
    font-size: 24px;
  }

  h2 {
    color: $color-lightblue;
    font-size: 16px;
  }
}
</style>
