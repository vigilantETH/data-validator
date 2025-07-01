### Description
This package provide class for creating your own validation schema in fluent-interface way.

### Quick start

import Validator from 'data-validator';

const validator = new Validator();

// Create inst of string schema
const schema = validator.string();

// Without strict rules
schema.isValid(undefined); // true
schema.isValid(123);       // true

// Add rule: the value is required
schema.required();
schema.isValid('hello'); // true
schema.isValid('');      // false
schema.isValid(null);    // false

// Add rule: contains substring
schema.contains('a');
schema.isValid('apple'); // true
schema.isValid('hello'); // false
