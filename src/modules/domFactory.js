import Validate from './validate.js';

/**
 * A factory class that provides common DOM elements
 */
class DomFactory {
  /**
   * @param {Document} document
   */
  constructor(document) {
    this.document = document;
  }

  /**
   * Appends an array of HTML node(s) to a parent
   * @param {Element} parent HTML node
   * @param {Element[]} childArray Array of HTML node(s)
   */
  static appendTo(parent, childArray = []) {
    Validate.isArray(childArray);

    childArray.map((node) => {
      parent.appendChild(node);
    });
  }
}

export default DomFactory;
