export default class ObjectValidator {
  shape(objectSchema) {
    this.shape = objectSchema
  }

  isValid(object) {
    if (object === null) {
      return true
    }
    const objectEntries = Object.entries(object)
    const validityOfEach = objectEntries.map((el) => {
      const valueForValidation = el[1]
      const schemaForKey = this.shape[el[0]]
      if (!schemaForKey) {
        return true
      }
      return schemaForKey.isValid(valueForValidation)
    })
    return !validityOfEach.includes(false)
  }
}
