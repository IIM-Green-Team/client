<template>
  <div>
    page electricité

    {{ JSON.stringify(res) }}
  </div>
</template>

<script>
import stepper from '@/mixins/stepper'
import transition from '@/utils/pageTranstion'

export default {
  mixins: [stepper('premiere-page')],
  transition,
  async asyncData({ $axios }) {
    const res = await $axios.get('https://jsonplaceholder.typicode.com/posts')
    return { res }
  },
}
</script>
