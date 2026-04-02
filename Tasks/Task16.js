import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task16 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Task 16</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
  },
});

export default Task16;