jest.unmock('../../../lib/components/Tables.jsx');

import React from 'react';
import { mount } from 'enzyme';

import { Table } from '../../../lib/components/Tables.jsx';

describe('Tables', () => {

  let wrapper = null;
  const cols = [
    {
      colId: 'one',
      displayName: 'Column one'
    },
    {
      colId: 'two',
      displayName: 'Column two'
    },
    {
      colId: 'Column three'
    }
  ];
  const data = [
    {
      one: 123,
      two: 'test',
      'Column three': '456'
    },
    {
      one: 789,
      two: 'test2',
      'Column three': '10 11 12'
    }
  ];

  beforeEach(function() {
    wrapper = mount(<Table caption="test caption" columns={cols} data={data} />);
  });

  it('is defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders the caption', () => {
    const caption = wrapper.find('caption');
    expect(caption.text()).toBe('test caption');
  });

  it('has borders by default', () => {
    expect(wrapper.hasClass('usa-table-borderless')).toBe(false);
  });

  it('accepts the borderless prop', () => {
    wrapper = mount(<Table borderless columns={cols} data={data} />);
    expect(wrapper.hasClass('usa-table-borderless')).toBe(true);
  });

  it('renders column headers', () => {
    expect(wrapper.find('thead').find('th').length).toBe(3);
  });

  it('renders rows', () => {
    expect(wrapper.find('tbody').find('tr').length).toBe(2);
  });

  it('renders cells in rows', () => {
    expect(wrapper.find('tbody').find('td').length).toBe(4);
  });

  it('renders headers in rows', () => {
    expect(wrapper.find('tbody').find('th').length).toBe(2);
  });

  it('renders rwo header text', () => {
    let cellText = [];
    wrapper.find('tbody').find('th').map((node) => {
      cellText.push(node.text());
    });
    expect(cellText).toContain('123', '789');
  });

  it('renders header cell text', () => {
    let cellText = [];
    wrapper.find('thead').find('th').map((node) => {
      cellText.push(node.text());
    });
    expect(cellText).toContain('Column one', 'Column two', 'Column three');
  });

  it('renders text in cells', () => {
    let cellText = [];
    wrapper.find('tbody').find('td').map((node) => {
      cellText.push(node.text());
    });
    expect(cellText).toContain('test', '456', 'test2', '10 11 12');
  });
});
