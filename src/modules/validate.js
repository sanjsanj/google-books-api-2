/* global HTMLElement */

/**
 * Custom validators for main functions
 */
class Validate {
  /**
   * Throws error if element is not HTMLElement
   * @param {Element} element
   */
  static isHtmlElement(element) {
    if (element instanceof HTMLElement !== true) {
      throw new Error(`${element} is not of type [HTMLElement]`);
    }
  }

  /**
   * Throws error if array is not an Array of HTMLElement(s)
   * @param {Element[]} array Array to be checked
   */
  static isHtmlArray(array) {
    if (Array.isArray(array)) {
      array.map(node => (this.isHtmlElement(node)));
    } else {
      throw new Error(`${array} is not of type [Array]`);
    }
  }
}

export default Validate;
