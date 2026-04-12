import React, {Component, createContext, useContext, useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
const TextContext =createContext();
const TextProvider=({children})=>{
    const [sharedText,setSharedText]=useState("");
    return (
        <TextContext.Provider value={{sharedText,setSharedText}}>
{children}
        </TextContext.Provider>
    )
}
class ComponentOne extends Component{
    static contextType=TextContext;
    render(){
        const {sharedText}=this.context;
        return (
            <Text style={styles.displayText}>{sharedText?sharedText:"No Text yet"}</Text>
        )
    }
}
const ComponentTwo = ()=>{
const {sharedText,setSharedText}=useContext(TextContext);
return (
    <View style={styles.box}>
        <TextInput
        style={styles.input}
        placeholder="Enter Text"
        value={sharedText}
        onChangeText={setSharedText}
        />
        <ComponentOne/>
    </View>
)
}
const Task38 =()=>{
    return (
        <TextProvider>
            <View style={styles.container}>
                <Text style={styles.title}>Task38</Text>
                <ComponentTwo/>
                <ComponentTwo/>
                <ComponentTwo/>
                <ComponentTwo/>
            </View>
        </TextProvider>
    )
}
const styles=StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  box: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
  },
  displayText: {
    fontSize: 18,
    fontWeight: '500',
  },
})
export default Task38;