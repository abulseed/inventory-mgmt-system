
export const validateForm = values => {
  let errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.value) {
    errors.value = 'Required';
  } else if (isNaN(values.value)) {
    errors.value = 'Must be a number';
  }
  if (!values.quantity) {
    errors.quantity = 'Required';
  } else if (isNaN(values.quantity)) {
    errors.quantity = 'Must be a number';
  }
  return errors;
}
