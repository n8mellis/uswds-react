import React, { PropTypes } from 'react';
import Form from './Form';
import TextInput from './TextInput';
import { EmailValidator, ZipCodeValidator, PhoneValidator } from '../../lib/utils/validators';

/**
 * Class representing a generic Name Form
 *
 * This component returns a <form> with legend and some default Name fields: title, first/middle/last name, suffix
 *
 * Required props:
 * - legend: string. sets the form legend
 * - input: node. Series of field control types
 *
 * Optional props:
 * - id: string. Sets the form's id attribute
 * - inputClass: string. Adds any custom classes to TextInput fields
 */
export default function NameForm ({legend, input}) {
  return (
    <Form
    legend="Name"
    >
      <TextInput
      inputClass="usa-input-tiny"
      label="Title"
      id="titleName"
       />

      <TextInput
      className="usa-input-tiny"
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
      inputClass="usa-input-tiny"
      label="Suffix"
      id="suffixName"
       />
    </Form>
  );
}