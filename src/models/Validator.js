import StringValidator from './StringValidator.js'
import NumberValidator from './NumberValidator.js'
import ArrayValidator from './ArrayValidator.js'
import ObjectValidator from './ObjectValidator.js'

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

  object() {
    return new ObjectValidator()
  }
}
