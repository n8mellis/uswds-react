import React from "react";

import BaseContainer from "./BaseContainer";

import PrimaryButton from "../../lib/components/PrimaryButton"

/**
 * Displays the Styleguide content for Buttons.
 */
export default class ButtonsContainer extends React.Component
{
  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render()
  {
    return (
      <BaseContainer {...this.props}>
        <h6>Primary Buttons</h6>
        <div className="button_wrapper">
          <PrimaryButton text={'Default'} />
          <PrimaryButton text={'Active'} status={PrimaryButton.STATUS_ACTIVE} />
          <PrimaryButton text={'Hover'} status={PrimaryButton.STATUS_HOVER} />
        </div>
        <h6>Disabled Button</h6>
        <div className="button_wrapper">
          <PrimaryButton text={'Default'} status={PrimaryButton.STATUS_DISABLED} />
        </div>
        <h6>Big Button</h6>
        <div className="button_wrapper">
          <PrimaryButton text={'Default'} size={PrimaryButton.SIZE_BIG} />
        </div>
      </BaseContainer>
    );
  }
}

ButtonsContainer.defaultProps = {
  title: "Buttons",
  summary: "Use buttons to signal actions."
};
