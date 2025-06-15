export default class NumberValidator {
  constructor() {
    this.state = {
      toBeNumber: false,
      positive: false,
      minValue: Number.MIN_SAFE_INTEGER,
      maxValue: Number.MAX_SAFE_INTEGER,
      withTests: false,
      tests: {},
    }
  }

  required() {
    this.state.toBeNumber = true
    return this
  }

  positive() {
    this.state.positive = true
    this.state.minValue = Number.MIN_VALUE
    return this
  }

  range(min, max) {
    let minValue = min
    if (this.state.positive) {
      minValue = this.state.minValue
    }
    this.state.minValue = minValue
    this.state.maxValue = max
    return this
  }

  test(fnName, val) {
    this.state.withTest = true
    this.state.tests[fnName] = val
    return this
  }
  isValid(number) {
    if (this.state.withTest) {
      const result = Object.entries(this.state.tests).map(([fn, val]) => {
        return this[fn](number, val)
      })
      return !result.includes(false)
    }
    if (this.state.toBeNumber) {
      if (Number.isSafeInteger(number)) {
        return number >= this.state.minValue && number <= this.state.maxValue
      }
      return false
    }
    if (this.state.positive && Number.isSafeInteger(number)) {
      return number > 0
    }
    return true
  }
}
