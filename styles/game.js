import { StyleSheet } from "react-native";

export default StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "4%",
  },
  appButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "8%",
    marginTop: "2%",
    marginBottom: "2%",
    backgroundColor: "blue",
  },
  appButtonText: {
    fontSize: 24,
    color: "#ff0000",
  },
});