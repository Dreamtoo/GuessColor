import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import update from "immutability-helper";
import { margins, fontSizes, colors as baseColors, rainbowColors, mergeRules } from "./../styles/base";
import GameStyles from "./../styles/game";

const MAX_CHOICES = 7;
const MAX_CHOOSES = 9;

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.answers = [];
    this.row = 0;
    this.col = 0;
    this.state = {
      chooses: (new Array(MAX_CHOOSES)).fill(
        (new Array(props.game.level)).fill("black")
      ),
    };
  }

  choose = (color) => {
    const { game } = this.props;
    const chooses = update(this.state.chooses, {
      [this.row]: {
        [this.col]: { $set: color },
      },
    });
    this.setState({ chooses: chooses });

    // Update the chooses pointer.
    this.col += 1;

    if (this.col === game.level) {
      this.row += 1;
      this.col = 0;
    }

    // Reset the chooses pointer.
    if (this.row === MAX_CHOOSES) {
      this.row = 0;
      this.col = 0;

      // Show the answers.
    }
  }

  renderChoices() {
    const { game } = this.props;

    const { width } = mergeRules(GameStyles.sideChoice);
    const itemSize = (width / MAX_CHOICES) - margins.md;
    const itemStyle = {
      width: itemSize,
      height: itemSize,
      borderRadius: itemSize * 0.5,
    };

    return Object.keys(rainbowColors).map(color => {
      const customStyle = {
        ...itemStyle,
        backgroundColor: rainbowColors[color],
      };

      return (
        <TouchableOpacity
          key={`choice-${color}`}
          style={[GameStyles.choiceItem, customStyle]}
          onPress={() => this.choose(color)}
        />
      );
    });
  }

  renderChooses() {
    const { game } = this.props;

    const { width, height } = mergeRules(GameStyles.sideChoose);
    const containerStyle = {
      height: height / MAX_CHOOSES,
    };
    const itemSize = Math.min(width / game.level, containerStyle.height) - margins.md;
    const itemStyle = {
      width: itemSize,
      height: itemSize,
      borderRadius: itemSize * 0.5,
    };
    const textStyle = {
      fontSize: itemSize * 0.48,
      color: baseColors.white,
    };

    // let chooses = [];
    // let items, i, j;


    // for (i = 0; i < MAX_CHOOSES; i++) {
    //   state.chooses.push([]);
    //   items = [];

    //   for (j = 0; j < game.level; j++) {
    //     items.push(
    //       <View key={`choose-${i}-${j}`} style={[GameStyles.chooseItem, itemStyle]}>
    //         <Text style={textStyle}>?</Text>
    //       </View>
    //     );
    //   }

    //   chooses.push(
    //     <View key={`choose-${i}`} style={[GameStyles.chooseContainer, containerStyle]}>
    //       {items}
    //     </View>
    //   );
    // }

    return this.state.chooses.map((items, i) => (
      <View key={`choose-${i}`} style={[GameStyles.chooseContainer, containerStyle]}>
        {
          items.map((item, j) => {
            const customStyle = {
              ...itemStyle,
              backgroundColor: baseColors[item],
            };

            return (
              <View key={`choose-${i}-${j}`} style={[GameStyles.chooseItem, customStyle]}>
                <Text style={textStyle}>?</Text>
              </View>
            );
          })
        }
      </View>
    ));
  }

  // renderHints() {
  //   const { game } = this.props;
  //   let hints = [];
  //   let cols, i, j;

  //   for (i = 0; i < MAX_CHOICES_ROW; i++) {
  //     cols = [];

  //     for (j = 0; j < 5; j++) {
  //       cols.push(
  //         <ChooseCol key={`hints-${i}-${j}`} style={GameStyles.hintCol} />
  //       );
  //     }

  //     hints.push(
  //       <ChooseRow key={i} style={[GameStyles.sideTopInnerRow, GameStyles.hintRow]}>
  //         {cols}
  //       </ChooseRow >
  //     );
  //   }

  //   return hints;
  // }

  render() {
    return (
      <View style={[GameStyles.wrapper]}>
        <View style={[GameStyles.panel, GameStyles.panelTop]}>
          <View style={[GameStyles.side, GameStyles.sideChoose]}>
            {this.renderChooses()}
          </View>

          <View style={[GameStyles.side, GameStyles.sideHint]}>
            {/* {this.renderHints()} */}
          </View>
        </View>

        <View style={[GameStyles.panel, GameStyles.panelCenter]}>
          <View style={[GameStyles.side, GameStyles.sideAnswer]}>
            {/* {this.renderAnswer()} */}
          </View>

          <View style={[GameStyles.side, GameStyles.sideScore]}>
            {/* {this.renderScore()} */}
          </View>
        </View>

        <View style={[GameStyles.panel, GameStyles.panelBottom]}>
          <View style={[GameStyles.side, GameStyles.sideChoice]}>
            {this.renderChoices()}
          </View>
        </View>
      </View>
    );
  }
}
