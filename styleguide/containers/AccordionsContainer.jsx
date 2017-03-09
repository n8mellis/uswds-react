import React from "react";

import BaseContainer from "./BaseContainer";
import { Accordion, AccordionItem } from "../../lib/components/Accordion";

/**
 * Displays the Styleguide content for Accordions.
 */
export default class AccordionsContainer extends React.Component
{
  /**
   * Renders the preview portion of the container.
   *
   * This method overrides the superclass.
   *
   * @returns {Node}
   */
  renderPreview()
  {
    return (
      <div>
        <h6>Borderless</h6>
        <Accordion>
          <AccordionItem title="First Amendment">
            <p>
              Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.
            </p>
          </AccordionItem>
          <AccordionItem title="Second Amendment">
            <p>
              A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.
            </p>
          </AccordionItem>
          <AccordionItem>
            <span>Third Amendment</span>
            <p>
              No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.
            </p>
          </AccordionItem>
        </Accordion>

        <h6>Bordered</h6>
        <Accordion type={Accordion.TYPE_BORDERED}>
          <AccordionItem title="First Amendment">
            <p>
              Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.
            </p>
          </AccordionItem>
          <AccordionItem title="Second Amendment">
            <p>
              A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.
            </p>
          </AccordionItem>
          <AccordionItem>
            <span>Third Amendment</span>
            <p>
              No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }

  /**
   * Renders the sample code portion of the container.
   *
   * This method overrides the superclass.
   *
   * @returns {Node}
   */
  renderSampleCode()
  {
    return (
      <div>&nbsp;</div>
    );
  }

  /**
   * Renders the documentation portion of the container.
   *
   * This method overrides the superclass.
   *
   * @returns {Node}
   */
  renderDocumentation()
  {
    return (
      <div>
        <h4 className="usa-heading">Accessibility</h4>
        <ul className="usa-content-list">
          <li>
            Code header areas in the accordion as <code>&lt;buttons&gt;</code> so that they are usable with both screen readers and the keyboard.
          </li>
          <li>
            Buttons should state if they are expanded with <code>aria-expanded=<wbr/>"true"</code>. The <code>aria-expanded=<wbr/>"false"</code> attributes will be added to other buttons when the accordion is initialized by the JavaScript.
          </li>
          <li>
            Each button has a unique name <code>aria-controls=<wbr/>"id"</code> that associates the control to the appropriate region by referencing the controlled element&rsquo;s <code>id</code>.
          </li>
          <li>
            Each content area will have its <code>aria-hidden</code> attribute set to either <code>true</code> or <code>false</code> by the component, depending on its corresponding button&rsquo;s <code>aria-expanded</code> attribute. To ensure that your content is accessible in the event that the JavaScript does not load or is disabled, you should not set <code>aria-hidden=<wbr/>"true"</code> on any of your content areas.
          </li>
        </ul>
        <h4 className="usa-heading">Usability</h4>
        <h5>When to use</h5>
        <ul className="usa-content-list">
          <li>Users only need a few specific pieces of content within a page.</li>
          <li>Information needs to be displayed in a small space.</li>
        </ul>
        <h5>When to consider something else</h5>
        <ul className="usa-content-list">
          <li>If visitors need to see most or all of the information on a page. Use well-formatted text instead.</li>
          <li>If there is not enough content to warrant condensing. Accordions increase cognitive load and interaction cost, as users have to make decisions about what headers to click on.</li>
        </ul>
        <h5>Guidance</h5>
        <ul className="usa-content-list">
          <li>Allow users to click anywhere in the header area to expand or collapse the content; a larger target is easier to manipulate.</li>
          <li>Make sure interactive elements within the collapsible region are far enough from the headers that users don’t accidentally trigger a collapse. (The exact distance depends on the device.)</li>
        </ul>
        <a name="deprecated" />
        <h4 className="usa-heading">Upgrading deprecated accordions</h4>
        <p>The accordion was changed July 2016 in order to improve its
           implementation. Currently, both versions of the accordion work, but at some
           point in the future, the deprecated accordion will no longer function correctly.
           To upgrade your existing accordions to the new accordion:</p>
        <ul className="usa-content-list">
          <li>Remove the top level div that contains the <code>usa-accordion</code> or
            <code>usa-accordion-bordered</code> class.</li>
          <li>Add the <code>usa-accordion</code> or <code>usa-accordion-bordered</code>
              class to the <code>ul</code> element that's now at the top level.</li>
        </ul>
      </div>
    );
  }

  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render() {
    return (
      <BaseContainer {...this.props}>
        {this.renderPreview()}
      </BaseContainer>
    );
  }

}

AccordionsContainer.defaultProps = {
  title: "Accordions",
  summary: "Accordions are a list of headers that can be clicked to hide or reveal additional content."
};
