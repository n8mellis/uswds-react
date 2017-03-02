jest.unmock('../../../lib/components/Label.jsx');

import React from 'react';
import {shallow} from 'enzyme';

import Label from '../../../lib/components/Label.jsx';

describe('Label', () => {

  let wrapper = null;

  const text = 'Test';

  beforeEach(function() {
    wrapper = shallow(<Label>{text}</Label>);
  });

  it('is defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders without throwing an error', () => {
    expect(wrapper.contains(<span className="usa-label">{text}</span>)).toBe(true);
  });

  it('is a span element', () => {
    expect(wrapper.type()).toEqual('span');
  });

  it('has specified text', () => {
    expect(wrapper.text()).toEqual(text);
  });

  it('has the correct class', () => {
    expect(wrapper.hasClass('usa-label')).toBe(true);
  });

  it('has the correct class when size="big"', () => {
    wrapper = shallow(<Label size="big">{text}</Label>);
    expect(wrapper.hasClass('usa-label-big')).toBe(true);
  });
});
