jest.unmock('../../../lib/components/TextInput.jsx');

import React from 'react';
import { mount } from 'enzyme';

import TextInput from '../../../lib/components/TextInput.jsx';

describe('TextInput', () => {

  let wrapper = null;
  const label = 'label goes here';


  beforeEach(function() {
    wrapper = mount(<TextInput label={label} />);
  });

  it('is defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders the label text correctly', () => {
    const labelElement = wrapper.find('label');
    expect(labelElement.text()).toBe(label);
  });

  it('has an id attribute', () => {
    expect(typeof wrapper.find('input').props().id).toBe('string');
  });

  it('has a matching id and htmlFor attributes', () => {
    const id = wrapper.find('input').props().id;
    const labelHtmlFor = wrapper.find('label').props().htmlFor;
    expect(labelHtmlFor).toBe(id);
  });

  it('accepts a value property', () => {
    const testValue = 'testing';
    wrapper = mount(<TextInput value={testValue} label={label} />);
    const value = wrapper.find('input').props().value;
    expect(value).toBe(testValue);
  });

  it('accepts the required proprty', () => {
    wrapper = mount(<TextInput required label={label} />);
    expect(wrapper.find('label').hasClass('usa-input-required')).toBe(true);
  });

  // Test _handleBlur TK
  // Test _handleChange TK
});
