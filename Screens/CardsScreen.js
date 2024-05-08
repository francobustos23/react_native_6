import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";

export const CardsScreen = () => {
    const fechtCards = async () => {
        const response = await fetch("https://api.clashroyale.com/v1/cards?limit=10", {
            headers: {
                Authorization: `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImFlYWIzNGM3LTY0ZjEtNDg4OC05ZTQwLWExMDkzYjcyNmNjNyIsImlhdCI6MTcxNTE4MTU3NCwic3ViIjoiZGV2ZWxvcGVyLzNmYzkxZGI0LTdhMzUtMzA4Ny05OWRkLWIzMjMxMDlhYzkzOSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMzguMTIxLjExMy4yNyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.T9zcRJWzT9_Or31MCWgGMMOX9ndgGDNW5M-_3cBVEFsI3rvIQxrQpKDIHaSlR3jjTZv954DbtbJGwcRZou-Ggg"}`
            }
        })
        const data = await response.json();
        setCards(data.items);
        console.log(data.items);
    }


    return (
        <View>
            <Text style={styles.title}>Cards</Text>
            <View style={styles.cardContainer}>
                <FlatList
                    data={cards}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text>{item.name}</Text>
                            <Text>{item.description}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    card: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        marginVertical: 5,
        borderRadius: 8,
        width: '45%',
    },
});
