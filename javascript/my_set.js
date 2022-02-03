class MySet {
  // throw an error if called with anything other than string, array or nothing
  // if an iterable is provided only its unique values should be in data
  // strings and arrays will need to be broken down by their elements/characters
  constructor(iterable) {
    if (!(iterable === undefined || 
      Array.isArray(iterable) || 
      typeof iterable === 'string')) {
        throw new Error('MySet only accepts iterables or nothing on initialization!');
    }

    this.data = {};

    if (iterable) {
      for (const el of iterable) {
        this.data[el] = true;
      }
    }
  }

  // return number of elements in MySet
  size() {
    return this.entries().length;
  }

  // add an item to MySet as is
  // don't worry about arrays here!
  add(item) {
    this.data[item] = true;
    return this;
  }

  // delete an item from MySet
  // don't worry about arrays here!
  delete(item) {
    if (this.has(item)) {
      delete this.data[item];
      return true;
    }

    return false;
  }

  // return true if in MySet, otherwise false
  // don't worry about arrays here!
  has(item) {
    return !!this.data[item];
  }

  // return data as an array
  // don't worry about arrays here!
  entries() {
    return Object.keys(this.data);
  }
}

if (require.main === module) {
  // add your own tests in here
  
}

module.exports = MySet;

