jest.unmock('../../../lib/components/Checkbox.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { mount } from 'enzyme';

import Checkbox from '../../../lib/components/Checkbox.jsx';

describe('Checkbox', () => {

  let checkboxItem = null;
  const checkboxLabel = 'label goes here';


  beforeEach(function() {
    checkboxItem = mount(<Checkbox label={checkboxLabel} />);
  });

  it('is defined', () => {
    expect(checkboxItem).toBeDefined();
  });

  it('renders the label text correctly', () => {
    const labelElement = checkboxItem.find('label');
    expect(labelElement.text()).toBe(checkboxLabel);
  });

  it('has an id attribute', () => {
    expect(typeof checkboxItem.find('input').props().id).toBe('string');
  });

  it('has an id attribute', () => {
    expect(typeof checkboxItem.find('input').props().id).toBe('string');
  });

  it('has a matching id and htmlFor attributes', () => {
    const inputId = checkboxItem.find('input').props().id;
    const labelHtmlFor = checkboxItem.find('label').props().htmlFor;
    expect(labelHtmlFor).toBe(inputId);
  });

  it('has a default value property', () => {
    const inputId = checkboxItem.find('input').props().id;
    const inputValue = checkboxItem.find('input').props().value;
    expect(inputValue).toBe(inputId);
  });

  it('accepts a value property', () => {
    const testValue = 'testing';
    checkboxItem = mount(<Checkbox value={testValue} label={checkboxLabel} />);
    const inputValue = checkboxItem.find('input').props().value;
    expect(inputValue).toBe(testValue);
  });

  it('has a default name property', () => {
    const inputName = checkboxItem.find('input').props().name;
    expect(inputName).toBe('checkboxes');
  });

  it('accepts a name property', () => {
    const testValue = 'testing';
    checkboxItem = mount(<Checkbox name={testValue} label={checkboxLabel} />);
    const inputName = checkboxItem.find('input').props().name;
    expect(inputName).toBe(testValue);
  });

  it('has a default checked property', () => {
    const inputChecked = checkboxItem.find('input').props().checked;
    expect(inputChecked).toBe(false);
  });

  it('accepts the checked property', () => {
    checkboxItem = mount(<Checkbox checked label={checkboxLabel} />);
    const inputChecked = checkboxItem.find('input').props().checked;
    expect(inputChecked).toBe(true);
  });

  it('is not disabled by default', () => {
    const inputDisabled = checkboxItem.find('input').props().disabled;
    expect(inputDisabled).toBe(false);
  });

  it('accepts the disabled property', () => {
    checkboxItem = mount(<Checkbox disabled label={checkboxLabel} />);
    const inputDisabled = checkboxItem.find('input').props().disabled;
    expect(inputDisabled).toBe(true);
  });
});
