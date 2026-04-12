import { useState } from "react";
import { Text } from "react-native";
import { RefreshControl } from "react-native";
import { ScrollView } from "react-native";
import { View } from "react-native";

const { StyleSheet } = require("react-native");
function generateRandomWord(length) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
const createRandomWords = () => {
  const words = [];
  for (let i = 0; i < 100; i++) {
    words.push(generateRandomWord(6));
  }
  return words;
};
const Task36 =() =>{
    const [words,setWords]=useState(createRandomWords());
    const [refreshing,setRefreshing]=useState(false);
    const onRefresh =() =>{
        setRefreshing(true);
        setTimeout(() =>{
            setWords(createRandomWords());
            setRefreshing(false);
        },1000);
    }
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer} refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }>
                {words.map((word,index)=>(
                    <Text key={index} style={styles.text}>{index+1}. {word}</Text>
                ))}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
});
export default Task36;