import Validate from './validate.js';

/**
 * A factory class that provides common DOM elements
 */
class DomFactory {
  /**
   * @param {Document} document The global/window document
   * @param {?Class} validate The Validate Class
   */
  constructor(document, validate = Validate) {
    this.validate = validate;
    this.document = document;
  }

  /**
   * Appends an array of HTML node(s) to a parent
   * @param {Element} parent HTML node
   * @param {?Element[]} childArray Array of HTML node(s)
   */
  appendTo(parent, childArray) {
    this.validate.isHtmlElement(parent);
    this.validate.isHtmlArray(childArray);

    childArray.map((node) => {
      parent.appendChild(node);
    });
  }
}

export default DomFactory;
