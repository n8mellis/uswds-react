import React from 'react';
import TextInput from '../../lib/components/TextInput';
import TextArea from '../../lib/components/TextArea';
import Dropdown from '../../lib/components/Dropdown';
import Checkbox from '../../lib/components/Checkbox';
import Radio from '../../lib/components/Radio';
import FieldSet from '../../lib/components/FieldSet';
import { EmailValidator, ZipCodeValidator, PhoneValidator } from '../../lib/utils/validators';
import BaseContainer from "./BaseContainer";

/**
 * Displays the Styleguide content for Form Controls.
 */
export default class FormControlsContainer extends React.Component
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
        <section id="text-input">
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
              label="Email address"
              type="email"
              value="gwashington@potus.com"
              isValid
              validators={[EmailValidator]} />

              <TextInput
                label="ZIP code"
                value="666"
                errorMessage="Not a valid ZIP Code"
                validators={[ZipCodeValidator]} />

              <TextInput
                type="tel"
                label="Phone number"
                validators={[PhoneValidator]} />
          </div>

          <div>
            <h5>Example usage</h5>
            <pre><code>
              {`<TextInput
  label="ZIP code"
  required
  validators={[validators.zipCode]} />`}
            </code></pre>
            <h5>Required props</h5>
            <ul>
              <li><code>lable</code> <em>string</em> — Text for the input's label</li>

            </ul>

            <h5>Optional props</h5>
            <ul>
              <li>
                <code>id</code> <em>string, defaults to a unique generated id</em> — sets the input's <code>id</code> attribute the label's <code>for</code> attribute.
              </li>
              <li>
                <code>type</code> <em>string, defaults to 'text'</em> — Must be one of these: <code>"text"</code>, <code>"email"</code>, <code>"password"</code>, <code>"search"</code>, <code>"url"</code>, <code>"date"</code>, <code>"month"</code>, <code>"tel"</code>, <code>"week"</code>, <code>"number"</code>
              </li>
              <li>
                <code>value</code> <em>string</em> — if provided, pre-populates the input with the given string.
              </li>
              <li>
                <code>required</code> <em>bool, defaults to false</em> — adds required label, required attribute, and aria-required='true'.
              </li>
              <li>
                <code>errorMessage</code> <em>string</em> — If provided, triggers the error state and displays the error message.
              </li>
              <li>
                <code>isValid</code> <em>bool, defaults to false</em> — if true, sets the valid state (green border).
              </li>
              <li>
                <code>allowedChars</code> <em>Validator object</em> — if provided, user can only type characters that match the given test.
              </li>
              <li>
                <code>validators</code> <em>array of Validator objects</em> — if provided, field gets error state onBlur if the value does not match the given test(s).
              </li>
              <li>
                <code>spellCheck</code> <em>bool, defaults to false</em> — if true, enables browser autocorrection while typing.
              </li>
            </ul>
          </div>
        </section>

        <section id="text-area">
          <h2 className="usa-heading heading-margin-alt" id="text-input">Text area</h2>
          <p className="usa-font-lead">Text area is a multi-line, plain-text editing control</p>

          <div className="preview">
            <TextArea
              label="How did you hear about us?"
              required />
            <TextArea
              label="How did you hear about us?"
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
              <li><code>lable</code> <em>string</em> — the text for the label.</li>
            </ul>

            <h5>Optional props</h5>
            <ul>
              <li>
                <code>id</code> <em>string, defaults to a unique generated id</em> — sets the input's <code>id</code> attribute the label's <code>for</code> attribute.
              </li>
              <li>
                <code>value</code> <em>string</em> — if provided, pre-populates the input with the given string.
              </li>
              <li>
                <code>required</code> <em>bool, defaults to false</em> — adds required label, required attribute, and aria-required='true'.
              </li>
              <li>
                <code>errorMessage</code> <em>string</em> — if provided, triggers the error state and displays the error message.
              </li>
            </ul>
          </div>
        </section>

        <section id="dropdown">
          <h2 className="usa-heading heading-margin-alt" id="dropdown">Dropdown</h2>
          <p className="usa-font-lead">A dropdown allows users to select one option from a list.</p>

          <div className="preview">
            <Dropdown label="Dropdown label" id="dropdown1">
              <option value="value1">Option A</option>
              <option value="value2">Option B</option>
              <option value="value3">Option C</option>
            </Dropdown>

            <Dropdown label="Dropdown label" required id="dropdown2">
              <option value="value1">Option A</option>
              <option value="value2">Option B</option>
              <option value="value3">Option C</option>
            </Dropdown>

            <Dropdown label="Dropdown label" errorMessage="Wrong choice!" value={'value3'} id="dropdown3">
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
              <li><code>lable</code> <em>string</em> — the text for the label.</li>
              <li><code>children</code> <em>node</em> — expects a series of <code>option</code> elements.</li>
            </ul>

            <h5>Optional props</h5>
            <ul>
              <li>
                <code>id</code> <em>string, defaults to a unique generated id</em> — sets the input's <code>id</code> attribute the label's <code>for</code> attribute.
              </li>
              <li>
                <code>value</code> <em>string</em> — if this matches the <code>value</code> of one of the option elements, that becomes the default choice. If you set it to an empty string, a blank disabled option is added so that there is no default choice.
              </li>
              <li>
                <code>required</code> <em>bool, defaults to false</em> — adds required label, required attribute, and aria-required='true'.
              </li>
              <li>
                <code>errorMessage</code> <em>string</em> — if provided, triggers the error state and displays the error message.
              </li>
            </ul>
          </div>
        </section>

        <section id="checkboxes">
          <h2 className="usa-heading heading-margin-alt" id="checkboxes">Checkboxes</h2>
          <p className="usa-font-lead">Checkboxes allow users to select one or more options from a visible list.</p>

          <div className="preview">
            <FieldSet name="historical-figures-1" legend="Historial figures">
              <Checkbox label="Sojourner Truth" defaultChecked />
              <Checkbox label="Frederick Douglass" defaultChecked />
              <Checkbox label="Booker T. Washington" disabled />
              <Checkbox label="George Washington Carver" />
            </FieldSet>
          </div>

          <div>
            <h5>Example usage</h5>
            <pre><code>
              {`<Checkbox id="truth" label="Sojourner Truth" defaultChecked />`}
            </code></pre>
            <h5>Required props</h5>
            <ul>
              <li><code>lable</code> <em>string</em> — the text for the label.</li>
            </ul>

            <h5>Optional props</h5>
            <ul>
              <li>
                <code>id</code> <em>string, defaults to a unique generated id</em> — sets the input's <code>id</code> attribute the label's <code>for</code> attribute.
              </li>
              <li>
                <code>value</code> <em>string</em> — sets the value attribute. If not provided, the id is used instead.
              </li>
              <li>
                <code>name</code> <em>string, defaults to 'checkboxs'</em> — sets the name attribute. Each item in a fieldset should have the same name.
              </li>
              <li>
                <code>defaultChecked</code> <em>bool</em> — if true, the control is selected (checked) by default.
              </li>
              <li>
                <code>disabled</code> <em>bool</em> — if true, disables the control so it can not be toggled.
              </li>
            </ul>
          </div>
        </section>
        <section id="radio-buttons">
          <h2 className="usa-heading heading-margin-alt" id="checkboxes">Radio buttons</h2>
          <p className="usa-font-lead">Radio buttons allow users to see all available choices at once and select exactly one option.</p>

          <div className="preview">
            <FieldSet name="historical-figures-2" legend="Historial figures">
              <Radio id="truth" label="Sojourner Truth" />
              <Radio id="douglass" label="Frederick Douglass" defaultChecked />
              <Radio id="washington" label="Booker T. Washington" disabled />
              <Radio id="carver" label="George Washington Carver" />
            </FieldSet>
          </div>

          <div>
            <h5>Example usage</h5>
            <pre><code>
              {`<Radio id="truth" label="Sojourner Truth" defaultChecked />`}
            </code></pre>
            <h5>Required props</h5>
            <ul>
              <li><code>lable</code> <em>string</em> — the text for the label.</li>
            </ul>

            <h5>Optional props</h5>
            <ul>
              <li>
                <code>id</code> <em>string, defaults to a unique generated id</em> — sets the input's <code>id</code> attribute the label's <code>for</code> attribute.
              </li>
              <li>
                <code>value</code> <em>string</em> — sets the value attribute. If not provided, the <code>id</code> is used instead.
              </li>
              <li>
                <code>name</code> <em>string, defaults to 'radios'</em> — sets the name attribute. Each item in a fieldset should have the same name.
              </li>
              <li>
                <code>defaultChecked</code> <em>bool</em> — if true, the control is selected (checked) by default.
              </li>
              <li>
                <code>disabled</code> <em>bool</em> — if true, disables the control so it can not be toggled.
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
              <li><code>legend</code> <em>string</em> — screen-reader only label of what the radio or checkbox group represents. Many screen readers will read the legend for each control, so it shoud be
              brief and descriptive. Required for 508 compliance. </li>
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
