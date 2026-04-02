import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task15 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Task 15</Text>
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

export default Task15;