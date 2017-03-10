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

    this._handleClick = this._handleClick.bind(this);
  }

  /**
   * Handles button click
   */
  _handleClick() {
    this.props.onClick();
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

    // disabled
    if (this.props.disabled) {

      // disable button
      className.push('usa-button-disabled');
      disabled = 'disabled';
    }


    // big
    if (this.props.size === 'big') {
      className.push('usa-button-big');
    }

    // handle status
    if (this.props.status !== '') {
      className.push('usa-button-' + this.props.status);
    }

    return (
      <button className={className} disabled={disabled} onClick={this._handleCLick}>{this.props.text}</button>
    );
  }
}

PrimaryButton.defaultProps = {
  secondaryStyle: '',
  size: '',
  status: ''
};

// size
PrimaryButton.SIZE_BIG = 'big';

// status
PrimaryButton.STATUS_ACTIVE = 'active';
PrimaryButton.STATUS_HOVER = 'hover';

PrimaryButton.propTypes = {
  disabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  size: React.PropTypes.oneOf(['', PrimaryButton.SIZE_BIG]),
  status: React.PropTypes.oneOf(['', PrimaryButton.STATUS_ACTIVE, PrimaryButton.STATUS_HOVER]),
  text: React.PropTypes.string.isRequired
};

PrimaryButton.defaultProps = {
  disabled: false,
  size: '',
  status: ''
};
