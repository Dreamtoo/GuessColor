import { dimensions, margins, paddings, colors, createStyles } from "./base";

const rules = {};

rules.wrapper = {
  flexDirection: "column",
  width: dimensions.width,
  height: dimensions.height * 0.98,
};

rules.panel = {
  flexDirection: "row",
  width: rules.wrapper.width,
};
rules.panelTop = {
  ...rules.panel,
  height: rules.wrapper.height * 0.76,

  // backgroundColor: "teal",
};
rules.panelCenter = {
  ...rules.panel,
  height: rules.wrapper.height * 0.12,

  backgroundColor: "green",
};
rules.panelBottom = {
  ...rules.panel,
  height: rules.wrapper.height * 0.12,

  // backgroundColor: "olive",
};

rules.side = {
  flexDirection: "column",
};
rules.sideChoose = {
  ...rules.side,
  alignItems: "center",
  width: rules.panelTop.width * 0.7,
  height: rules.panelTop.height - paddings.md,
  paddingVertical: paddings.sm,

  // backgroundColor: colors.yellow,
};
rules.sideHint = {
  ...rules.side,
  width: rules.panelTop.width * 0.3,
  height: rules.panelTop.height,

  backgroundColor: "brown",
};
rules.sideAnswer = {
  ...rules.side,
  flexDirection: "row",
  width: rules.panelCenter.width * 0.7,
  height: rules.panelCenter.height,

  backgroundColor: colors.violet,
};
rules.sideScore = {
  ...rules.side,
  flexDirection: "row",
  width: rules.panelCenter.width * 0.3,
  height: rules.panelCenter.height,

  backgroundColor: colors.red,
};
rules.sideChoice = {
  ...rules.side,
  flexDirection: "row",
  alignItems: "center",
  width: rules.panelBottom.width - paddings.md,
  height: rules.panelBottom.height,
  paddingHorizontal: paddings.sm,

  // backgroundColor: colors.orange,
};

rules.chooseContainer = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: rules.sideChoose.width - paddings.md,
  paddingHorizontal: paddings.sm,
};
rules.chooseItem = {
  alignItems: "center",
  justifyContent: "center",
  marginHorizontal: margins.sm,
  backgroundColor: colors.black,
};


rules.choiceItem = {
  marginHorizontal: margins.sm,
};

export default createStyles(rules);