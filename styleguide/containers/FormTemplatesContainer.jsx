import React from "react";
import { DocsPage, DocsComponent, DocsSection, DocsExample, DocsPreview } from './Docs.jsx';
import Highlight from 'react-highlight';
import { Table, TableRow, TableHeaderCell, TableCell } from '../../lib/components/Tables';
import Label from '../../lib/components/Label';
import NameForm from '../../lib/components/NameForm';
import AddressForm from '../../lib/components/AddressForm';
import SignInForm from '../../lib/components/SignInForm';
import PasswordResetForm from '../../lib/components/PasswordResetForm';

/**
 * Displays the Styleguide content for Form Templates.
 */
export default class FormTemplatesContainer extends React.Component {
  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render() {
    return (
      <DocsPage title="Form templates">

        {/* If multiple component or component groups on the page, wrap each in a DocsComponent
          * AddressForm Component
         */}
        <DocsComponent title="NameForm" id="name-form">
        
          {/* Dependencies */}
          {/*<DocsSection title="Dependencies">
                      <h5>Explain what the 3rd-party dependency is and what it does</h5>
                      <Highlight className="bash">
                        {`npm install --save react-thirdpartything`}
                      </Highlight>
                    </DocsSection>*/}
          
          {/* Importing */}
          <DocsSection title="Importing">
            <Highlight className="javascript">
              {`import Form from './Form';
import TextInput from './TextInput';`}
            </Highlight>
          </DocsSection>
          
          {/* Props */}
          <DocsSection title="Props">
            <Table columns={['Prop', 'Type', 'Default', 'Description']}>
              <TableRow>
                <TableHeaderCell>formTitle </TableHeaderCell>
                <TableCell>string</TableCell>
                <TableCell>'Name'</TableCell>
                <TableCell>provides a default form 'legend'</TableCell>

              </TableRow>
            </Table>
          </DocsSection>
          
          {/* Accessibility */}
          {/*<DocsSection title="Accessibility"></DocsSection>*/}
          
          {/* Usage */}
          <DocsSection title="Usage">
            <DocsExample>
              <DocsPreview>
                <NameForm />
              </DocsPreview>
              <Highlight className="html">
                {`      <Form>
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
      </Form>`}
              </Highlight>
            </DocsExample>
          </DocsSection>
          
        </DocsComponent>
                
        {/* If multiple component or component groups on the page, wrap each in a DocsComponent
          * NameForm Component
         */}
        <DocsComponent title="Address" id="address-form">
          {/* Importing */}
          <DocsSection title="Importing">
            <Highlight className="javascript">
              {`import Form from './Form';
import TextInput from './TextInput';
import Dropdown from './Dropdown';
import { ZipCodeValidator } from '../../lib/utils/validators';`}
            </Highlight>
          </DocsSection>
          
          {/* Props */}
          <DocsSection title="Props">
            <Table columns={['Prop', 'Type', 'Default', 'Description']}>
              <TableRow>
                <TableHeaderCell>formTitle </TableHeaderCell>
                <TableCell>string</TableCell>
                <TableCell>'Mailing Address'</TableCell>
                <TableCell>provides a default form 'legend'</TableCell>
              </TableRow>
            </Table>
          </DocsSection>
          
          {/* Accessibility */}
          {/*<DocsSection title="Accessibility"></DocsSection> */}
          
          {/* Usage */}
          <DocsSection title="Usage">
            <DocsExample>
              <DocsPreview>
                <AddressForm />
              </DocsPreview>
              <Highlight className="html">
                {`<Form>
  <fieldset className="usa-fieldset-inputs usa-sans">
    <legend>
      {legend}
    </legend>
    <TextInput
    label="Street address 1"
    id="streetAddress"
    required
     />

    <TextInput
    label="Street address 2 (Optional)"
    id="streetAddress2"
     />
    <div>
      <div className="usa-input-grid usa-input-grid-medium">
        <TextInput
        label="City"
        id="cityAddress"
        required
         />
       </div>
      <div className="usa-input-grid usa-input-grid-small">
        <Dropdown label="State" id="stateAddress" options={states} required />
      </div> 
    </div>    

    <TextInput
    className="usa-input-medium"
    label="Zip"
    id="zipAddress"
    required
     />
    </fieldset>
  </Form>`}
              </Highlight>
            </DocsExample>
          </DocsSection>
          
        </DocsComponent>

        {/* If multiple component or component groups on the page, wrap each in a DocsComponent
          * SignInForm Component
         */}
        <DocsComponent title="SignInForm" id="signin-form">
        
          {/* Dependencies */}
          {/*<DocsSection title="Dependencies">
                      <h5>Explain what the 3rd-party dependency is and what it does</h5>
                      <Highlight className="bash">
                        {`npm install --save react-thirdpartything`}
                      </Highlight>
                    </DocsSection>*/}
          
          {/* Importing */}
          <DocsSection title="Importing">
            <Highlight className="javascript">
              {`import Form from './Form';
import TextInput from './TextInput';
import PasswordField from "./PasswordField";
import PrimaryButton from "./PrimaryButton";
import Validator from "../utils/validators";`}
            </Highlight>
          </DocsSection>
          
          {/* Props */}
          <DocsSection title="Props">
            <Table columns={['Prop', 'Type', 'Default', 'Description']}>
              <TableRow>
                <TableHeaderCell>formTitle
                </TableHeaderCell>
                <TableCell>string</TableCell>
                <TableCell>"Sign in"</TableCell>
                <TableCell>provides a default form 'legend'</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>primaryButtonText
                </TableHeaderCell>
                <TableCell>string</TableCell>
                <TableCell>"Sign in"</TableCell>
                <TableCell>provides default text for submit button</TableCell>
              </TableRow>
            </Table>
          </DocsSection>
          
          {/* Accessibility */}
          {/*<DocsSection title="Accessibility"></DocsSection>*/}
          
          {/* Usage */}
          <DocsSection title="Usage">
            <DocsExample>
              <DocsPreview>
                <SignInForm />
              </DocsPreview>
              <Highlight className="html">
                {`<Form>
  <fieldset className="usa-fieldset-inputs">
    {legend}
    <span> or <a href="javascript:void(0);">create an account</a></span>
    <TextInput
    label="Username or email address"
    id="username"
    required />
    <PasswordField />
    <p className="usa-form-note">
    <a title="Show password" href="javascript:void(0);"
        className="usa-show_password"
        aria-controls="password">
      Show password</a>
    </p>        
    <PrimaryButton
    text={primaryButtonText}
     />
     <p><Link to="/form-templates"title="Forgot username">Forgot username?</Link></p>
     <p><Link to="/form-templates#pwd-form" title="Forgot password">Forgot password?</Link></p>
  </fieldset>
</Form>`}
              </Highlight>
            </DocsExample>
          </DocsSection>
          
        </DocsComponent>
        
        {/* If multiple component or component groups on the page, wrap each in a DocsComponent
          * PasswordResetForm Component
         */}
        <DocsComponent title="PasswordResetForm" id="pwd-form">
        
          {/* Dependencies */}
         {/* <DocsSection title="Dependencies">
                     <h5>Explain what the 3rd-party dependency is and what it does</h5>
                     <Highlight className="bash">
                       {`npm install --save react-thirdpartything`}
                     </Highlight>
                   </DocsSection> */}
          
          {/* Importing */}
          <DocsSection title="Importing">
            <Highlight className="javascript">
              {`import Form from './Form';
import TextInput from './TextInput';
import Alert from './Alert';
import PrimaryButton from './PrimaryButton';
import PasswordField from './PasswordField';`}
            </Highlight>
          </DocsSection>

          {/* Props */}
          <DocsSection title="Props">
            <Table columns={['Prop', 'Type', 'Default', 'Description']}>
              <TableRow>
                <TableHeaderCell>summary</TableHeaderCell>
                <TableCell>string</TableCell>
                <TableCell>'Please enter your new password'</TableCell>
                <TableCell>Sets the form instructions/summary</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>formTitle</TableHeaderCell>
                <TableCell>string</TableCell>
                <TableCell>'Reset password'</TableCell>
                <TableCell>provides a default form 'legend'</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>primaryButtonText</TableHeaderCell>
                <TableCell>string</TableCell>
                <TableCell>'Reset password'</TableCell>
                <TableCell>provides default text for submit button</TableCell>
              </TableRow>
            </Table>
          </DocsSection>
          
          {/* Accessibility */}
          {/*<DocsSection title="Accessibility"></DocsSection>*/}
          
          {/* Usage */}
          <DocsSection title="Usage">
            <DocsExample>
              <DocsPreview>
                <PasswordResetForm />
              </DocsPreview>
              <Highlight className="html">
                {`<Form className="usa-form">
  <fieldset className="usa-fieldset-inputs usa-sans">
    {legend}
    {this.props.summary} 
    <Alert
      type="info"
      title="Passwords must:"
      body={message}/>  
      <PasswordField />
      <PasswordField label="Confirm password" />     
    <PrimaryButton
    text={primaryButtonText}
     />   
  </fieldset>
</Form>`}
              </Highlight>
            </DocsExample>
          </DocsSection>
          
        </DocsComponent>
      </DocsPage>
    );
  }
}
