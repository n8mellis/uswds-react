import React, { PropTypes } from 'react';
import Form from './Form';
import TextInput from './TextInput';

/**
 * Class representing a generic Name Form
 *
 * This component returns a <form> with legend and some default Name fields: title, first/middle/last name, suffix
 *
 * Required props:
 * - input: node. Series of field control types
 *
 * Optional props:
 * - legend: string. sets the form legend
 * - id: string. Sets the form's id attribute
 * - inputClass: string. Adds any custom classes to TextInput fields
 */
export default class NameForm extends React.Component {  
/**
   * Constructor.
   *
   * @param {Object} props The props that will be applied to this component.
   */
  constructor(props) {
    super(props);
  }

  render() {

    let legend;
    
    if (this.props.formTitle){
      legend = (<legend className="usa-drop_text">{this.props.formTitle}</legend>)
    }

    return (
      <Form>
        <fieldset className="usa-fieldset-inputs usa-sans">
          <legend>
            {legend}
          </legend>
          
            <TextInput
            className="usa-input-tiny"
            label="Title"
            id="titleName"
             />

            <TextInput
            label="First Name"
            id="firstName"
            required />

            <TextInput
            label="Middle Name"
            id="middleName"
             />

            <TextInput
            label="Last Name"
            id="lastName"
            required />

            <TextInput
            className="usa-input-tiny"
            label="Suffix"
            id="suffixName"
             />
        </fieldset>
      </Form>
    )
  }
}

NameForm.PropTypes = {
  formTitle: PropTypes.string
};

NameForm.defaultProps = {
  formTitle: "Name",
};
