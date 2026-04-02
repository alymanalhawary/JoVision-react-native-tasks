import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Task17 =() =>{
    const [showName,setShowName]=useState(false);
    const onButtonPress=()=>{
        setShowName(!showName);

    };
    return (
    <View style={StyleSheet.container}>
        <Button 
        title={showName? "Hide" :"Show"}
        onPress={onButtonPress}
        />
        {showName && <Text style={styles.text} >Alyaman Alhawary</Text>}
    </View>    
    );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        marginTop:20,
        fontSize:22,
    },
});
export default Task17;