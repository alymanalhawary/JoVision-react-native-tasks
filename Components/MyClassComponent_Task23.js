import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";

class MyClassPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Type here"
          onChangeText={this.props.onTextChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "80%",
    alignItems: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 10,
  },
});

export default MyClassPage;