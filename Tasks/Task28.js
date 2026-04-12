import { ListFormat } from "typescript";

const { Alert, Pressable, Image, View, FlatList, StyleSheet } = require("react-native");

const Task28 =() =>{
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
    const handleImagePress =(index) =>{
        Alert.alert("Selected Image" ,`You have selected image :${index+1}`);
    };
    const renderItem =({item,index})=>{
        return (
<Pressable onPress={()=>handleImagePress(index)}>
    <Image source={item.source} style={styles.image}/>
</Pressable>
        );
    };
    return (
        <View style={styles.container}>
            <FlatList
            data={images}
            renderItem={renderItem}
            keyExtractor={(item)=>item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.ListContainer}
            />
        </View>
    );
};
const styles=StyleSheet.create({
    container:{
        flex :1,
        justifyContent:"center"
    },
    ListContainer:{
        paddingHorizontal:10
    },
    image:{
        width:150,
        height:100,
        marginHorizontal:8,
        borderRadius:10,
        resizeMode:"cover",
    }
});
export default Task28;