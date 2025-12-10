export class Form {
  constructor(registerFormElement) {
    this.registerFormElement = registerFormElement;
  }

  getValues() {
    const formData = new FormData(this.registerFormElement);
    const formValues = Object.fromEntries(
      [...formData.entries()].map(([key, value]) => [key, value.trim()])
    );
    return formValues;
  }

  isValid() {
    const formValues = this.getValues();
    return formValues.password === formValues.repeatedPassword;
  }

  reset() {
    this.registerFormElement.reset();
  }
}