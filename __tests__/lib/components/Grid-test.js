jest.unmock('../../../lib/components/Grid.jsx');

import React from 'react';
// import TestUtils from 'react-addons-test-utils';
import { mount } from 'enzyme';

import { Grid, Col } from '../../../lib/components/Grid.jsx';

describe('Grid', () => {

  let wrapper = null;

  it('is defined', () => {
    wrapper = mount(
      <Grid>
        <Col width="1/2"></Col>
        <Col width="6"></Col>
      </Grid>
    );
    expect(wrapper).toBeDefined();
  });

  it('has the usa-grid class', () => {
    wrapper = mount(
      <Grid>
        <Col width="1/2"></Col>
        <Col width="6"></Col>
      </Grid>
    );
    expect(wrapper.hasClass('usa-grid')).toBe(true);
  });
  
  it('has the usa-grid-full class', () => {
    wrapper = mount(
      <Grid full>
        <Col width="1/2"></Col>
        <Col width="6"></Col>
      </Grid>
    );
    expect(wrapper.hasClass('usa-grid-full')).toBe(true);
  });
  
  it('sets width to one-half', () => {
    wrapper = mount(
      <Grid>
        <Col width="1/2"></Col>
        <Col width="6"></Col>
      </Grid>
    );
    expect(wrapper.find('.usa-width-one-half').length).toBe(2);
  });
  
  it('sets width to one-third', () => {
    wrapper = mount(
      <Grid>
        <Col width="1/3"></Col>
        <Col width="4"></Col>
      </Grid>
    );
    expect(wrapper.find('.usa-width-one-third').length).toBe(2);
  });
  
  it('sets width to one-fourth', () => {
    wrapper = mount(
      <Grid>
        <Col width="1/4"></Col>
        <Col width="3"></Col>
      </Grid>
    );
    expect(wrapper.find('.usa-width-one-fourth').length).toBe(2);
  });
  
  it('sets width to one-sixth', () => {
    wrapper = mount(
      <Grid>
        <Col width="1/6"></Col>
        <Col width="2"></Col>
      </Grid>
    );
    expect(wrapper.find('.usa-width-one-sixth').length).toBe(2);
  });
  
  it('sets width to one-twelfth', () => {
    wrapper = mount(
      <Grid>
        <Col width="1/12"></Col>
        <Col width="1"></Col>
      </Grid>
    );
    expect(wrapper.find('.usa-width-one-twelfth').length).toBe(2);
  });
});
