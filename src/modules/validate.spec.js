import Validate from './validate';

/* global describe, it, expect */

describe('Validate class', () => {
  describe('isHtmlElement method', () => {
    it('Throws appropriate error when parent is null', () => {
      const actual = () => { Validate.isHtmlElement(); };
      expect(actual).toThrow('undefined is not of type [HTMLElement]');
    });

    it('Throws appropriate error when parent is not an HTML node', () => {
      const actual = () => { Validate.isHtmlElement('string'); };
      expect(actual).toThrow('string is not of type [HTMLElement]');
    });
  });

  describe('isHtmlArray method', () => {
    it('Throws appropriate error when childArray is null', () => {
      const actual = () => { Validate.isHtmlArray(); };
      expect(actual).toThrow('undefined is not of type [Array]');
    });

    it('Throws no error when childArray is empty Array', () => {
      const actual = () => { Validate.isHtmlArray([]); };
      expect(actual).not.toThrow();
    });

    it('Throws appropriate error when childArray is not an Array', () => {
      const actual = () => { Validate.isHtmlArray('string'); };
      expect(actual).toThrow('string is not of type [Array]');
    });

    it('Throws appropriate error when childArray does not contain HTML node(s)', () => {
      const actual = () => { Validate.isHtmlArray(['string']); };
      expect(actual).toThrow('string is not of type [HTMLElement]');
    });
  });
});
