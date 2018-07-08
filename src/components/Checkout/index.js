import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

class Checkout extends Component {
  render() {
    let total = 0;

    if (this.props.items.length > 0) {
      total = this.props.items
        .map(y => y.price)
        .reduce((prev, next) => prev + next);
    }

    return (
      <div>
        <h1> Hello Checkout {this.props.items.length}</h1>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell> Name </TableCell>
              <TableCell> Brand </TableCell>
              <TableCell> Price </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.items.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell component="th" scope="row">
                    {n.name}
                  </TableCell>
                  <TableCell>{n.brand}</TableCell>
                  <TableCell>{n.price}</TableCell>
                </TableRow>
              );
            })}
            <TableRow>
              <TableCell> Total</TableCell>
              <TableCell> </TableCell>
              <TableCell> {total} </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartReducer.products
});

export default connect(mapStateToProps)(Checkout);
