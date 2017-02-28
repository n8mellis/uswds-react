import React from 'react';

/**
 * Provides a standard button component.
 */
export default class PrimaryButton extends React.Component {
  /**
   * Constructor.
   *
   * @param {Object} props The props that will be applied to this component.
   */
  constructor(props) {
    super(props);
  }

  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render() {

    // local vars
    let className = [];
    let disabled = '';

    // big
    if (this.props.size === 'big') {
      className.push('usa-button-big');
    }

    // handle status
    if (this.props.status !== '') {
      className.push('usa-button-' + this.props.status);

      // disable button
      if (this.props.status === 'disabled') {
        disabled = 'disabled';
      }
    }

    return (
      <button className={className} disabled={disabled}>{this.props.text}</button>
    );
  }
}

PrimaryButton.defaultProps = {
  secondaryStyle: '',
  size: '',
  status: ''
};

PrimaryButton.propTypes = {
  size: React.PropTypes.oneOf(['', 'big']),
  status: React.PropTypes.oneOf(['', 'active', 'disabled', 'hover']),
  text: React.PropTypes.string.isRequired
};
