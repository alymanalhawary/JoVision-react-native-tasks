import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

const { createBottomTabNavigator } = require("@react-navigation/bottom-tabs");

const Tab =createBottomTabNavigator();
const ScreenOne =() =>{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Screen One </Text>
        </View>
    )
}
const ScreenTwo =()=>{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Screen Two </Text>
        </View>
    )
}
const ScreenThree =()=>{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Screen Three </Text>
        </View>
    )
}
const ScreenFour =()=>{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Screen Four</Text>
        </View>
    )
}
const Task41=() =>{
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Tab 1" component={ScreenOne}/>
                <Tab.Screen name="Tab 2" component={ScreenTwo}/>
                <Tab.Screen name="Tab 3" component={ScreenThree}/>
                <Tab.Screen name="Tab 4" component={ScreenFour}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
const styles=StyleSheet.create({
     container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
  },
})
export default Task41;