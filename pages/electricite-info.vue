<template>
  <div>yolo</div>
</template>

<script>
import transition from '@/utils/pageTranstion'
import stepper from '~/mixins/stepper'
export default {
  mixins: [stepper('info-electricite')],
  transition,
}
</script>
