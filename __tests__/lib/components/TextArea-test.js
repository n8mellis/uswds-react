jest.unmock('../../../lib/components/TextArea.jsx');

import React from 'react';
import { mount } from 'enzyme';

import TextArea from '../../../lib/components/TextArea.jsx';

describe('TextArea', () => {

  let wrapper = null;
  const label = 'label goes here';


  beforeEach(function() {
    wrapper = mount(<TextArea label={label} />);
  });

  it('is defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders the label text correctly', () => {
    const labelElement = wrapper.find('label');
    expect(labelElement.text()).toBe(label);
  });

  it('has an id attribute', () => {
    expect(typeof wrapper.find('textarea').props().id).toBe('string');
  });

  it('has a matching id and htmlFor attributes', () => {
    const id = wrapper.find('textarea').props().id;
    const labelHtmlFor = wrapper.find('label').props().htmlFor;
    expect(labelHtmlFor).toBe(id);
  });

  it('accepts a value property', () => {
    const testValue = 'testing';
    wrapper = mount(<TextArea value={testValue} label={label} />);
    const value = wrapper.find('textarea').props().value;
    expect(value).toBe(testValue);
  });

  it('accepts the required proprty', () => {
    wrapper = mount(<TextArea required label={label} />);
    expect(wrapper.find('label').hasClass('usa-input-required')).toBe(true);
  });

  // Test _handleBlur TK
  // Test _handleChange TK
});
