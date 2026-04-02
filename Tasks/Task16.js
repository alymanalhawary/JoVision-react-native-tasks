import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Task16 = () => {
  const [showName, setShowName] = useState(false);

  const onButtonPress = () => {
    setShowName(!showName);
  };

  return (
    <View style={styles.container}>
      <Button title="Show" onPress={onButtonPress} />
      {showName && <Text style={styles.text}>Alyaman Alhawary</Text>}
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
    marginTop: 20,
    fontSize: 22,
  },
});

export default Task16;