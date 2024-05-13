import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground source={{uri:"https://wallpapers.com/images/hd/720p-counter-strike-global-offensive-background-f3x2vc2byan807cl.jpg"}} style={styles.image}>
            <View style={styles.container}> 
                <Image source={require('../img/logocs.png')} style={{width:scale(350), height: verticalScale(80)}} />
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
        width: scale(750),
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        padding:20
    },
    button: {
        backgroundColor: "grey",
        padding: 10,
        width: scale(140),
        borderRadius: 5,
        marginTop: "17%",
    },
    buttonText: {
        fontSize: 20,
        color: "white",
        textAlign: "center",
        fontWeight: "bold"
    },
});

export default HomeScreen;
