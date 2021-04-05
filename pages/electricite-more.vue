<template>
  <div>yolo</div>
</template>

<script>
import pageTransition from '@/utils/pageTranstion'
import stepper from '~/mixins/stepper'
export default {
  mixins: [stepper('info-electricite')],
  transition: pageTransition,
}
</script>

<style lang="scss" scoped>
div {
  background-color: yellow;
}
</style>
