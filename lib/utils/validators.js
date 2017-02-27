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
    // if no regex, is always false
    if (!this.pattern) {
      return false;
    } 
    
    // if pattern is an array, iterate over the array and if it matches any rule, return true
    if ( this.pattern.constructor === Array ) {
      for (let pattern of this.pattern) {
        if (pattern.test(input) === true) {
          return true;
        }
      }
      return false;
    }
    
    // else test the single patter and return the result
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

export const AlwaysInvalidValidator = new Validator(false);
export const EmailValidator = new Validator(/.+@.+\./, 'Not a valid email address');
export const HasCapitalValidator = new Validator(/[A-Z]/, 'Must contain a capital letter');
export const IsLowercaseValidator = new Validator(/^[A-Z]/, 'Must be all lowercase');
export const ZipCodeValidator = new Validator(/^\d{5}(?:-\d{4})?$/, 'Not a valid ZIP Code');
export const OnlyNumbersValidator = new Validator(/^\d*$/, 'Only numbers are allowed');
export const PhoneValidator = new Validator(
  [
    /^[2-9]\d{2}-\d{3}-\d{4}$/, 
    /^[2-9]\d{2}\.\d{3}\.\d{4}$/, 
    /^\([2-9]\d{2}\) \d{3}-\d{4}$/,
    /1(?: |-|\()[2-9]\d{2}(?: |-|\))\d{3}(?: |-)\d{4}$/
  ],
  'Does not appear to be a valid U.S. phone number'
);
