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

  /**
   * Create and return an HTMLElement based on itemObject arg
   * @param {Object} itemObject
   */
  createElement(itemObject) {
    let element;

    switch (itemObject.type) {
      case 'item': {
        element = this.document.createElement('div');
        element.className = itemObject.type;
        break;
      }
      case 'image': {
        element = this.document.createElement('img');
        element.className = itemObject.type;
        element.src = itemObject.item.volumeInfo.imageLinks.smallThumbnail;
        element.alt = itemObject.item.volumeInfo.title;
        break;
      }
      case 'title': {
        element = this.document.createElement('p');
        element.className = itemObject.type;
        element.innerHTML = itemObject.item.volumeInfo.title;
        break;
      }
      case 'description': {
        element = this.document.createElement('p');
        element.className = itemObject.type;
        element.innerHTML = itemObject.item.volumeInfo.description.substring(0, 199);
        element.innerHTML += '...';
        break;
      }
      default:
        break;
    }

    return element;
  }
}

export default DomFactory;
