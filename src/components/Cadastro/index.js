import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class Checkout extends Component {
  handleSubmit() {
    console.log("oi");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Product Name</label>
          <div>
            <Field name="name" component="input" type="text" label="Name" />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

Checkout = reduxForm({
  form: "register"
})(Checkout);

export default Checkout;
