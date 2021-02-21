import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "./components/Button";
import InputBox from "./components/InputBox";
import { buttons } from "./utils/constants";
import calculate from "./utils/calculate";

export default function App() {
  const [output, setOutput] = useState("");
  const onPress = (value) => {
    const output = calculate(value);
    setOutput(output);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.viewContainer}>
        <View style={styles.inputContainer}>
          <InputBox value={output} />
        </View>
        <View style={styles.buttonContainer}>
          {buttons.map(({ name, value }) => (
            <Button key={name} value={value} name={name} pressed={onPress} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  viewContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  inputContainer: {
    flex: 0.3,
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    flex: 0.7,
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
    flexDirection: "row",
  },
});
