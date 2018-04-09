import { Dimensions, StyleSheet } from "react-native";

export const dimensions = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width
}

export const colors = {
  violet: "#9400D3",
  indigo: "#4B0082",
  blue: "#0000FF",
  green: "#00FF00",
  yellow: "#FFFF00",
  orange: "#FF7F00",
  red: "#FF0000",
}

export const rainbowColors = {
  violet: colors.violet,
  indigo: colors.indigo,
  blue: colors.blue,
  green: colors.green,
  yellow: colors.yellow,
  orange: colors.orange,
  red: colors.red,
}

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
}

export const fonts = {
  sm: 12,
  md: 18,
  lg: 28,
  primary: "Cochin"
  
}

export const createStyles = (overrideStyles = {}) => {
  return StyleSheet.create({ ...baseStyles, ...overrideStyles });
};