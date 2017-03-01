import React, { Component, PropTypes } from 'react';
import InputLabel from './InputLabel';
import Utilities from '../helpers/utilities';

/**
 * Checkbox with label
 *
 * Required props:
 * - label, string -- the text for the label
 *
 * Optional props:
 * - id, string -- sets the textarea's id attribute the label's for attribute. Required for 508 compliance.
 * - value, string -- sets the value attribute. If not provided, the id is used instead.
 * - name, string, defaults to 'checkboxs' -- sets the name attribute. Each item in a fieldset should have the same name.
 * - checked, bool -- if true, the control is selected (checked) by default.
 * - disabled, bool -- if true, disables the control so it can not be toggled.
 */
export default class Checkbox extends Component {
  /**
   * constructor
   * @param {object} props The props passed in
   */
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.checked || false
    };
  }
  /**
   * check to see if an Id was passed in, if not generate one.
   */
  componentWillMount() {
    this.id = this.props.id ? this.props.id : Utilities.uniqueIdForComponent(this);
  }

  /**
   * Renders the component.
   * @returns {Node} The rendered DOM node.
   */
  render() {
    return (
      <div>
        <input
          id={this.id}
          type="checkbox"
          name={this.props.name}
          value={this.props.value ? this.props.value : this.id}
          disabled={this.props.disabled || false}
          onChange={this._handleChange.bind(this)}
          checked={this.state.checked} />

        <InputLabel htmlFor={this.id} label={this.props.label} />
      </div>
    );
  }

  /**
   * toggle the checked state
   */
  _handleChange() {
    this.setState({
      checked: !this.state.checked
    });
  }
}

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool
};

Checkbox.defaultProps = {
  name: 'checkboxes'
};
