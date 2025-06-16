import StringValidator from './validators/StringValidator.js';
import NumberValidator from './validators/NumberValidator.js';
import ArrayValidator from './validators/ArrayValidator.js';
import ObjectValidator from './validators/ObjectValidator.js';

export default class Validator {
  string() {
    return new StringValidator();
  }

  number() {
    return new NumberValidator();
  }

  array() {
    return new ArrayValidator();
  }

  object() {
    return new ObjectValidator();
  }

  addValidator(type, fnName, fn) {
    switch (type) {
      case 'string':
        StringValidator.prototype[fnName] = fn;
        break;
      case 'number':
        NumberValidator.prototype[fnName] = fn;
        break;
      case 'array':
        ArrayValidator.prototype[fnName] = fn;
        break;

      case 'object':

        break;
      default:
        console.log('Unsupported schema validator:', type);
    }
  }
}
