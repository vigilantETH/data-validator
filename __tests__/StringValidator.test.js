import Validator from '../src/Validator.js'

let schema

beforeEach(() => {
  schema = new Validator().string()
})

test('default string schema', () => {
  expect(schema.isValid(undefined)).toBeTruthy()
  expect(schema.isValid(123)).toBeTruthy()
})

test('string schema required', () => {
  schema.required()
  expect(schema.isValid('some str')).toBeTruthy()
  expect(schema.isValid('')).toBeFalsy()
  expect(schema.isValid(null)).toBeFalsy()
})

test('string schema contains', () => {
  schema.required()
  schema.contains('a')
  expect(schema.isValid('orange')).toBeTruthy()
  schema.contains('o')
  expect(schema.isValid('apple')).toBeFalsy()
})

test('string schema min length', () => {
  schema.required()
  schema.minLength(15)
  expect(schema.isValid('eye')).toBeFalsy()
  expect(schema.isValid('The quick brown fox jumps over the lazy dog')).toBeTruthy()
})
