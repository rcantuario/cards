import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";

class CardElement extends Component {
  handleClick = () => {
    //colocar o dialog e fazer ele abrir por aqui com as informações do produto
  };

  render() {
    return (
      <Card style={{ hover: red }} onClick={() => console.log("oi")}>
        <CardContent>
          <Typography color="textSecondary">{this.props.item.brand}</Typography>
          <Typography variant="headline" component="h2">
            {this.props.item.name}
          </Typography>
          <Typography color="textSecondary">{this.props.item.price}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default CardElement;
