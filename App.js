import React, { Component } from "react";
import Normal from "./models/levels/Normal";
import Game from "./models/Game";

export default class App extends Component {
  render() {
    return (
      <Game game={new Normal(3)} />
    );
  }
}
