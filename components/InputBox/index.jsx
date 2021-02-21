import React from "react";
import { StyleSheet, Text, View } from "react-native";

const InputBox = ({ value }) => (
  <View style={styles.InputBox}>
    <Text style={styles.text}>{value}</Text>
  </View>
);

export default InputBox;

const styles = StyleSheet.create({
  InputBox: {
    flex: 1,
    width: "100%",
    borderColor: "#192f6a",
    borderWidth: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  text: {
    fontSize: 50,
    textTransform: "uppercase",
  },
});
