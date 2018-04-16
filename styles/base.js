import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get("window");

export const dimensions = {
    height: screen.height,
    width: screen.width,
};
export const margins = {
    sm: 10,
    md: 20,
    lg: 30,
    xl: 40,
};
export const paddings = {
    sm: 10,
    md: 20,
    lg: 30,
    xl: 40,
};

export const colors = {
    violet: "#9400D3",
    indigo: "#4B0082",
    blue: "#0000FF",
    green: "#00FF00",
    yellow: "#FFFF00",
    orange: "#FF7F00",
    red: "#FF0000",
    black: "black",
    white: "white",
};
export const rainbowColors = {
    violet: colors.violet,
    indigo: colors.indigo,
    blue: colors.blue,
    green: colors.green,
    yellow: colors.yellow,
    orange: colors.orange,
    red: colors.red,
};

export const fonts = {};
export const fontSizes = {
    sm: 12,
    md: 18,
    lg: 28,
    xl: 36,
};

export const createStyles = (_rules = {}) => {
    return StyleSheet.create(_rules);
};
export const mergeStyles = (_bases = {}, _overrides = {}) => {
    return StyleSheet.create({ ..._bases, ..._overrides });
};
export const mergeRules = (_bases = {}, _overrides = {}) => {
    return StyleSheet.flatten([_bases, _overrides]);
};