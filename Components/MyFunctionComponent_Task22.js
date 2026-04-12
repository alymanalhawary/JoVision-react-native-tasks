import { StyleSheet, TextInput, View } from "react-native"

const MyFunctionPage =({onTextChange})=>{
return (
    <View style={styles.container}>
        <TextInput
        styles={styles.input}
        placeholder="Type here..."
        onChangeText={onTextChange}
        />
    </View>
)
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "80%",
    alignItems: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 10,
  },
});

export default MyFunctionPage;