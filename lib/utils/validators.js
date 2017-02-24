class Validator {
  constructor(test, errorMessage) {
    this.test = test || false;
    this.errorMessage = errorMessage || '';
  }

  _validate(input) {
    if (!this.test) {
      return false;
    }
    return this.test.test(input);
  }

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
