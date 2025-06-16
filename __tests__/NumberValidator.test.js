import Validator from '../src/Validator.js';

let schema;

beforeEach(() => {
  schema = new Validator().number();
});

test('default number schema', () => {
  expect(schema.isValid(null)).toBeTruthy();
  expect(schema.isValid(Number.MIN_SAFE_INTEGER)).toBeTruthy();
});

test('number schema required', () => {
  schema.required();
  expect(schema.isValid('number')).toBeFalsy();
  expect(schema.isValid(Number.MAX_SAFE_INTEGER + 1)).toBeFalsy();
  expect(schema.isValid(123)).toBeTruthy();
});

test('number schema positive', () => {
  schema.required().positive();
  expect(schema.isValid(123)).toBeTruthy();
  expect(schema.isValid(-123)).toBeFalsy();
  expect(schema.isValid(0)).toBeFalsy();
});

test('number schema in range', () => {
  schema.required().range(-10, 10);
  expect(schema.isValid(-4)).toBeTruthy();
  expect(schema.isValid(-11)).toBeFalsy();
  schema.positive().range(-5, 5);
  expect(schema.isValid(-1)).toBeFalsy();
  expect(schema.isValid(5)).toBeTruthy();
});
