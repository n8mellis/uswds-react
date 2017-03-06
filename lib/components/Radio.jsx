import React, { Component, PropTypes } from 'react';
import InputLabel from './InputLabel';
import Utilities from '../helpers/utilities';

/**
 * A radio button and a label
 *
 * Required props
 * - label, string -- Text for the label
 *
 * Optional props
 * - id, string -- input's id and label's for attributes
 * - name, string, defaults to 'radios' -- Sets name attribute
 * - value, string, defaults to id -- Sets value attribute
 * - checked, bool -- If true, item is initially set to checked
 * - disabled, bool --If item, item is disabled
 */
export default class Radio extends Component {
  /**
   * constructor
   * @param {Object} props The props that will be applied to this component.
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
   * Renders the DOM node
   * @returns {node} div that includes the input and label
   */
  render () {
    return (
      <div>
        <input
          id={this.id}
          type="radio"
          name={this.props.name}
          value={this.props.value ? this.props.value : this.id}
          disabled={this.props.disabled}
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

Radio.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool
};

Radio.defaultProps = {
  name: 'radios',
  disabled: false
};
