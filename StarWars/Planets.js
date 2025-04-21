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
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

import Search from "./Search";
import Card from "./Card";
import ResponseModal from "./ResponseModal";

import { styles } from "./styles";

export default function Planets() {
  const [items, setItems] = useState([]);

  const [swipedCard, setSwipedCard] = useState("");

  function onSwipe(name) {
    return () => {
      setSwipedCard(name);
    };
  }
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
      <ResponseModal
        title={swipedCard}
        dependency={swipedCard}
        resetDependency={() => {
          setSwipedCard("");
        }}
      ></ResponseModal>
      {items.map((item, index) => {
        return (
          <Card
            title={item.properties.name}
            onSwipe={onSwipe(item.properties.name)}
            key={index}
          >
            <View>
              <Text>Climate: {item.properties.climate}</Text>
              <Text>Terrain: {item.properties.terrain}</Text>
              <Text>Surface Water: {item.properties.surface_water}</Text>
              <Text>Gravity: {item.properties.gravity}</Text>
              <Text>Diameter: {item.properties.diameter}</Text>
              <Text>Orbital Period: {item.properties.orbital_period}</Text>
              <Text>Rotation Period: {item.properties.rotation_period}</Text>
              <Text>Population: {item.properties.population}</Text>
            </View>
          </Card>
        );
      })}
    </ScrollView>
  );
}
