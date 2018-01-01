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
});
