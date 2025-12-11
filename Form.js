export class Form {
  constructor(formElement) {
    this.formElement = formElement;
  }

  getValues() {
    const formData = new FormData(this.formElement);
    const formValues = Object.fromEntries(
      [...formData.entries()].map(([key, value]) => [key, value.trim()])
    );
    return formValues;
  }

  isValid() {
    return this.formElement.checkValidity();
  }

  reset() {
    this.formElement.reset();
  }
}