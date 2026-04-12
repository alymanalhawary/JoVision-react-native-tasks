import { useRef } from "react"
import { StyleSheet, TextInput, View } from "react-native";
import MyFunctionPage from "../Components/MyFunctionComponent_Task24";

const Task24=() =>{
    const myFunctionPageRef =useRef(null);
    const handleTextChange=(newText) =>{
        if (myFunctionPageRef.current){
            myFunctionPageRef.current.updateText(newText);
        }
    };
    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder="Type here..."
            onChangeText={handleTextChange}
            />
            <MyFunctionPage ref={myFunctionPageRef}/>
        </View>
    )
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
});

export default Task24;