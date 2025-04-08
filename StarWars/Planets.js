import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Search from "./Search";
export default function Planets() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchCourses() {
      const response = await fetch(
        "https://www.swapi.tech/api/planets?page=1&limit=60&expanded=true"
      );
      const items = await response.json();
      setItems(items.results);
    }

    fetchCourses();
  });
  return (
    <ScrollView style={styles.container}>
      <Search></Search>
      {items.map((item, index) => {
        return (
          <View style={styles.planetCard} key={index}>
            <Text style={styles.planetTitle}>{item.properties.name}</Text>
            <View style={styles.planetDetails}>
              <Text>Climate: {item.properties.climate}</Text>
              <Text>Terrain: {item.properties.terrain}</Text>
              <Text>Surface Water: {item.properties.surface_water}</Text>
              <Text>Gravity: {item.properties.gravity}</Text>
              <Text>Diameter: {item.properties.diameter}</Text>
              <Text>Orbital Period: {item.properties.orbital_period}</Text>
              <Text>Rotation Period: {item.properties.rotation_period}</Text>
              <Text>Population: {item.properties.population}</Text>
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
  planetCard: {
    padding: 10,
    margin: 10,
    backgroundColor: "#fefefe",
    borderRadius: 10,
  },
  planetTitle: {
    fontSize: 20,
    color: "#0066ff",
  },
});
