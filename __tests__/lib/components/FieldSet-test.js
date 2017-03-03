jest.unmock('../../../lib/components/FieldSet.jsx');

import React from 'react';
import { mount } from 'enzyme';

import FieldSet from '../../../lib/components/FieldSet.jsx';
import Checkbox from '../../../lib/components/Checkbox.jsx';

describe('FieldSet', () => {

  let wrapper = null;
  const legend = 'Legend test';
  const name = 'Name test';

  beforeEach(function() {
    wrapper = mount(
      <FieldSet legend={legend} name={name}>
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
      </FieldSet>
    );
  });

  it('is defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders the legend', () => {
    expect(wrapper.find('legend').text()).toBe(legend);
  });

  it('changes the name attribute of all its children', () => {
    let children = wrapper.find('input');
    children.forEach((child) => {
      expect(child.props().name).toBe(name);
    });
  });
});
