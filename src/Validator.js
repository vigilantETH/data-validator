import StringValidator from './validators/StringValidator.js';
import NumberValidator from './validators/NumberValidator.js';
import ArrayValidator from './validators/ArrayValidator.js';
import ObjectValidator from './validators/ObjectValidator.js';

export default class Validator {
  constructor() {
    this._validator = ''
  }
 string() {
    this._validator = 'string'
    return new StringValidator();
  }

  number() {
    this._validator = 'number'
    return new NumberValidator();
  }

  array() {
    this._validator = 'array'
    return new ArrayValidator();
  }

  object() {
    this._validator = 'object'
    return new ObjectValidator();
  }

  addValidator(type, fnName, fn) {
    this._validator = type
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
