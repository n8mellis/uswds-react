jest.unmock('../../../lib/components/Alert.jsx');

import React from 'react';
// import TestUtils from 'react-addons-test-utils';
import { shallow } from 'enzyme';

import Alert from '../../../lib/components/Alert.jsx';

describe('Alert', () => {

  let wrapper = null;

  const alertTitle = 'Title goes here';
  const alertText = 'Body goes here';

  beforeEach(function() {
    wrapper = shallow(<Alert title={alertTitle} body={alertText}/>);
  });

  it('is defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders the title correctly', () => {
    const titleElement = wrapper.find('.usa-alert-heading');
    expect(titleElement.text()).toBe(alertTitle);
  });

  it('renders the body text correctly', () => {
    const titleElement = wrapper.find('.usa-alert-text');
    expect(titleElement.text()).toBe(alertText);
  });

  it('has the correct class when type="info"', () => {
    wrapper = shallow(<Alert type="info" title={alertTitle} body={alertText}/>);
    expect(wrapper.hasClass('usa-alert-info')).toBe(true);
  });

  it('has the correct class when type="success"', () => {
    wrapper = shallow(<Alert type="success" title={alertTitle} body={alertText}/>);
    expect(wrapper.hasClass('usa-alert-success')).toBe(true);
  });

  it('has the correct class when type="error"', () => {
    wrapper = shallow(<Alert type="error" title={alertTitle} body={alertText}/>);
    expect(wrapper.hasClass('usa-alert-error')).toBe(true);
  });

  it('has the correct class when type="warning"', () => {
    wrapper = shallow(<Alert type="warning" title={alertTitle} body={alertText}/>);
    expect(wrapper.hasClass('usa-alert-warning')).toBe(true);
  });

  it('has no Aria role by default', () => {
    expect(wrapper.props().role).toBe(undefined);
  });

  it('has the Aria role when role="alert"', () => {
    wrapper = shallow(<Alert role="alert" title={alertTitle} body={alertText}/>);
    expect(wrapper.props().role).toBe('alert');
  });

  it('has the Aria role when role="alertdialog"', () => {
    wrapper = shallow(<Alert role="alertdialog" title={alertTitle} body={alertText}/>);
    expect(wrapper.props().role).toBe('alertdialog');
  });
});
