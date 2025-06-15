export default class ArrayValidator {
  constructor() {
    this.state = {
      required: false,
      sizeof: [0, Number.MAX_SAFE_INTEGER],
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

  isValid(array) {
    if (this.state.required) {
      if (Array.isArray(array)) {
        return array.length >= this.state.sizeof[0] && array.length <= this.state.sizeof[1]
      }
      return false
    }
    return true
  }
}
