import steps from '@/static/steps.js'

/**
### Expose the following properties
- nextPageLink {string} give the next page route
- previousPageLink {string} give the previous page route
- getProgressionFromName {function} give the current route index
 * @param {string} name route name
 * @returns
 */
const stepper = (name = '') => ({
  beforeMount() {
    this.updateCurrentStep()
  },
  beforeDestroy() {
    this.updateCurrentStep()
  },
  computed: {
    nextPageLink() {
      return steps[this.getProgressionFromName() + 1].route ?? null
    },
    previousPageLink() {
      return steps[this.getProgressionFromName() - 1].route ?? null
    },
  },
  methods: {
    /**
     * Get the currentStep index from name
     * @param {string} name
     * @returns {number}
     */
    getProgressionFromName() {
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
