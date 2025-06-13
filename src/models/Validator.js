import StringValidator from './StringValidator.js'
import NumberValidator from './NumberValidator.js'

export default class Validator {
  string() {
    return new StringValidator()
  }

  number() {
    return new NumberValidator()
  }
}
