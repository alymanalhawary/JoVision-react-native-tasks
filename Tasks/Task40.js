import { TextInput } from "react-native";
import { Button } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { connect, Provider } from "react-redux";
import store from "../Redux/store";

const { Component } = require("react");

class ComponentOne extends Component{
    render(){
        const {text,setText}=this.props;
        return (
            <View>
                <Text>Component One</Text>
                <TextInput
                placeholder="Enter Text"
                value={text}
                onChangeText={setText}
                />
            </View>
        )
    }
}
const mapStateToProps=state=>({
    text :state.text,
});
const mapDispatchToProps=dispatch =>({
    setText:value=>
        dispatch({
            type :'SET_TEXT',
            payload:value,
        })
})
const ConnectedComponentOne=connect(
    mapStateToProps,
    mapDispatchToProps,
)(ComponentOne);

class MainContent extends Component{
    constructor(props){
        super(props);
        this.state={
            showComponent:true,
        }
    }
    toggleComponent =() =>{
        this.setState(prevState =>({
            showComponent :!prevState.showComponent,
        }))
    }
    render(){
        const {showComponent} =this.state;
        return (
            <View>
                <Text>Task 40</Text>
                <Button 
                title={showComponent ? 'Hide Component One':'Show Component One'}
                onPress={this.toggleComponent}
                />
                {showComponent && <ConnectedComponentOne/>}
            </View>
        )
    }
}
class Task40 extends Component {
    render(){
        return (
            <Provider store={store}>
                <MainContent/>
            </Provider>
        )
    }
}
const styles=StyleSheet.create({
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
export default Task40;