import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
export default function Spaceships() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchCourses() {
      const response = await fetch(
        "https://www.swapi.tech/api/starships?page=1&limit=36&expanded=true"
      );
      const items = await response.json();
      setItems(items.results);
    }

    fetchCourses();
  });
  return (
    <ScrollView style={styles.container}>
      {items.map((item, index) => {
        return (
          <View style={styles.spaceshipCard} key={index}>
            <Text style={styles.spaceshipTitle}>{item.properties.name}</Text>
            <View style={styles.spaceshipDetails}>
              <Text>Model: {item.properties.model}</Text>
              <Text>Manufacturer: {item.properties.manufacturer}</Text>
              <Text>Cost in Credits: {item.properties.cost_in_credits}</Text>
              <Text>Length: {item.properties.length}</Text>
              <Text>Crew: {item.properties.crew}</Text>
              <Text>Passengers: {item.properties.passengers}</Text>
              <Text>
                Max Atmosphering Speed: {item.properties.max_atmosphering_speed}
              </Text>
              <Text>
                Hyperdrive Rating: {item.properties.hyperdrive_rating}
              </Text>
              <Text>Cargo Capacity: {item.properties.cargo_capacity}</Text>
              <Text>Consumables: {item.properties.consumables}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spaceshipCard: {
    padding: 10,
    margin: 10,
    backgroundColor: "#fefefe",
    borderRadius: 10,
  },
  spaceshipTitle: {
    fontSize: 20,
    color: "#0066ff",
  },
  spaceshipDetails: {},
});
