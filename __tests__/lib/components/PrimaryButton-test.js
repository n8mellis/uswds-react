jest.unmock('../../../lib/components/PrimaryButton.jsx');

import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import PrimaryButton from '../../../lib/components/PrimaryButton.jsx';

describe('PrimaryButton', () => {

  let buttonItem = null;

  const text = 'Test Label';

  beforeEach(function() {
    buttonItem = shallow(<PrimaryButton text={text} />);
  });

  it('is defined', () => {
    expect(buttonItem).toBeDefined();
  });

  it('is a button element', () => {
    expect(buttonItem.type()).toEqual('button');
  });

  it('is has specified text', () => {
    expect(buttonItem.text()).toEqual(text);
  });

  it('is has a active class', () => {
    buttonItem = shallow(<PrimaryButton text={text} status={PrimaryButton.STATUS_ACTIVE} />);
    expect(buttonItem.hasClass('usa-button-active')).toBe(true);
  });

  it('is has a hover class', () => {
    buttonItem = shallow(<PrimaryButton text={text} status={PrimaryButton.STATUS_HOVER} />);
    expect(buttonItem.hasClass('usa-button-hover')).toBe(true);
  });

  it('is has a disabled status', () => {
    buttonItem = shallow(<PrimaryButton text={text} disabled={true} />);
    expect(buttonItem.hasClass('usa-button-disabled')).toBe(true);
    expect(buttonItem.prop('disabled')).toBeDefined();
  });

  it('is has a big class', () => {
    buttonItem = shallow(<PrimaryButton text={text} size={PrimaryButton.SIZE_BIG} />);
    expect(buttonItem.hasClass('usa-button-big')).toBe(true);
  });

  it('handles onClick', () => {
    var onClick = sinon.spy();
    buttonItem = shallow(<PrimaryButton text={text} onClick={onClick} />);
    buttonItem.find('button').simulate('click');
    expect(onClick.called).toBeDefined();
  });
});
