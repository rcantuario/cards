import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardList from "./components/CardList/index";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, NavLink, HashRouter } from "react-router-dom";
import checkout from "./components/Checkout";
import cadastro from "./components/Cadastro";

class App extends Component {
  state = { items: [] };
  componentWillReceiveProps() {
    this.setState({ items: this.props.items });
  }

  render() {
    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Welcome to Big Toy, your online toy store{" "}
              {this.state.items && this.state.items.length}
            </Typography>
            <div style={{ marginLeft: 100 + "px" }}>
              <Button
                onClick={this.handleOpen}
                variant="contained"
                color="primary"
              >
                checkout
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <HashRouter>
          <div>
            <NavLink to="/checkout">Checkout </NavLink>
            <NavLink to="/cadastro">Cadastro</NavLink>
            <Route exact path="/" component={CardList} />
            <Route exact path="/checkout" component={checkout} />
            <Route exact path="/cadastro" component={cadastro} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  items: state.productReducer.products
});

export default connect(mapStateToProps)(App);
