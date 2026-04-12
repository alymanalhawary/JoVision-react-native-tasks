import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Video from "react-native-video";
const Task32 =()=>{
const [showPoster,setShowPoster]=useState(true);
const [paused,setPaused]=useState(true);
const handlePlay =() =>{
    setShowPoster(false);
    setPaused(false);
};
return (
    <View>
        <Text>My Video</Text>
        <View>
            <Video
            source={require("../Resource/video.mp4")}
            controls
            resizeMode="cover"
            paused={paused}
            style={styles.video}
            />
            {showPoster && (
                <Pressable style={styles.posterOverlay} onPress={handlePlay}>
                    <Image
                    source ={require("../Resource/image1.jpg")}
                    style={styles.poster}
                    />
                    <Text style={styles.playText}>Tap To Play</Text>
                </Pressable>
            )}
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
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "black",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  posterOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  poster: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  playText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
});

export default Task32;