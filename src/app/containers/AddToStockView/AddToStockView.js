import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, ErrorMessage, Field } from 'formik';

import { validateForm } from './AddToStockView.helpers';
import { procureItemFromSupplierAction } from '../../store';
import ValidationError from '../../ui/ValidationError/ValidationError';

class AddToStockView extends Component {
  state = {
    success: false
  }

  render() {
    const isReturnComponent = this.props.match.path.toLowerCase().includes('return');
    let alertSubmitionStyle = 'alert alert-success alert-dismissible fade';
    if (this.state.success) {
      alertSubmitionStyle = `${alertSubmitionStyle} show`;
    }
    return (
      <div className="">
        <h2>{isReturnComponent ? 'Return an item to the inventory!' : 'Buy an item from a supplier!'}</h2>
        <Formik
          initialValues={{ name: '', value: '', quantity: '' }}
          validate={validateForm}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            this.props.dispatch(procureItemFromSupplierAction({
              name: values.name,
              value: +values.value,
              quantity: +values.quantity
            }));
            setSubmitting(false);
            this.setState({ success: true });
            setTimeout(() => {
              this.setState({ success: false });
              resetForm({ name: '', value: '', quantity: '' });
            }, 1000);
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
                <strong>{values.name}</strong> {isReturnComponent ? 'is returned successfully.' : 'is purchased successfully.'}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default connect()(AddToStockView);
