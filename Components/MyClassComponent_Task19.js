import { Component } from "react";
import { View,Text,StyleSheet } from "react-native";

class MyClassComponent_Task19 extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.Text}>This is MyClassPage</Text>
                <Text style={styles.Text}>Alyaman Alhawary</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});
export default MyClassComponent_Task19;