import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

export const AgentsScreen = () => {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        const fetchAgents = async () => {
            try {
                const response = await fetch("https://bymykel.github.io/CSGO-API/api/en/agents.json");
                const data = await response.json();
                setAgents(data.map(agent => ({
                    ...agent,
                    description: agent.description.replace(/(<([^>]+)>|\\n|\\)/ig, ""),
                })));
            } catch (error) {
                console.error("Error fetching agents:", error);
            }
        }

        fetchAgents();
    }, []); 

    const getRarityText = (rarityName) => {
        switch (rarityName) {
            case "Superior":
                return "Legendary";
            case "Exceptional":
                return "Mythical";
            case "Master":
                return "Ancient";
            case "Distinguished":
                return "Rare";
            default:
                return "";
        }
    };

    return (
        <View style={styles.container}>
            <FlatList 
                data={agents}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={{color:"#9E9E9E", fontSize:15, margin:10}}>Team: <Text style={{fontSize: 15,fontWeight: "bold",
                        color: item.team.name === 'Terrorist' ? '#F3A740' : '#409AF3'}}>{item.team.name}
                        </Text></Text>
                        
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={{color:"#9E9E9E", fontWeight: "bold"}}>Name: </Text>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={{color:"#9E9E9E", fontWeight: "bold"}}>Rarity: </Text>
                        <Text style={{color: item.rarity.color, fontSize:17, margin:5, backgroundColor:"#BFC0C2", padding:5, borderRadius:5, fontWeight: "bold"}}>{getRarityText(item.rarity.name)}</Text>
                        <Text style={{color:"#9E9E9E", fontWeight: "bold", marginTop:10}}>Description: </Text>
                        <Text style={{color:"#DDDDDD", padding:7, margin:5, fontSize:12, fontWeight: "bold"}}>{item.description}</Text>
                    </View>
                )}
            />        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#b1b1b1",
    },
    itemContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    image: {
        width: 250,
        height: 170,
        resizeMode: "cover",
    },
    text: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        backgroundColor: "#BFC0C2",
        borderRadius:5,
        padding:5,
    },
    textdes: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#DDDDDD",
    },
});
