import Validator from '../src/Validator.js';

let schema;
let v;

beforeEach(() => {
  v = new Validator();
  schema = v.object();
});

test('default object schema', () => {
  schema.shape({
  });
  expect(schema.isValid({})).toBeTruthy();
});

test('name and age object schema', () => {
  schema.shape({
    name: v.string().required(),
    age: v.number().positive()
  });

  expect(schema.isValid({
    name: 'John',
    age: 20
  })).toBeTruthy();

  expect(schema.isValid({
    name: undefined,
    age: 20
  })).toBeFalsy();

  expect(schema.isValid({
    name: 'John',
    age: 20,
    email: 'john@gmail.com'
  })).toBeTruthy();

  expect(schema.isValid({
    name: 'ada',
    age: -5
  })).toBeFalsy();
});
