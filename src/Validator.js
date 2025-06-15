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

  addValidator(type, fnName, fn) {
    switch (type) {
      case 'string':
        StringValidator.prototype[fnName] = fn
        break
      case 'number':
        NumberValidator.prototype[fnName] = fn
        break
      case 'array':
        ArrayValidator.prototype[fnName] = fn
        break

      case 'object':

        break
      default:
        console.log('Unsupported schema validator:', type)
    }
  }
}

const v = new Validator();

const fn = (array, value) => array.includes(value);
v.addValidator('array', 'includes', fn);

const schema = v.array().test('includes', 6)
const res1 = schema.isValid([])
const res2 = schema.isValid([1, 3, 6])
console.log(res1, res2)