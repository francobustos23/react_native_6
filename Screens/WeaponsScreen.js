import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";

export const WeaponsScreen = () => {
    const [weapons, setWeapons] = useState([]);
    const [filteredWeapons, setFilteredWeapons] = useState([]);

    const fetchWeapons = async () => {
        try {
            const response = await fetch("https://bymykel.github.io/CSGO-API/api/en/skins.json");
            const data = await response.json();
            setWeapons(data);
            // Inicialmente, filteredWeapons está vacío
            setFilteredWeapons([]);
        } catch (error) {
            console.error("Error fetching weapons:", error);
        }
    }

    useEffect(() => {
        fetchWeapons();
    }, []);

    const filterByCategory = (category) => {
        const filtered = weapons.filter(item => item.category.name === category);
        setFilteredWeapons(filtered);
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => filterByCategory("Pistols")} style={styles.button}>
                    <Text style={styles.buttonText}>Pistols</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => filterByCategory("Rifles")} style={styles.button}>
                    <Text style={styles.buttonText}>Rifles</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => filterByCategory("Heavy")} style={styles.button}>
                    <Text style={styles.buttonText}>Heavy</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => filterByCategory("SMGs")} style={styles.button}>
                    <Text style={styles.buttonText}>SMGs</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => filterByCategory("Knives")} style={styles.button}>
                    <Text style={styles.buttonText}>Knives</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => filterByCategory("Gloves")} style={styles.button}>
                    <Text style={styles.buttonText}>Gloves</Text>
                </TouchableOpacity>
                {/* Agrega más botones según las categorías que tengas */}
            </View>
            {filteredWeapons.length > 0 ? (
                <FlatList
                    data={filteredWeapons}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <Text style={styles.text}>{item.name}</Text>
                            <Image source={{ uri: item.image }} style={styles.image} />
                        </View>
                    )}
                />
            ) : (
                <Text style={styles.noItemsText}>No se encontraron elementos</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#b1b1b1",
        flexDirection: "row",
    },
    buttonsContainer: {
        flexDirection: "column",
        //  justifyContent: "space-around",
        marginBottom: 10,
        width: 110,
    },
    button: {
        backgroundColor: "blue",
        padding: 6,
        margin: 5,
        borderRadius: 5,
        width: 77,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    itemContainer: {
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    image: {
        width: 250,
        height: 170,
        resizeMode: "cover",
    },
    noItemsText: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default WeaponsScreen;
