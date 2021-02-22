import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Button = ({ value, pressed }) => (
  <View style={styles.Button}>
    <LinearGradient
      style={styles.gradientView}
      colors={["#4c669f", "#3b5998", "#192f6a"]}
    >
      <View style={styles.pressable}>
        <Pressable
          style={styles.buttonView}
          onPress={pressed}
          android_ripple={{
            color: "white",
            borderless: true,
          }}
        >
          <Text style={styles.text}>{value}</Text>
        </Pressable>
      </View>
    </LinearGradient>
  </View>
);

export default Button;

const styles = StyleSheet.create({
  Button: {
    display: "flex",
    width: "25%",
    height: "25%",
  },
  buttonView: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  gradientView: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 4,
    borderColor: "white",
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  pressable: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
  },
  text: {
    color: "white",
    fontSize: 40,
    textTransform: "uppercase",
  },
});
