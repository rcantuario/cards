import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import CardList from "./components/CardList/index";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Welcome to Big Toy, your online toy store
            </Typography>
            <div style={{ marginLeft: 100 + "px" }}>
              <Button
                onClick={this.handleOpen}
                variant="contained"
                color="primary"
              >
                add
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <CardList />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

const SimpleModalWrapped = withStyles(styles)(App);

export default App;
