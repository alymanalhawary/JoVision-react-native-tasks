import React from "react";
import  { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

  class MyClassPage extends Component{
    componentDidMount(){
        console.log("MyClassPage loaded");
    }
    componentWillUnmount(){
        console.log("MyClassPage unloaded");
    }
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>This is MyPageClass</Text>
                <Text style={styles.text}>Alyaman Alhawary</Text>
            </View>
        );
    }
  }
  const styles=StyleSheet.create({
    container:{
        marginTop:20,
        alignItems:"center",
    },
    text :{
        fontSize:20,
        marginBottom:10,
    },
  });
  export default MyClassPage;