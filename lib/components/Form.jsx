import React, { Component, PropTypes } from 'react';

/**
 * Class representing a generic Form
 *
 * This component returns a <form> with legend.
 *
 * Required props:
 * - children: node. Series of field control types
 *
 * Optional props:
 * - id: string. Sets the form's id attribute
 */

export default class Form extends Component { 
  render() {
    return (
      <div>
        <form className="usa-form">
          {this.props.children}
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
};