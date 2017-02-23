import React from "react";

import BaseContainer from "./BaseContainer";
import { Accordion, AccordionItem } from "../../lib/components/Accordion";

export default class AccordionsContainer extends React.Component
{
  render()
  {
    return (
      <BaseContainer {...this.props}>
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
      </BaseContainer>
    );
  }
}

AccordionsContainer.defaultProps = {
  title: "Accordions",
  summary: "Accordions are a list of headers that can be clicked to hide or reveal additional content."
};
