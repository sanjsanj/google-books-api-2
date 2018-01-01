import DomFactory from './domFactory';

/* global describe, jest, beforeEach, it, expect, document */

describe('DomFactory class', () => {
  let domFactory;
  let validateMock;

  beforeEach(() => {
    validateMock = jest.fn();
    validateMock.isHtmlArray = jest.fn();
    validateMock.isHtmlElement = jest.fn();
    domFactory = new DomFactory(document, validateMock);
  });

  it('Can be instantiated', () => {
    expect(domFactory).toEqual(expect.anything());
  });

  describe('appendTo method', () => {
    it('Can append an Array of one node to a parent', () => {
      const parent = document.createElement('div');
      const child = document.createElement('p');

      expect(parent.childElementCount).toEqual(0);
      expect(parent.childNodes).not.toContain(child);
      domFactory.appendTo(parent, [child]);
      expect(parent.childElementCount).toEqual(1);
      expect(parent.childNodes).toContain(child);
    });

    it('Can append an Array of multiple nodes to a parent', () => {
      const parent = document.createElement('div');
      const childFirst = document.createElement('h1');
      const childSecond = document.createElement('h2');
      const childThird = document.createElement('p');

      expect(parent.childNodes).not.toContain(childFirst);
      expect(parent.childNodes).not.toContain(childSecond);
      expect(parent.childNodes).not.toContain(childThird);
      expect(parent.childElementCount).toEqual(0);
      domFactory.appendTo(parent, [childFirst, childSecond, childThird]);
      expect(parent.childNodes).toContain(childFirst);
      expect(parent.childNodes).toContain(childSecond);
      expect(parent.childNodes).toContain(childThird);
      expect(parent.childElementCount).toEqual(3);
    });

    it('Calls Validate.isHtmlElement', () => {
      const parent = document.createElement('div');
      const child = document.createElement('p');
      expect(validateMock.isHtmlElement.mock.calls.length).toBe(0);
      domFactory.appendTo(parent, [child]);
      expect(validateMock.isHtmlElement.mock.calls.length).toBe(1);
    });

    it('Calls Validate.isHtmlElement with the parent as an arg', () => {
      const parent = document.createElement('div');
      const child = document.createElement('p');
      domFactory.appendTo(parent, [child]);
      expect(validateMock.isHtmlElement.mock.calls[0][0]).toEqual(parent);
    });

    it('Calls Validate.isHtmlArray', () => {
      const parent = document.createElement('div');
      const child = document.createElement('p');
      expect(validateMock.isHtmlArray.mock.calls.length).toBe(0);
      domFactory.appendTo(parent, [child]);
      expect(validateMock.isHtmlArray.mock.calls.length).toBe(1);
    });

    it('Calls Validate.isHtmlArray with the childArray as an arg', () => {
      const parent = document.createElement('div');
      const child = document.createElement('p');
      domFactory.appendTo(parent, [child]);
      expect(validateMock.isHtmlArray.mock.calls[0][0]).toEqual([child]);
    });
  });
});
