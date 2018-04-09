import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity
} from "react-native";
import styles from "./styles";

const LEVELS = {
  easy: 3,
  normal: 4,
  hard: 5,
};

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      level: "normal"
    };
  }

  startGame(level) {
    this.setState({ level: level });
  }

  renderButton(level) {
    return (
      <TouchableOpacity key={level} style={styles.appButton} onPress={this.startGame.bind(this, LEVELS[level])}>
        <Text style={styles.appButtonText}>{level.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.appContainer}>
        {Object.keys(LEVELS).map(level => this.renderButton(level))}
        <Text>{this.state.level}</Text>
      </View>
    );
  }
}
