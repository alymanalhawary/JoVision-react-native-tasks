import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const ScreenOne = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 1</Text>

      <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} />
      <View style={styles.space} />
      <Button title="Go to Screen 3" onPress={() => navigation.navigate('Screen3')} />
      <View style={styles.space} />
      <Button title="Go to Screen 4" onPress={() => navigation.navigate('Screen4')} />
    </View>
  );
};

const ScreenTwo = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 2</Text>

      <Button title="Go to Screen 1" onPress={() => navigation.navigate('Screen1')} />
      <View style={styles.space} />
      <Button title="Go to Screen 3" onPress={() => navigation.navigate('Screen3')} />
      <View style={styles.space} />
      <Button title="Go to Screen 4" onPress={() => navigation.navigate('Screen4')} />
    </View>
  );
};

const ScreenThree = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 3</Text>

      <Button title="Go to Screen 1" onPress={() => navigation.navigate('Screen1')} />
      <View style={styles.space} />
      <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} />
      <View style={styles.space} />
      <Button title="Go to Screen 4" onPress={() => navigation.navigate('Screen4')} />
    </View>
  );
};

const ScreenFour = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 4</Text>

      <Button title="Go to Screen 1" onPress={() => navigation.navigate('Screen1')} />
      <View style={styles.space} />
      <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} />
      <View style={styles.space} />
      <Button title="Go to Screen 3" onPress={() => navigation.navigate('Screen3')} />
    </View>
  );
};

const Task42 = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Screen1" component={ScreenOne} />
        <Tab.Screen name="Screen2" component={ScreenTwo} />
        <Tab.Screen name="Screen3" component={ScreenThree} />
        <Tab.Screen name="Screen4" component={ScreenFour} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  space: {
    height: 10,
  },
});

export default Task42;