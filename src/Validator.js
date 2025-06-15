import StringValidator from './validators/StringValidator.js'
import NumberValidator from './validators/NumberValidator.js'
import ArrayValidator from './validators/ArrayValidator.js'
import ObjectValidator from './validators/ObjectValidator.js'

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
