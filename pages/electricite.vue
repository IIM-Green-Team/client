<template>
  <div>page electricité</div>
</template>

<script>
import stepper from '@/mixins/stepper'
import pageTransition from '@/utils/pageTranstion'
export default {
  mixins: [stepper('premiere-page')],
  transition: pageTransition,
}
</script>

<style lang="scss" scoped>
div {
  background-color: red;
}
</style>
