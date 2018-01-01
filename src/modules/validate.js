class Validate {
  static isArray(element) {
    if (!Array.isArray(element)) {
      throw new Error(`${element} is not of type [Array]`);
    }
  }
}

export default Validate;
