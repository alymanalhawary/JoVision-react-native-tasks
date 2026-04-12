import { StyleSheet, Text, View } from "react-native";

const { Component } = require("react");

class MyClassPage extends Component {
    constructor(props){
        super(props);
        this.state={
            childText:"",
        };
    }
    updateText=(newText)=>{
        this.setState({childText:newText});
    };
    render(){
        return(
        <View>
            <Text >{this.state.childText}</Text>
        </View>
        );
    }
}
const styles=StyleSheet.create({
 container: {
    marginTop: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 22,
  },   
})
export default MyClassPage;