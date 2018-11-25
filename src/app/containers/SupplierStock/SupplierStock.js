import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, ErrorMessage, Field } from 'formik';

import { validateForm } from './SupplierStock.helpers';
import { procureItemFromSupplierAction } from '../../store';
import ValidationError from '../../ui/ValidationError/ValidationError';

class SupplierStock extends Component {
  state = {
    success: false
  }

  render() {
    let alertSubmitionStyle = 'alert alert-success alert-dismissible fade';
    if (this.state.success) {
      alertSubmitionStyle = `${alertSubmitionStyle} show`;
    }
    return (
      <div className="">
        <h2>Buy an item from a supplier!</h2>
        <Formik
          initialValues={{ name: '', value: '', quantity: '' }}
          validate={validateForm}
          onSubmit={(values, { setSubmitting }) => {
            this.props.dispatch(procureItemFromSupplierAction({
              name: values.name,
              value: +values.value,
              quantity: +values.quantity
            }));
            setSubmitting(false);
            this.setState({ success: true })
          }}>
          {({ values, isSubmitting }) => (
            <Form className="d-flex flex-column justify-content-between">
              <div className="form-group">
                <label htmlFor="nameInput">Item name</label>
                <Field
                  type="text"
                  name="name"
                  className="form-control"
                  id="nameInput"
                  placeholder="Enter the item name" />
                <ErrorMessage name="name" component={ValidationError} />
              </div>
              <div className="form-group">
                <label htmlFor="valueInput">Item value</label>
                <Field
                  type="text"
                  name="value"
                  className="form-control"
                  id="valueInput"
                  placeholder="Enter the item value" />
                <ErrorMessage name="value" component={ValidationError} />
              </div>
              <div className="form-group">
                <label htmlFor="quantity">Item quantity</label>
                <Field
                  type="text"
                  name="quantity"
                  className="form-control"
                  id="quantity"
                  placeholder="Enter the item quantity" />
                <ErrorMessage name="quantity" component={ValidationError} />
              </div>

              <button
                className="btn btn-primary"
                type="submit"
                disabled={isSubmitting}>
                Buy
              </button>
              <div className={alertSubmitionStyle} role="alert">
                <strong>{values.name}</strong> is purchased successfully.
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default connect()(SupplierStock);
