/* global document, fetch */

import DomFactory from './modules/domFactory.js';

const domFactory = new DomFactory(document);
const container = document.getElementById('container');

fetch('https://www.googleapis.com/books/v1/volumes?maxResults=20&orderBy=newest&q={javascript}')
  .then(response => response.json())
  .then((data) => {
    const { items } = data;

    items.map((item) => {
      const itemElement = domFactory.createElement({ type: 'item' });
      const imageElement = domFactory.createElement({ type: 'image', item });
      const titleElement = domFactory.createElement({ type: 'title', item });
      const descriptionElement = domFactory.createElement({ type: 'description', item });

      domFactory.appendTo(itemElement, [imageElement, titleElement, descriptionElement]);
      domFactory.appendTo(container, [itemElement]);
    });
  })
  .catch(error => console.log(`Response not OK: ${error}`));
