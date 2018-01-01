/* global HTMLElement */

/**
 * Custom validators for main functions
 */
class Validate {
  /**
   * Throws error if array is not an Array of HTMLElement(s)
   * @param {Element[]} array Array to be checked
   */
  static isHtmlArray(array) {
    if (!Array.isArray(array)) {
      throw new Error(`${array} is not of type [Array]`);
    }
    array.map((node) => {
      if (node instanceof HTMLElement !== true) {
        throw new Error(`${node} is not of type [HTMLElement]`);
      }
    });
  }
}

export default Validate;
