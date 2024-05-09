import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Video from 'react-native-video'

export const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground source={{uri:"https://wallpapers.com/images/hd/720p-counter-strike-global-offensive-background-f3x2vc2byan807cl.jpg"}} style={styles.image}>
            <View style={styles.container}> 
                <Image source={require('../img/logocs.png')} style={{width:410, height:100}} />
                <TouchableOpacity
                    onPress={() => navigation.navigate("Agents")}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>View Agents</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        padding:20
    },
    button: {
        backgroundColor: "grey",
        padding: 10,
        width: 150,
        borderRadius: 5,
        marginTop: "50%",
    },
    buttonText: {
        fontSize: 20,
        color: "white",
        textAlign: "center",
        fontWeight: "bold"
    },
});

export default HomeScreen;
