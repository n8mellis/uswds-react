import React from 'react';
import TextInput from '../../lib/components/TextInput';
import TextArea from '../../lib/components/TextArea';
import Dropdown from '../../lib/components/Dropdown';
import Checkbox from '../../lib/components/Checkbox';
import Radio from '../../lib/components/Radio';
import FieldSet from '../../lib/components/FieldSet';
import validators from '../../lib/utils/validators';
import BaseContainer from "./BaseContainer";

export default class FormControlsContainer extends React.Component {
  render() {
    return (
      <BaseContainer {...this.props}>
        <section id="01-text-input">
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
        </section>
        
        <section id="text-area">
          <h2 className="usa-heading heading-margin-alt" id="text-input">Text area</h2>
          <p className="usa-font-lead">Text area is a multi-line plain-text editing control</p>
          
          <div className="preview">
            <TextArea
              label="How did you hear about us?"
              id="textareaOne"
              required />
            <TextArea
              label="How did you hear about us?"
              id="textareaOne"
              errorMessage="Computer says no"
              value="I googled and actually clicked next page several times until I found you" />
          </div>
          
          <div>
            <h5>Example usage</h5>
            <pre><code>
              {`<TextArea label="How did you hear about us?" required />`}
            </code></pre>
            <h5>Required props</h5>
            <ul>
              <li><code>lable</code> <em>string</em> — Text for the label</li>
              <li><code>id</code> <em>string</em> — sets the textarea's <code>id</code> attribute the label's <code>for</code> attribute. Required for 508 compliance.</li>
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
            </ul>
          </div>
        </section>
        
        <section id="02-dropdown">
          <h2 className="usa-heading heading-margin-alt" id="dropdown">Dropdown</h2>
          <p className="usa-font-lead">A dropdown allows users to select one option from a list.</p>
          
          <div className="preview">
            <Dropdown label="Dropdown label" id="dropdownOne" >
              <option value="value1">Option A</option>
              <option value="value2">Option B</option>
              <option value="value3">Option C</option>
            </Dropdown>
            
            <Dropdown label="Dropdown label" id="dropdownTwo" required value={''}>
              <option value="value1">Option A</option>
              <option value="value2">Option B</option>
              <option value="value3">Option C</option>
            </Dropdown>
            
            <Dropdown label="Dropdown label" id="dropdownThree" errorMessage="Wrong choice!" value={'value3'}>
              <option value="value1">Option A</option>
              <option value="value2">Option B</option>
              <option value="value3">Option C</option>
            </Dropdown>
          </div>
          
          <div>
            <h5>Example usage</h5>
            <pre><code>
              {`<Dropdown label="Type of puppy" id="select-puppy">
  <option value="value1">Option A</option>
  <option value="value2">Option B</option>
  <option value="value3">Option C</option>
</Dropdown>`}
            </code></pre>
            <h5>Required props</h5>
            <ul>
              <li><code>lable</code> <em>string</em> — text for the label</li>
              <li><code>id</code> <em>string</em> — sets the select's <code>id</code> attribute the label's <code>for</code> attribute. Required for 508 compliance.</li>
              <li><code>children</code> <em>node</em> — series of <code>option</code> elements</li>
            </ul>
            
            <h5>Optional props</h5>
            <ul>
              <li>
                <code>value</code> <em>string</em> — if this value matches the value of one of the option elements, that becomes the default choice. If you set it to an empty string, a blank disabled option is added so that there is no default choice. 
              </li>
              <li>
                <code>required</code> <em>bool</em> — defaults to false. Adds required label, required attribute and aria-required='true'
              </li>
              <li>
                <code>errorMessage</code> <em>string</em> — If present, triggers the error state and displays the error message
              </li>
            </ul>
          </div>
        </section>
        
        <section id="03-checkboxes">
          <h2 className="usa-heading heading-margin-alt" id="checkboxes">Checkboxes</h2>
          <p className="usa-font-lead">Checkboxes allow users to select one or more options from a visible list.</p>
          
          <div className="preview">
            <FieldSet name="historical-figures-1" legend="Historial figures">
              <Checkbox id="truth" label="Sojourner Truth" checked />
              <Checkbox id="douglass" label="Frederick Douglass" checked />
              <Checkbox id="washington" label="Booker T. Washington" disabled />
              <Checkbox id="carver" label="George Washington Carver" />
            </FieldSet>
          </div>
          
          <div>
            <h5>Example usage</h5>
            <pre><code>
              {`<Checkbox id="truth" label="Sojourner Truth" checked></Checkbox>`}
            </code></pre>
            <h5>Required props</h5>
            <ul>
              <li><code>lable</code> <em>string</em> — Text for the label</li>
              <li><code>id</code> <em>string</em> — sets the textarea's <code>id</code> attribute the label's <code>for</code> attribute. Required for 508 compliance.</li>
            </ul>
            
            <h5>Optional props</h5>
            <ul>
              <li>
                <code>value</code> <em>string</em> — sets the value attribute. If not provided the id is used instead. 
              </li>
              <li>
                <code>name</code> <em>string</em> — defaults to 'checkboxs'. Sets the name attribute. Each item in a fieldset should have the same name.
              </li>
              <li>
                <code>checked</code> <em>bool</em> — If true, the control is selected (checked) by default.
              </li>
              <li>
                <code>disabled</code> <em>bool</em> — If true, disables the control so it can not be toggled.
              </li>
            </ul>
          </div>
        </section>
        <section id="radio-buttons">
          <h2 className="usa-heading heading-margin-alt" id="checkboxes">Radio buttons</h2>
          <p className="usa-font-lead">Radio buttons allow users to see all available choices at once and select exactly one option.</p>
          
          <div className="preview">
            <FieldSet name="historical-figures-2" legend="Historial figures">
              <Radio id="stanton" label="Sojourner Truth" />
              <Radio id="douglass" label="Frederick Douglass" checked />
              <Radio id="washington" label="Booker T. Washington" disabled />
              <Radio id="carver" label="George Washington Carver" />
            </FieldSet>
          </div>
          
          <div>
            <h5>Example usage</h5>
            <pre><code>
              {`<Radio id="truth" label="Sojourner Truth" checked />`}
            </code></pre>
            <h5>Required props</h5>
            <ul>
              <li><code>lable</code> <em>string</em> — Text for the label</li>
              <li><code>id</code> <em>string</em> — sets the textarea's <code>id</code> attribute the label's <code>for</code> attribute. Required for 508 compliance.</li>
            </ul>
            
            <h5>Optional props</h5>
            <ul>
              <li>
                <code>value</code> <em>string</em> — sets the value attribute. If not provided the id is used instead. 
              </li>
              <li>
                <code>name</code> <em>string</em> — defaults to 'checkboxs'. Sets the name attribute. Each item in a fieldset should have the same name.
              </li>
              <li>
                <code>checked</code> <em>bool</em> — If true, the control is selected (checked) by default.
              </li>
              <li>
                <code>disabled</code> <em>bool</em> — If true, disables the control so it can not be toggled.
              </li>
            </ul>
          </div>
        </section>
        
        <section id="field-set">
          <h2 className="usa-heading heading-margin-alt" id="checkboxes">Field set</h2>
          <p className="usa-font-lead">The Field set is used to group two or more checkboxes or radio buttons together.</p>
          
          <div>
            <h5>Example usage</h5>
            <pre><code>
              {`<FieldSet name="choices" legend="Best choices">
  <Checkbox id="value1" label="Option A" />
  <Checkbox id="value2" label="Option B" />
  <Checkbox id="value3" label="Option C" />
</FieldSet>`}
            </code></pre>
            <h5>Required props</h5>
            <ul>
              <li><code>legend</code> <em>string</em> — screen-reader only label of what the radio group represents. Required for 508 compliance.</li>
              <li>
                <code>children</code> <em>node</em> — expects two or more checkboxes or radio buttons.
              </li>
            </ul>
            
            <h5>Optional props</h5>
            <ul>
              <li>
                <code>name</code> <em>string</em> — applies this name to all the children rather than having to set the name of each child individually.
              </li>
              
            </ul>
          </div>
        </section>
      </BaseContainer>
    );
  }
}

FormControlsContainer.defaultProps = {
  title: "Form controls",
  summary: "Form controls allow users to enter information into a page."
};
