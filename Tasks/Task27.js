import React, { useState } from "react";
import { View, Button, Image, StyleSheet, Alert } from "react-native";

const Task27 =() =>{
    const [selectedImage ,setSelectedImage] =useState(1);
    const images={
        1:require("../Resource/image1.jpg"),
        2:require("../Resource/image2.jpeg"),
        3:require("../Resource/image3.jpeg"),
    };
    const showImagePicker =() =>{
        Alert.alert(
            "Choose Image",
            "Pick the number of the image you want to display",
            [
                {
                    text:"1",
                    onPress :()=>setSelectedImage(1),
                },
                {
                    text:"2",
                    onPress: () =>setSelectedImage(2),

                },
                {
text:"3",
onPress:() =>setSelectedImage(3),
                },
                {
                    text :"Cancel",
                    style:"cancel",
                },


            ]
        )
    }
    return (
    <View style={styles.container}>
      <Image source={images[selectedImage]} style={styles.image} />
      <View style={styles.buttonContainer}>
        <Button title="Choose Image" onPress={showImagePicker} />
      </View>
    </View>
  );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:20,
    },
    image:{
        width:250,
        height:250,
        resizeMode:"cover",
        marginBottom:20,
        borderRadius:10,
    },
    buttonContainer:{
        width:"70%",
    },
});
export default Task27;
