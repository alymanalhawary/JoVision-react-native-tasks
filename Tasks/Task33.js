import { useRef, useState } from "react";
import { Image, Pressable, Text } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import Video from "react-native-video";
const Task33 =()=>{
    const videoRef=useRef(null);
    const [paused,SetPaused]=useState(true);
    const [showPoster,setShowPoster]=useState(true);
    const handleVideoPress =()=>{
        if(showPoster){
            setShowPoster(false);
            SetPaused(false);
        }
        else {
            SetPaused((prev)=>!prev);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Video Player</Text>
            <View style={styles.videoContainer}>
<Video
ref={videoRef}
source={require("../Resource/video.mp4")}
style={styles.video}
resizeMode="cover"
controls={false}
paused={paused}
/>
{showPoster && (
    <Image
    source={require("../Resource/image1.jpg")}
    style={styles.poster}
    />
)}
<Pressable style={styles.overlay} onPress={handleVideoPress}>
    <Text style={styles.overlayText}>

        {paused ?"Play" :"Pause"}
    </Text>
    
</Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  videoContainer: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "black",
    position: "relative",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  poster: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
});

export default Task33;