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
import ConnectionStatus from "./ConnectionStatus";

import HeroImage from "./HeroImage";
import Search from "./Search";
import Card from "./Card";
import ResponseModal from "./ResponseModal";

import Details from "./Details";

import { styles } from "./styles";

const hero = require("./assets/images/planets-hero.jpeg");

export default function Planets({ navigation }) {
  const [planets, setPlanets] = useState([]);
  const [items, setItems] = useState([]);

  const [swipedCard, setSwipedCard] = useState("");

  function onSwipe(item) {
    return () => navigation.navigate("Details", { item: item });
  }

  function onSearch(e) {
    setItems(
      planets.filter(
        (i) =>
          e.nativeEvent.text.length === 0 ||
          i.properties.name
            .toLowerCase()
            .includes(e.nativeEvent.text.toLowerCase())
      )
    );
  }

  useEffect(() => {
    async function fetchCourses() {
      const response = await fetch(
        "https://www.swapi.tech/api/planets?page=1&limit=60&expanded=true"
      );
      const json = await response.json();

      setPlanets(json.results);
      setItems(json.results);
    }
    fetchCourses();
  }, []);
  return (
    <>
      <ConnectionStatus />
      <ScrollView style={styles.container}>
        <HeroImage imageSrc={hero} />
        <Search onSearch={onSearch}></Search>
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
              onSwipe={onSwipe(item)}
              key={index}
            >
              <View>
                <Text>Climate: {item.properties.climate}</Text>
                <Text>Terrain: {item.properties.terrain}</Text>
                <Text>Surface Water: {item.properties.surface_water}</Text>
                <Text>Gravity: {item.properties.gravity}</Text>
                <Text>Population: {item.properties.population}</Text>
              </View>
            </Card>
          );
        })}
      </ScrollView>
    </>
  );
}
