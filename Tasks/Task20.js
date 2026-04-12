import React from "react";
import { Button, View } from "react-native";
import { StyleSheet } from "react-native";
import MyClassPage from "../Components/MyClassComponent_Task20";

const { useState } = require("react")

const Task20=() =>{
    const [showPage,setShowPage]=useState(false);
    const onButtonPress =()=>{
        setShowPage(!showPage);
    };
    return (
        <View>
            <Button title="Show" onPress={onButtonPress}/>
            {showPage && <MyClassPage/>}
        </View>
    );

};
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
});
export default Task20;