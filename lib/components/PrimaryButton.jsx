import React from 'react';

export default class PrimaryButton extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    // local vars
    let className = [];
    let disabled = '';

    if (this.props.size === 'large') {
      className.push('usa-button-big');
    }

    if (this.props.status !== '') {
      className.push('usa-button-' + this.props.status);

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
  size: React.PropTypes.oneOf(['', 'large']),
  status: React.PropTypes.oneOf(['', 'active', 'disabled', 'hover']),
  text: React.PropTypes.string.isRequired
};
