<template>
  <div>page electricité</div>
</template>

<script>
import stepper from '@/mixins/stepper'
import transition from '@/utils/pageTranstion'

export default {
  mixins: [stepper('premiere-page')],
  transition,
}
</script>
