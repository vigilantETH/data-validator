import StringValidator from './StringValidator.js'
import NumberValidator from './NumberValidator.js'
import ArrayValidator from './ArrayValidator.js'

export default class Validator {
  string() {
    return new StringValidator()
  }

  number() {
    return new NumberValidator()
  }

  array() {
    return new ArrayValidator()
  }
}
