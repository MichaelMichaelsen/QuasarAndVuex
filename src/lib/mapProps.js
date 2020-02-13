export default function mapProps (props = [], { object, action } = {}) {
  return props.reduce((accumulator, prop) => {
    const computedProp = {
      get () {
        return this[object][prop]
      },
      set (value) {
        console.log(object)
        this.$store.dispatch(action, { key: prop, value })
      }
    }

    accumulator[`${prop}Model`] = computedProp

    return accumulator
  }, {})
}
