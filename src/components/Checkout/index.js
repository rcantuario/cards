import React, { Component } from "react";
import { connect } from "react-redux";

class Checkout extends Component {
  render() {
    return <h1> Hello Checkout {this.props.items.length}</h1>;
  }
}

//export default Checkout;

const mapStateToProps = state => ({
  items: state.productReducer.products
});

export default connect(mapStateToProps)(Checkout);
