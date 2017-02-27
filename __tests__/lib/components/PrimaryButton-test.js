jest.unmock('../../../lib/components/PrimaryButton.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import PrimaryButton from '../../../lib/components/PrimaryButton.jsx';

describe('PrimaryButton', () => {

  let buttonItem = null;

  const text = 'Test Label';

  beforeEach(function() {
    buttonItem = TestUtils.renderIntoDocument(<PrimaryButton text={text} />);
  });

  it('is defined', () => {
    expect(buttonItem).toBeDefined();
  });

  it('is a label element', () => {
    let node = ReactDOM.findDOMNode(buttonItem);
    expect(node.tagName).toBe('BUTTON');
  });

  it('is has specified text', () => {
    let node = ReactDOM.findDOMNode(buttonItem);
    expect(node.textContent).toEqual(text);
  });

  it('is has a active class', () => {
    buttonItem = TestUtils.renderIntoDocument(<PrimaryButton text={text} status={'active'} />);
    let node = ReactDOM.findDOMNode(buttonItem);
    expect(node.classList).toContain('usa-button-active');
  });

  it('is has a hover class', () => {
    buttonItem = TestUtils.renderIntoDocument(<PrimaryButton text={text} status={'hover'} />);
    let node = ReactDOM.findDOMNode(buttonItem);
    expect(node.classList).toContain('usa-button-hover');
  });

  it('is has a disabled status', () => {
    buttonItem = TestUtils.renderIntoDocument(<PrimaryButton text={text} status={'disabled'} />);
    let node = ReactDOM.findDOMNode(buttonItem);
    expect(node.classList).toContain('usa-button-disabled');

    for (var i = 0; i < node.attributes.length; i++) {

      if (node.attributes[i].name == 'disabled') {
        expect(node.attributes[i].name).toEqual('disabled');
        break;
      }
    }
  });
  it('is has a big class', () => {
    buttonItem = TestUtils.renderIntoDocument(<PrimaryButton text={text} size={'big'} />);
    let node = ReactDOM.findDOMNode(buttonItem);
    expect(node.classList).toContain('usa-button-big');
  });
});
