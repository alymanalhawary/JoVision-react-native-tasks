import { StyleSheet, Text, View } from "react-native";

const { useEffect } = require("react")

const MyFunctionPage =() =>{
    useEffect (()=>{
        console.log("MyFunctionPage loaded");
        return () =>{
            console.log("MyFunctionPage unloaded");
        };
    },[]
);
return (
    <View style={styles.container}>
        <Text style={styles.text}>This is MyFunctionPage</Text>
        <Text style={styles.text}>Alyaman Alhawary</Text>
    </View>
);
};
const styles=StyleSheet.create({
    container :{
        marginTop:20,
        alignItems:"center",
    },
    text:{
        fontSize :20,
        marginBottom:10,
    },
});
export default MyFunctionPage;