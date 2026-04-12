import { useState } from "react"
import { Text, View } from "react-native";
import MyFunctionPage from "../Components/MyFunctionComponent_Task22";
import { StyleSheet } from "react-native";

const Task22 =() =>{
    const [text,setText]=useState("");
    return (
        <View style={styles.container}>
            <Text style={styles.parentText}>{text}</Text>
<MyFunctionPage onTextChange={setText}/>
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

export default Task22;