import steps from '~/static/steps'

export default function pageTransition(to, from) {
  if (from === undefined) {
    return
  }
  const { fullPath: fromPath } = from
  const { fullPath: toPath } = to
  if (fromPath === toPath) {
    return
  }
  const reverse =
    steps.findIndex((step) => step.route === toPath) <
    steps.findIndex((step) => step.route === fromPath)
  return reverse ? 'slide-left' : 'slide-right'
}
