import React, { Component } from "react";

import Card from "../Card";

const products = [
  {
    id: 1000,
    name: "Lego Star wars",
    price: 100.0,
    brand: "Lego"
  },
  {
    id: 1001,
    name: "Peppa pig ",
    price: 79.9,
    brand: "Mattel"
  },
  {
    id: 1002,
    name: "Avengers Board game",
    price: 180.85,
    brand: "Disney"
  },
  {
    id: 1003,
    name: "Barbie's Kitchen ",
    price: 92.47,
    brand: "Mattel"
  }
];

class CardList extends Component {
  render() {
    const productList = products.map(product => (
      <li style={{ listStyleType: "none", marginTop: 5 + "px" }}>
        <Card item={product} />
      </li>
    ));

    return <ol> {productList} </ol>;
  }
}

export default CardList;
