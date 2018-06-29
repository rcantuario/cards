import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button";
import { bindActionCreators } from "redux";
import { addProduct } from "../../actions";
import { connect } from "react-redux";

class CardElement extends Component {
  state = {
    openModal: false
  };

  handleClose = () => {
    this.setState({
      openModal: false
    });
  };

  handleClickOpen = () => {
    this.setState({
      openModal: true
    });

    console.log(this.state);
  };

  render() {
    const { item } = this.props;
    return (
      <div>
        <Card style={{ hover: red }} onClick={this.handleClickOpen}>
          <CardContent>
            <Typography color="textSecondary">
              {this.props.item.brand}
            </Typography>
            <Typography variant="headline" component="h2">
              {this.props.item.name}
            </Typography>
            <Typography color="textSecondary">
              {this.props.item.price}
            </Typography>
          </CardContent>
        </Card>

        <Dialog
          open={this.state.openModal}
          onClose={this.handleClose}
          aria-labelledby="simple-dialog-title"
        >
          <DialogTitle id="simple-dialog-title">{item.name}</DialogTitle>
          <div>{item.brand}</div>
          <div>{item.price}</div>
          <DialogActions>
            <Button
              color="primary"
              onClick={() => {
                this.props.addProduct(item);
                this.handleClose();
              }}
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addProduct }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardElement);
