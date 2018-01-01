import DomFactory from './domFactory';

/* global describe, beforeEach, it, expect, document */

describe('DomFactory class', () => {
  let domFactory;

  beforeEach(() => {
    domFactory = new DomFactory(document);
  });

  it('Can be instantiated', () => {
    expect(domFactory).toEqual(expect.anything());
  });

  describe('appendTo static method', () => {
    it('Can append an Array of one node to a parent', () => {
      const parent = document.createElement('div');
      const child = document.createElement('p');

      expect(parent.childElementCount).toEqual(0);
      expect(parent.childNodes).not.toContain(child);
      DomFactory.appendTo(parent, [child]);
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
      DomFactory.appendTo(parent, [childFirst, childSecond, childThird]);
      expect(parent.childNodes).toContain(childFirst);
      expect(parent.childNodes).toContain(childSecond);
      expect(parent.childNodes).toContain(childThird);
      expect(parent.childElementCount).toEqual(3);
    });

    it('Throws no error when childArray is empty Array', () => {
      const parent = document.createElement('div');
      expect(parent.childElementCount).toEqual(0);
      DomFactory.appendTo(parent, []);
      expect(parent.childElementCount).toEqual(0);
    });

    it('Throws no error when childArray is null', () => {
      const parent = document.createElement('div');
      expect(parent.childElementCount).toEqual(0);
      DomFactory.appendTo(parent);
      expect(parent.childElementCount).toEqual(0);
    });

    it('Throws appropriate error when childArray is not an Array', () => {
      const parent = document.createElement('div');
      const child = 'string';
      const actual = () => { DomFactory.appendTo(parent, child); };
      expect(actual).toThrow('string is not of type [Array]');
    });
  });
});

