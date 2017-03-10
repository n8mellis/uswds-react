jest.unmock('../../../lib/components/Checkbox.jsx');

import React from 'react';
import { mount } from 'enzyme';

import Checkbox from '../../../lib/components/Checkbox.jsx';

describe('Checkbox', () => {

  let wrapper = null;
  const checkboxLabel = 'label goes here';


  beforeEach(function() {
    wrapper = mount(<Checkbox label={checkboxLabel} />);
  });

  it('is defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders the label text correctly', () => {
    const labelElement = wrapper.find('label');
    expect(labelElement.text()).toBe(checkboxLabel);
  });

  it('has an id attribute', () => {
    expect(typeof wrapper.find('input').props().id).toBe('string');
  });

  it('has a matching id and htmlFor attributes', () => {
    const inputId = wrapper.find('input').props().id;
    const labelHtmlFor = wrapper.find('label').props().htmlFor;
    expect(labelHtmlFor).toBe(inputId);
  });

  it('has a default value property', () => {
    const id = wrapper.find('input').props().id;
    const value = wrapper.find('input').props().value;
    expect(value).toBe(id);
  });

  it('accepts a value property', () => {
    const testValue = 'testing';
    wrapper = mount(<Checkbox value={testValue} label={checkboxLabel} />);
    const inputValue = wrapper.find('input').props().value;
    expect(inputValue).toBe(testValue);
  });

  it('has a default name property', () => {
    const inputName = wrapper.find('input').props().name;
    expect(inputName).toBe('checkboxes');
  });

  it('accepts a name property', () => {
    const testValue = 'testing';
    wrapper = mount(<Checkbox name={testValue} label={checkboxLabel} />);
    const inputName = wrapper.find('input').props().name;
    expect(inputName).toBe(testValue);
  });

  it('it is not checked by default', () => {
    const inputChecked = wrapper.find('input').props().defaultChecked;
    expect(inputChecked).toBe(false);
  });

  it('accepts the defaultChecked property', () => {
    wrapper = mount(<Checkbox defaultChecked label={checkboxLabel} />);
    const inputChecked = wrapper.find('input').props().defaultChecked;
    expect(inputChecked).toBe(true);
  });

  it('is not disabled by default', () => {
    const inputDisabled = wrapper.find('input').props().disabled;
    expect(inputDisabled).toBe(false);
  });

  it('accepts the disabled property', () => {
    wrapper = mount(<Checkbox disabled label={checkboxLabel} />);
    const inputDisabled = wrapper.find('input').props().disabled;
    expect(inputDisabled).toBe(true);
  });
});
