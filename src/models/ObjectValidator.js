export default class ObjectValidator {

  shape(objectSchema) {
    this.shape = objectSchema
  }

  isValid(object) {
    const objectEntries = Object.entries(object)
    const validityOfEach = objectEntries.map((el) => {
      try {
        const valueForValidation = el[1]
        const schemaForKey = this.shape[el[0]]
        if(!schemaForKey) {
          return true
        }
        return schemaForKey.isValid(valueForValidation)
      }
      catch (e) {
        console.log(e)
      }
    })
    return !validityOfEach.includes(false)
  }
}
