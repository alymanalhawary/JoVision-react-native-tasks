import React, { useRef, useState } from "react";
import {
  View,
  FlatList,
  Image,
  Pressable,
  Alert,
  StyleSheet,
  Button,
  Modal,
  Text,
  TextInput,
} from "react-native";

const Task31 = () => {
  const flatListRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [inputIndex, setInputIndex] = useState("");

  const [images, setImages] = useState([
    { id: "1", source: require("../Resource/image1.jpg") },
    { id: "2", source: require("../Resource/image2.jpeg") },
    { id: "3", source: require("../Resource/image3.jpeg") },
    { id: "4", source: require("../Resource/image4.jpeg") },
    { id: "5", source: require("../Resource/image5.jpeg") },
    { id: "6", source: require("../Resource/image6.jpeg") },
    { id: "7", source: require("../Resource/image7.jpeg") },
    { id: "8", source: require("../Resource/image8.jpeg") },
    { id: "9", source: require("../Resource/image9.jpeg") },
    { id: "10", source: require("../Resource/image10.jpeg") },
    { id: "11", source: require("../Resource/image11.jpeg") },
    { id: "12", source: require("../Resource/image12.jpeg") },
    { id: "13", source: require("../Resource/image13.jpeg") },
    { id: "14", source: require("../Resource/image14.jpeg") },
  ]);

  const handleImagePress = (index) => {
    Alert.alert("Selected Image", `You have selected image : ${index + 1}`);
  };

  const handleDeleteImage = (imageId) => {
    const updatedImages = images.filter((item) => item.id !== imageId);
    setImages(updatedImages);
  };

  const handleDuplicatedImage = (index) => {
    const imageToDuplicate = images[index];

    const duplicatedImage = {
      id: Date.now().toString() + Math.random().toString(),
      source: imageToDuplicate.source,
    };

    const updatedImages = [...images];
    updatedImages.splice(index + 1, 0, duplicatedImage);
    setImages(updatedImages);
  };

  const handleSubmitIndex = () => {
    const parsedIndex = parseInt(inputIndex, 10);

    if (isNaN(parsedIndex) || parsedIndex < 1 || parsedIndex > images.length) {
      Alert.alert(
        "Invalid Input",
        `Please enter a number between 1 and ${images.length}`
      );
      return;
    }

    const targetIndex = parsedIndex - 1;

    setModalVisible(false);
    setInputIndex("");

    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: targetIndex,
        animated: true,
      });
    }
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.imageWrapper}>
        <Pressable onPress={() => handleImagePress(index)}>
          <Image source={item.source} style={styles.image} />
        </Pressable>

        <Pressable
          style={styles.duplicateIcon}
          onPress={() => handleDuplicatedImage(index)}
        >
          <Text style={styles.iconText}>+</Text>
        </Pressable>

        <Pressable
          style={styles.deleteIcon}
          onPress={() => handleDeleteImage(item.id)}
        >
          <Text style={styles.iconText}>X</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Go To Image" onPress={() => setModalVisible(true)} />
      </View>

      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        getItemLayout={(data, index) => ({
          length: 166,
          offset: 166 * index,
          index,
        })}
      />

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Enter image index</Text>

            <TextInput
              style={styles.input}
              placeholder={`Enter 1 - ${images.length}`}
              keyboardType="numeric"
              value={inputIndex}
              onChangeText={setInputIndex}
            />

            <View style={styles.modalButtons}>
              <View style={styles.modalButton}>
                <Button title="Submit" onPress={handleSubmitIndex} />
              </View>

              <View style={styles.modalButton}>
                <Button
                  title="Cancel"
                  onPress={() => {
                    setModalVisible(false);
                    setInputIndex("");
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  imageWrapper: {
    marginHorizontal: 8,
    position: "relative",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    resizeMode: "cover",
  },
  duplicateIcon: {
    position: "absolute",
    top: 5,
    left: 5,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  deleteIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalBox: {
    width: "85%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButton: {
    width: "48%",
  },
});

export default Task31;