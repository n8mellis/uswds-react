import React from "react";
import NameForm from "../../lib/components/NameForm";
import AddressForm from "../../lib/components/AddressForm";
import BaseContainer from "./BaseContainer";

/**
 * Form Templates content
 */
export default class FormTemplatesContainer extends React.Component
{
  /**
   * Renders the node
   * @returns {node} the rendered DOM node
   */
  render()
  {
    return (
      <BaseContainer {...this.props}>
        <section id="name-form">  
          <h2 className="usa-heading heading-margin-alt" id="name-form">Name Form</h2>
          <p className="usa-font-lead">A standard template for collecting a person’s full name</p>
          <div className="preview">
            <NameForm />
          </div>
        </section>
        <section id="address-form">  
          <h2 className="usa-heading heading-margin-alt" id="address-form">Address Form</h2>
          <p className="usa-font-lead">A standard template for entering a U.S. mailing or shipping address</p>
          <div className="preview">
            <AddressForm />
          </div>
        </section>
        <section id="signin-form">  
          <h2 className="usa-heading heading-margin-alt" id="signin-form">Sign-in Form</h2>
          <p className="usa-font-lead">A template for signing a user into a website or app</p>
          <div className="preview">
            
          </div>
        </section>
        <section id="pwd-form">  
          <h2 className="usa-heading heading-margin-alt" id="pwd-form">Password reset form</h2>
          <p className="usa-font-lead">A standard template for resetting a password</p>
          <div className="preview">
            
          </div>
        </section>
      </BaseContainer>
    );
  }
}

FormTemplatesContainer.defaultProps = {
  title: "Form templates",
  summary: "Patterns for some of the most commonly used forms on government websites."
};
