export default class StringValidator {

  constructor() {
    this.state = {
      toBeString: false,
      substring: '',
      length: 0,
    }
  }

  required() {
    this.state.toBeString = true
    return this
  }

  contains(substring) {
    this.state.substring = substring
    return this
  }

  minLength(length) {
    this.state.length = length
    return this
  }

  isValid(string) {
    const minimumLength = this.state.length
    const substring = this.state.substring
    if (this.state.toBeString) {
      if (typeof string !== 'string') {
        return false
      }
      return string.includes(substring) && string.length > minimumLength
    } return true
  }
}
