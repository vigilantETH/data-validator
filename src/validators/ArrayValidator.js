export default class ArrayValidator {
  constructor() {
    this.state = {
      required: false,
      sizeof: [0, Number.MAX_SAFE_INTEGER],
      withTests: false,
      tests: {},
    }
  }

  required() {
    this.state.required = true
    return this
  }

  sizeof(number) {
    this.state.sizeof = [number, number]
    return this
  }

  test(fnName, val) {
    this.state.withTests = true
    this.state.tests[fnName] = val
    return this
  }

  isValid(array) {
    if (this.state.withTests) {
      const result = Object.entries(this.state.tests).map(([fn, val]) => {
        console.log(this[fn](array, val))
        return this[fn](array, val)
      })
      return !result.includes(false)
    }
    if (this.state.required) {
      if (Array.isArray(array)) {
        return array.length >= this.state.sizeof[0] && array.length <= this.state.sizeof[1]
      }
      return false
    }
    return true
  }
}
