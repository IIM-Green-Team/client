<template>
  <div>Alimentation info</div>
</template>

<script>
import transition from '@/utils/pageTranstion'
import stepper from '~/mixins/stepper'
export default {
  mixins: [stepper('info-alimentation')],
  transition,
}
</script>
