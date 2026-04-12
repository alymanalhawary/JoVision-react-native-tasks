import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Text,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY='task35_user_info';
const Task35 =() =>{
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [country,setCountry]=useState('');
    useEffect(()=>{
        loadSavedData();
    },[]);
    const loadSavedData=async()=>{
        try{
            const savedData=await AsyncStorage.getItem(STORAGE_KEY);
            if(!savedData){
                return;
            }
            const parsedData=JSON.parse(savedData);
            const {name,age,country,timestamp}=parsedData;
            const savedTime= new Date(timestamp).getTime();
            const currentTime=new Date().getTime();
             const differenceInMilliseconds = currentTime - savedTime;
            const oneMinuteInMilliseconds = 60 * 1000;
            if(differenceInMilliseconds<oneMinuteInMilliseconds){
                setName(name || "");
                setAge (age||"");
                setCountry(country||"");
            }
        }
        catch (error){
            console.log("Error reading data from AsyncStorage:",error);

        }
    }
    const handleSubmit=async() =>{
        try{
            const userObject={
                name:name,
                age:age,
                country:country,
                timestamp:new Date().toISOString(),
            };
            await AsyncStorage.setItem(STORAGE_KEY,JSON.stringify(userObject));
            Alert.alert("Success" ,"Data saved successfully");
        }
        catch(error){
            console.log('Error saving data to AsyncStorage:', error?.message || error);
  Alert.alert('Error', error?.message || 'Something went wrong while saving data');
        }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Task 35</Text>
            <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={enteredName=>setName(enteredName)}
            />
            <TextInput
            style={styles.input}
            placeholder="Age"
            value={age}
            onChangeText={enteredAge=>setAge(enteredAge)}
            />
            <TextInput
            style={styles.input}
            placeholder="Country"
            value={country}
            onChangeText={enteredCountry=>setCountry(enteredCountry)}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 15,
  },
});
export default Task35;

