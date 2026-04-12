import { useState } from "react";
import { Text } from "react-native";
import { Button } from "react-native";
import { TextInput } from "react-native";
import { View } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux"
import store from "../Redux/store";
import { StyleSheet } from "react-native";

const ComponentOne =() =>{
    const dispatch =useDispatch();
    const text=useSelector(state=>state.text);
    return (
        <View style={styles.box}>
            <Text style={styles.label}>Component One</Text>
            <TextInput
            style={styles.input}
            placeholder="Enter text"
            value={text}
            onChangeText={value=> dispatch({
                type:'SET_TEXT',
                payload:value,
            })
        }
            />
        </View>
    )
}
const Task39Content =() =>{
    const[showComponent,setShowComponent]=useState(true);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Task 39</Text>
            <Button
            title={showComponent? 'Hide Component One' :'show Component One'}
            onPress={()=>setShowComponent(!showComponent)}

            />
            <View style={{marginTop:20}}>
                {showComponent && <ComponentOne/>}
            </View>
        </View>
    )
}
const Task39 =() =>{
    return (
        <Provider store={store}>
            <Task39Content/>
        </Provider>
    )
}
const styles =StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  box: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
});
export default Task39;