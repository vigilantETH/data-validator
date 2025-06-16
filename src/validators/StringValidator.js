export default class StringValidator {
  constructor() {
    this.state = {
      toBeString: false,
      substring: '',
      length: 0,
      withTest: false,
      tests: {},
    };
  }

  required() {
    this.state.toBeString = true;
    this.state.length = 1;
    return this;
  }

  contains(substring) {
    this.state.substring = substring;
    return this;
  }

  minLength(length) {
    this.state.length = length;
    return this;
  }

  test(fnName, val) {
    this.state.withTest = true;
    this.state.tests[fnName] = val;
    return this;
  }

  isValid(string) {
    const { toBeString } = this.state;
    if (this.state.withTest) {
      const result = Object.entries(this.state.tests).map(([fn, val]) => this[fn](string, val));
      return !result.includes(false);
    }
    const { length } = this.state;
    const { substring } = this.state;
    if (toBeString) {
      if (typeof string !== 'string') {
        return false;
      }
    }
    if (typeof string !== 'string') {
      return true;
    }
    return string.includes(substring) && string.length >= length;
  }
}
