import { StyleSheet } from "react-native";
import useCurrentTime from "../Hooks/useCurrentTime";
import { View } from "react-native";
import { Text } from "react-native";
const Task34 =() =>{
    const currentDate=useCurrentTime();
    const timeString =currentDate.toLocaleTimeString();
    const dateString =currentDate.toLocaleDateString();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Current Time and Date</Text>
            <Text style={styles.text}>Time :{timeString}</Text>
            <Text style={styles.text}>Date:{dateString}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default Task34;