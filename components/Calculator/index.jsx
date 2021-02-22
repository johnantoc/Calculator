import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../Button";
import InputBox from "../InputBox";
import { buttons } from "../../utils/constants";
import calculate from "../../utils/calculate";

const Calculator = () => {
  const [output, setOutput] = useState("");
  const onPress = (curVal, preVal) => {
    const output = calculate(curVal, preVal);
    setOutput(output);
  };

  return (
    <View style={styles.viewContainer}>
      <View style={styles.inputContainer}>
        <InputBox value={output} />
      </View>
      <View style={styles.buttonContainer}>
        {buttons.map(({ name, value }) => (
          <Button
            key={name}
            value={value}
            pressed={() => onPress(value, output)}
          />
        ))}
      </View>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
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
