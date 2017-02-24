import React from 'react';
import TextInput from '../../lib/components/TextInput';
import validators from '../../lib/utils/validators';
import BaseContainer from "./BaseContainer";

export default class FormControlsContainer extends React.Component {
  render() {
    return (
      <BaseContainer {...this.props}>
        <div id="01-text-input">
          <h2 className="usa-heading heading-margin-alt" id="text-input">Text input</h2>
          <p className="usa-font-lead">Text inputs allow people to enter any combination of letters, numbers, or symbols of their choosing (unless otherwise restricted). Text input boxes can span single or multiple lines.</p>
          <div className="preview">
            <TextInput
              label="Text input label"
              id="firstInput"/>
            
            <TextInput
              label="This input is required"
              id="secondInput"
              required />
            
            <TextInput
              label="Must have an 'A' and an 'e'"
              id="thirdInput"
              value="Ave"
              isValid
              validators={[validators.hasLowercaseE, validators.hasUppercaseA]} />
            
              <TextInput
                label="Enter only numbers"
                id="nums"
                value="666"
                errorMessage="These are bad numbers"
                allowedChars={validators.onlyNumbers}
                validators={[validators.noSatan]} />
          </div>
          
          <div>
            <h5>Example usage</h5>
            <pre><code>
              {`<TextInput
  label="ZIP code"
  id="zip"
  required
  allowedChars={validators.onlyNumbers}
  validators={[validators.zipCode]} />`}
            </code></pre>
            <h5>Required props</h5>
            <ul>
              <li><code>lable</code> <em>string</em> — Text for the input's label</li>
              <li><code>id</code> <em>string</em> — sets the input's <code>id</code> attribute the label's <code>for</code> attribute. Required for 508 compliance.</li>
            </ul>
            
            <h5>Optional props</h5>
            <ul>
              <li>
                <code>value</code> <em>string</em> — If present pre-populates the input with the given string
              </li>
              <li>
                <code>required</code> <em>bool</em> — defaults to false. Adds required label, required attribute and aria-required='true'
              </li>
              <li>
                <code>errorMessage</code> <em>string</em> — If present, triggers the error state and displays the error message
              </li>
              <li>
                <code>isValid</code> <em>bool</em> — If true, sets the valid state (green border)
              </li>
              <li>
                <code>allowedChars</code> <em>Validator object</em> — If present, user can only type characters that match the given test
              </li>
              <li>
                <code>validators</code> <em>array of Validator objects</em> — If present, field get error state onBlur if the value does not match the given test
              </li>
              <li>
                <code>spellCheck</code> <em>bool</em> — defaults to false. If true, enables browser autocorrection while typing
              </li>
            </ul>
          </div>
        </div>
      </BaseContainer>
    );
  }
}

FormControlsContainer.defaultProps = {
  title: "Form controls",
  summary: "Form controls allow users to enter information into a page."
};
