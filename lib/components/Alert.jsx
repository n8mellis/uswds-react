import React, { PropTypes } from 'react';

/**
 * Provides one of four standard alert types.
 * An alert consists of a box with a light background color,
 * an icon, a headline, and a short explaination.
 *
 * The alert type determines the background color and icon displayed
 *
 * Alert types are 'success', 'warning', 'error', 'info'
 * The type defaults to 'info' if no type is sent via props
 *
 * If the type is 'error' and no role is specified, role defaults to 'alert'
 *
 * @returns {node} the rendered DOM node
 * @param {string} type  Sets the alert type
 * @param {string} title Text for the headline
 * @param {node} body  Text for the description
 * @param {string} role  ARIA role type
 */
export default function Alert ({type, title, body, role}) {
  if ( type === 'error' && !role) {
    role = 'alert';
  }

  return (
    <div className={`usa-alert usa-alert-${type}`} role={role}>
      <div className="usa-alert-body">
        <h3 className="usa-alert-heading">{title}</h3>
        <div className="usa-alert-text">{body}</div>
      </div>
    </div>
  );
}

const TYPE_INFO = 'info';
const TYPE_SUCCESS = 'success';
const TYPE_ERROR = 'error';
const TYPE_WARNING = 'warning';
const ROLE_ALERT = 'alert';
const ROLE_ALERTDIALOG = 'alertdialog';

Alert.propTypes = {
  type: PropTypes.oneOf([
    TYPE_INFO,
    TYPE_SUCCESS,
    TYPE_ERROR,
    TYPE_WARNING
  ]),
  title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  role: PropTypes.oneOf([
    ROLE_ALERT,
    ROLE_ALERTDIALOG
  ])
};

Alert.defaultProps = {
  type: TYPE_INFO
};
