import steps from '@/static/steps.js'

const stepper = (name = '') => ({
  beforeMount() {
    this.updateCurrentStep()
  },
  beforeDestroy() {
    this.updateCurrentStep()
  },
  methods: {
    /**
     * Get the currentStep index from name
     * @param {string} name
     * @returns {number}
     */
    getProgressionFromName(name) {
      return steps.findIndex((v) => v.name === name) ?? 0
    },
    updateCurrentStep() {
      this.$store.dispatch('updateCurrentProgression', {
        progression: this.getProgressionFromName(name),
      })
    },
  },
})

export default stepper
