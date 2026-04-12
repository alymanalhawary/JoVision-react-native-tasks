import React from "react";
import { Button, View } from "react-native";
import { StyleSheet } from "react-native";
import MyFunctionPage from "../Components/MyFunctionComponent_Task21";
const { useState } = require("react")

const Task21=() =>{
    const [showPage,setShowPage]=useState(false);
    const onButtonPress =()=>{
        setShowPage(!showPage);
    };
    return (
        <View>
            <Button title="Show" onPress={onButtonPress}/>
            {showPage && <MyFunctionPage/>}
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
export default Task21;