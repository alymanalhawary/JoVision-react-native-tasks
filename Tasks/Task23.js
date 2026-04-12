import { useState } from "react"
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import MyClassPage from "../Components/MyClassComponent_Task23";

const Task23 =() =>{
    const [text,setText]=useState("");
    return (
        <View style={styles.container}>
            <Text style={styles.parentText}>{text}</Text>
<MyClassPage onTextChange={setText}/>
        </View>
    )
}
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  parentText: {
    fontSize: 22,
    marginBottom: 20,
  },
});

export default Task23;