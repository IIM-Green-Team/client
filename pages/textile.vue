<template>
  <div>
    <page-title
      title="Textile"
      sub-title="Notre impact sur l’environnement à  travers le textile"
    />
  </div>
</template>

<script>
import stepper from '@/mixins/stepper'
import transition from '@/utils/pageTranstion'

export default {
  mixins: [stepper('')],
  transition,
}
</script>

<style lang="scss">
.textile {
  width: 100%;
}
</style>
