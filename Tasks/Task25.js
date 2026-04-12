import { useRef } from "react"
import { StyleSheet, TextInput, View } from "react-native";
import MyClassPage from "../Components/MyClassComponent_Task25";

const Task25=() =>{
    const myClassPageRef =useRef(null);
    const handleTextChange=(newText) =>{
        if (myClassPageRef.current){
            myClassPageRef.current.updateText(newText);
        }
    };
    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder="Type here..."
            onChangeText={handleTextChange}
            />
            <MyClassPage ref={myClassPageRef}/>
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

export default Task25;