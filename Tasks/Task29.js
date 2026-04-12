const { useRef, useState } = require("react");
const { Alert, Pressable, Image, View, Button, FlatList, Modal, Text, TextInput, StyleSheet } = require("react-native");

const Task29 =()=>{
    const  flatListRef=useRef(null);
    const [modalVisible,setModalVisible]=useState(false);
    const [inputIndex,setInputIndex]=useState("");
    const images =[
        {id:"1",source :require("../Resource/image1.jpg")},
        {id:"2",source :require("../Resource/image2.jpeg")},
        {id:"3",source :require("../Resource/image3.jpeg")},
        {id:"4",source :require("../Resource/image4.jpeg")},
        {id:"5",source :require("../Resource/image5.jpeg")},
        {id:"6",source :require("../Resource/image6.jpeg")},
        {id:"7",source :require("../Resource/image7.jpeg")},
        {id:"8",source :require("../Resource/image8.jpeg")},
        {id:"9",source :require("../Resource/image9.jpeg")},
        {id:"10",source :require("../Resource/image10.jpeg")},
        {id:"11",source :require("../Resource/image11.jpeg")},
        {id:"12",source :require("../Resource/image12.jpeg")},
        {id:"13",source :require("../Resource/image13.jpeg")},
        {id:"14",source :require("../Resource/image14.jpeg")},
    ];
    const handleImagePress=(index)=>{
        const parsedIndex =parseInt(inputIndex,10);
        if (isNaN(parsedIndex) || parsedIndex <1 || parsedIndex >images.length){
            Alert.alert("Invalid Input", `Please Enter a Number Between 1 and ${images.length}`);
            return ;
        }
        const targetIndex=parsedIndex-1;
        setModalVisible(false);
        setInputIndex("");
        if(flatListRef.current){
            flatListRef.current.scrollToIndex({
                index:targetIndex,
                animated:true
            });
        }
    };

    const renderItem=({item,index})=>{
        return (
            <Pressable onPress={()=>handleImagePress(index)}>
                <Image source={item.source}/>
            </Pressable>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button title="Go To Image" onPress={()=>setModalVisible(true)}/>
            </View>
            <FlatList
            ref={flatListRef}
            data={images}
            renderItem={renderItem}
            keyExtractor={(item)=>item.id}
            horizontal
            contentContainerStyle={styles.listContainer}
            getItemLayout={(data,index)=>({
                length:166,
                offset:166*index,
                index

            })}
            />
            <Modal visible={modalVisible} transparent animationType="slide">
                <View style={styles.modelOverlay}>
                    <View style={styles.modelBox}>
                        <Text style={styles.modalTitle}>Enter Image Index</Text>
                        <TextInput style={styles.input}
                        placeholder="{`Enter 1- ${images.length}`}"
                        keyboardType="numeric"
                        value={inputIndex}
                        onChangeText={setInputIndex}
                        />
                        <View style={styles.modelButton}>
                            <View style={styles.modelButton}>
                                <Button title="Submit" onPress={handleImagePress}/>
                            </View>
                            <View style={styles.modelButton}>
                                <Button title="Cancel" onPress={()=>{
                                    setModalVisible(false);
                                    setInputIndex("");
                                } } />
                            </View>
                        </View>
                    </View>
                </View>

            </Modal>
        </View>
    )

}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    },
    buttonContainer:{
        marginBottom:20,
        paddingHorizontal:20,

    },
    listContainer:{
        paddingHorizontal:10
    },
    image:{
        width:150,
        height:150,
        marginHorizontal:8,
        borderRadius:10,
        resizeMode:"cover",
    },
    modelOverlay:{
        flex:1,
        backgroundColor:"rgba(0,0,0,0.4)",
        justifyContent:"center",
        alignItems:"center",
        padding:20,
    },
    modelBox:{
        width:"85%",
        backgroundColor:"white",
        borderRadius:12,
        padding:20,

    },
    modalTitle:{
        fontSize:20,
        marginBottom:15,
        textAlign:"center",
        textAlign:"center",
        fontWeight:"bold"
    },
    input:{
        borderWidth:1,
        borderColor:"gray",
        borderRadius:8,
        padding:10,
        marginBottom:20,
    },
    modelButtons:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    modelButton:{
        width:"48%",
    },

});
export default Task29;