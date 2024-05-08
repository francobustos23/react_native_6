import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground source={{uri:"https://img.redbull.com/images/c_crop,w_1920,h_960,x_0,y_0,f_auto,q_auto/c_scale,w_1200/redbullcom/2020/3/13/hk3rfkvmjl4zx1d9wbze/clash-royale-temporada-9-meta"}} style={styles.image}>
            <View style={styles.container}> 
                <Text style={styles.title}>Clash Royale</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Stacks")}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>View the cards</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        color: "white",
    },
    button: {
        backgroundColor: "purple",
        padding: 10,
        width: 150,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    },
});

export default HomeScreen;
