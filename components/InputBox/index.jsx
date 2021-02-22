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
    borderBottomColor: "#192f6a",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    marginTop: 22,
    overflow: "hidden",
    backgroundColor: "#fff",
    alignSelf: "flex-end",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  text: {
    fontSize: 40,
    textTransform: "uppercase",
  },
});
