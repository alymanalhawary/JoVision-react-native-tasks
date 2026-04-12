import React from "react";
import { ActivityIndicator, Button, Modal, StyleSheet, Text, View } from "react-native";

const { useState } = require("react")

const Task26=() =>{
    const [ip,setIp]=useState("Your IP will appear here");
    const [loading,setLoading]=useState(false);
    const [blockingLoading,setBlockingLoading]=useState(false);

    const getIpWithAsyncAwait=async()=>{
        try {
            setLoading(true);
            const response=await fetch("https://api.ipify.org?format=json");
            const data =await response.json();
            setIp(data.ip);

        }
        catch (error){
            setIp("Error getting IP");
            console.log("Async/Await Error:",error);
        }
        finally {
            setLoading(false);
        }
    };
    const getIpWithPromisAndBlockedUI =() =>{
        setBlockingLoading(true);
        fetch ("https://api.ipify.org?format=json")
        .then((response)=>response.json())
        .then((data)=>{
            setIp(data.ip);
        })
        .catch((error)=>{
        setIp("Error getting IP");
        console.log("Promise Error:",error);
    })
    .finally(()=>{
        setBlockingLoading(false);
    });
}
return (
    <View style={styles.container}>
        <Text style={styles.text}>{ip}</Text>
        <View style={styles.buttonContainer}>
            <Button title="Get IP Non-Blocking" onPress={getIpWithAsyncAwait} disabled={blockingLoading} />
        </View>
       <View style={styles.buttonContainer}>
        <Button title="Get IP Blocking UI" onPress={getIpWithPromisAndBlockedUI} disabled={loading || blockingLoading}/>
       </View>
       {loading && (
        <ActivityIndicator size="large "/>
       )}
       <Modal transparent visible={blockingLoading} animationType="fade">
<View style={styles.overlay}>
    <View style={styles.overlayBox}>
        <ActivityIndicator size="large" />
        <Text style={styles.overlayText}>Loading... UI is Blocked</Text>
    </View>
</View>
       </Modal>
    </View>
);
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 30,
    textAlign: "center",
  },
  buttonContainer: {
    width: "80%",
    marginBottom: 15,
  },
  loader: {
    marginTop: 20,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayBox: {
    backgroundColor: "white",
    padding: 25,
    borderRadius: 10,
    alignItems: "center",
    width: "75%",
  },
  overlayText: {
    marginTop: 15,
    fontSize: 18,
    textAlign: "center",
  },
});

export default Task26;