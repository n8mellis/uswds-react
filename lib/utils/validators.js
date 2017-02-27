/**
 * A Validator object contains a test pattern and a message to display is the test fails 
 */
class Validator {
  /**
   * constructor method
   * @param {regex} pattern the test pattern
   * @param {string} message message to display is the test fails
   */
  constructor(pattern, message) {
    this.pattern = pattern || false;
    this.message = message || '';
  }

  /**
   * Check input vs the pattern
   * @returns {bool} true is matches, false if fails
   * @param {string} input What's being tested
   */
  _validate(input) {
    if (!this.pattern) {
      return false;
    }
    return this.pattern.test(input);
  }

  /**
   * @returns {bool} true is matches, false if fails
   * @param {string} input What's being tested
   */
  isValid(input) {
    return this._validate(input);
  }
}


const none = new Validator(false);
const email = new Validator(/.+@.+\./, 'Not a valid email address');
const hasCapital = new Validator(/[A-Z]/, 'Must contain a capital letter');
const isLowercase = new Validator(/^[A-Z]/, 'Must be all lowercase');
const zipCode = new Validator(/\d{5}/, 'Enter a 5-digit ZIP Code');
const hasLowercaseE = new Validator(/e/, 'Must contain a lowercase e');
const hasUppercaseA = new Validator(/A/, 'Must contain an uppercase A');
const onlyNumbers = new Validator(/^\d*$/, 'Only numbers are allowed');
const noSatan = new Validator(/^((?!666).)*$/, 'These are bad numbers');

const validators = {
  none,
  email,
  hasCapital,
  isLowercase,
  zipCode,
  hasLowercaseE,
  hasUppercaseA,
  onlyNumbers,
  noSatan
};

export default validators;
