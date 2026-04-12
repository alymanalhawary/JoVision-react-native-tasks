import React,{useState} from "react";
import { Button } from "react-native";
import { View,StyleSheet} from "react-native";
import MyClassComponent_Task19 from "../Components/MyClassComponent_Task19"
const Task19=()=>{
    const [showPage,setShowPage]=useState(false);
    const onButtonPress =() =>{
        setShowPage (true);
    };
    return (
        <View style={styles.container}>
<Button title="Show" onPress={onButtonPress}/>
{showPage && <MyClassComponent_Task19/>}
        </View>
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Task19;