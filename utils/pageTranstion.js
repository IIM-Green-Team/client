import steps from '~/static/steps'

/**
### Usage
```javascript
export default {
  transition(to, from) {
    pageTransition(to, from, { next: 'slide-left', previous: 'slide-right' })
  },
}
```
 * @param {any} to
 * @param {any} from
 * @param {string} next page transition className
 * @param {string} previous page transition className
 * @returns
 */
export default function pageTransition(
  to,
  from,
  { next, previous } = { next: 'slide-next', previous: 'slide-previous' }
) {
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
  return reverse ? previous : next
}
