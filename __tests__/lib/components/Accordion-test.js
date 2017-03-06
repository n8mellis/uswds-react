jest.unmock('../../../lib/components/Accordion.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';

import { Accordion, AccordionItem } from '../../../lib/components/Accordion.jsx';

describe('Accordion', () => {

  let accordion = null;

  beforeEach(function() {
    accordion = mount(
      <Accordion>
        <AccordionItem title="First Amendment">
          <p>Congress shall make no law respecting an establishment of ...</p>
        </AccordionItem>
        <AccordionItem>
          <span>Second Amendment</span>
          <p>A well regulated Militia, being necessary to the security ...</p>
        </AccordionItem>
      </Accordion>
    );
  });

  it('is defined', () => {
    expect(accordion).toBeDefined();
  });

  it('is a ul element', () => {
    expect(accordion.type()).toEqual(Accordion);
    expect(accordion.getDOMNode().tagName.toLowerCase()).toEqual('ul');
  });

  it('has two items', () => {
    expect(accordion.find('AccordionItem').length).toEqual(2);
  });

  it('supports setting the title as a prop', () => {
    let text = "First Amendment";
    expect(accordion.find('AccordionItem').at(0).prop('title')).toEqual(text);
    expect(accordion.find('AccordionItem').at(0).find('button span').first().text()).toEqual(text);
  });

  it('supports setting the title as a child element', () => {
    let text = "Second Amendment";
    expect(accordion.find('AccordionItem').at(1).find('button span').first().text()).toEqual(text);
  });

  it('shows the content for the first item by default', () => {
    expect(accordion.state("activeIndex")).toEqual(0);
    expect(accordion.find("AccordionItem").at(0).prop("contentVisible")).toBeTruthy();
  });

  it("shows the content for the second item when clicked", () => {
    let firstItem = accordion.find("AccordionItem").at(0);
    let secondItem = accordion.find("AccordionItem").at(1);
    expect(firstItem.prop("contentVisible")).toBeTruthy();
    expect(secondItem.prop("contentVisible")).toBeFalsy();
    secondItem.find("button").simulate("click");
    expect(secondItem.prop("contentVisible")).toBeTruthy();
    expect(firstItem.prop("contentVisible")).toBeFalsy();
  });

  it("should throw an exception if no title or 2 elements are provided", () => {
    expect(() => {
      mount(
        <Accordion>
          <AccordionItem>
            <p>Congress shall make no law respecting an establishment of ...</p>
          </AccordionItem>
        </Accordion>
      );
    }).toThrowError();
  });

  it("show throw if child has more than 2 child nodes", () => {
    expect(() => {
      mount(
        <Accordion>
          <AccordionItem>
            <span>Second Amendment</span>
            <p>A well regulated Militia, being necessary to the security ...</p>
            <p>Unsupported 3rd child</p>
          </AccordionItem>
        </Accordion>
      );
    }).toThrowError();
  });

  it("should collapse an expanded element if clicked again", () => {
    let firstItem = accordion.find("AccordionItem").at(0);
    let secondItem = accordion.find("AccordionItem").at(1);
    expect(firstItem.prop("contentVisible")).toBeTruthy();
    expect(secondItem.prop("contentVisible")).toBeFalsy();
    firstItem.find("button").simulate("click");
    expect(firstItem.prop("contentVisible")).toBeFalsy();
    expect(secondItem.prop("contentVisible")).toBeFalsy();
  });

  it("should have no expanded items if 'startCollapsed' is passed as a prop", () => {
    accordion = mount(
      <Accordion startCollapsed>
        <AccordionItem title="First Amendment">
          <p>Congress shall make no law respecting an establishment of ...</p>
        </AccordionItem>
        <AccordionItem>
          <span>Second Amendment</span>
          <p>A well regulated Militia, being necessary to the security ...</p>
        </AccordionItem>
      </Accordion>
    );
    expect(accordion.find("AccordionItem").at(0).prop("contentVisible")).toBeFalsy();
    expect(accordion.find("AccordionItem").at(1).prop("contentVisible")).toBeFalsy();
  });

});
