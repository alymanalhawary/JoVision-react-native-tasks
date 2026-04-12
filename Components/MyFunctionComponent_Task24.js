import { StyleSheet, Text, View } from "react-native";

const { forwardRef, useState, useImperativeHandle } = require("react")

const MyFunctionPage =forwardRef((props,ref)=>
{
    const [childText,setChildText]=useState("");
    useImperativeHandle (ref,()=>({
        updateText(newText){
            setChildText(newText);
        },
    }));
    return (
        <View>
            <Text>{childText}</Text>
        </View>
    );
});
const styles=StyleSheet.create({
    container:{
        marginTop :20,
        alignItems:"center",
    },
    text:{
        fontSize:22,
    },
});
export default MyFunctionPage;