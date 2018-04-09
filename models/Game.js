import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { GameStyles } from "./../styles";

const MAX_CHOICES_ROW = 9;

const ChooseRow = (props) => {
  return (
    <View style={[GameStyles.sideTopInnerRow, GameStyles.chooseRow]} {...props}>
      {props.children}
    </View >
  );
};
const ChooseCol = (props) => {
  return (
    <View style={GameStyles.chooseCol} {...props}>
      {props.children}
    </View>
  );
};
const ChoiceItem = (props) => {
  return (
    <TouchableOpacity style={GameStyles.chooseCol} {...props}>
      {props.children}
    </TouchableOpacity>
  );
};

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.choices = [];
    this.chooses = [];
    this.answers = [];
    this.row = 0;
    this.col = 0;
  }

  renderChoices() {
    const { game } = this.props;
    let choices = [];
    let i;

    for (i = 0; i < MAX_CHOICES_ROW; i++) {
      choices.push(
        <ChoiceItem key={`chooces-${i}`} style={GameStyles.chooseCol} />
      );
    }

    return choices;
  }

  renderChooses() {
    const { game } = this.props;
    let choices = [];
    let cols, i, j;

    for (i = 0; i < MAX_CHOICES_ROW; i++) {
      cols = [];

      for (j = 0; j < game.level; j++) {
        cols.push(
          <ChooseCol key={`chooses-${i}-${j}`} style={GameStyles.chooseCol} />
        );
      }

      choices.push(
        <ChooseRow key={i} style={[GameStyles.sideTopInnerRow, GameStyles.chooseRow]}>
          {cols}
        </ChooseRow >
      );
    }

    return choices;
  }

  renderHints() {
    const { game } = this.props;
    let hints = [];
    let cols, i, j;

    for (i = 0; i < MAX_CHOICES_ROW; i++) {
      cols = [];

      for (j = 0; j < 5; j++) {
        cols.push(
          <ChooseCol key={`hints-${i}-${j}`} style={GameStyles.hintCol} />
        );
      }

      hints.push(
        <ChooseRow key={i} style={[GameStyles.sideTopInnerRow, GameStyles.hintRow]}>
          {cols}
        </ChooseRow >
      );
    }

    return hints;
  }

  render() {
    return (
      // BEGIN: Container
      <View style={[GameStyles.container]}>
        {/* BEGIN: Sidenav top */}
        <View style={[GameStyles.side, GameStyles.sideTop]}>
          {/* BEGIN: Chooses */}
          <View style={[GameStyles.sideTopInner, GameStyles.sideTopInnerLeft]}>
            {this.renderChooses()}
          </View>
          {/* END: Chooses */}

          {/* BEGIN: Hints */}
          <View style={[GameStyles.sideTopInner, GameStyles.sideTopInnerRight]}>
            {this.renderHints()}
          </View>
          {/* END: Hints */}
        </View>
        {/* END: Sidenav top */}

        {/* BEGIN: Sidenav center */}
        <View style={[GameStyles.side, GameStyles.sideCenter]}>
        </View>
        {/* END: Sidenav center */}

        {/* BEGIN: Sidenav bottom */}
        <View style={[GameStyles.side, GameStyles.sideBottom]}>
          {this.renderChoices()}
        </View>
        {/* END: Sidenav bottom */}
      </View>
      // END: Container
    );
  }
}