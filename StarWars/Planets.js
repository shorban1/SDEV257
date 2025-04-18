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
import Card from "./Card";
import { styles } from "./styles";
export default function Planets() {
  const [items, setItems] = useState([]);

  const [swipedCard, setSwipedCard] = useState("");
  const swipeModalProps = {
    animationType: "fade",
    transparent: true,
    visible: Boolean(swipedCard),
  };

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
      <Modal {...swipeModalProps}>
        <View style={styles.modalContainer}>
          <View style={styles.modalInner}>
            <View style={styles.modalTitleContainer}>
              <Text style={styles.modalTitle}>{swipedCard}</Text>
            </View>
            <ScrollView style={styles.modalContent}></ScrollView>
          </View>
          <TouchableOpacity
            style={styles.modalClose}
            onPress={() => {
              setSwipedCard("");
            }}
          >
            <Text style={styles.modalCloseText}>{"Close"}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
