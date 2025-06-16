import Validator from '../src/Validator.js';

let schema;

beforeEach(() => {
  schema = new Validator().array();
});

test('default array schema', () => {
  expect(schema.isValid(null)).toBeTruthy();
  expect(schema.isValid([])).toBeTruthy();
});

test('array schema required', () => {
  schema.required();
  expect(schema.isValid('number')).toBeFalsy();
  expect(schema.isValid([])).toBeTruthy();
  expect(schema.isValid([1, 2, 3])).toBeTruthy();
});

test('array schema sizeof', () => {
  schema.required().sizeof(3);
  expect(schema.isValid([2, 3])).toBeFalsy();
  expect(schema.isValid([1, 2, 3, 4, 5])).toBeFalsy();
  expect(schema.isValid([1, 2, 3])).toBeTruthy();
});