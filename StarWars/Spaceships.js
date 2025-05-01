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
import ConnectionStatus from "./ConnectionStatus";
import HeroImage from "./HeroImage";
import Search from "./Search";
import ResponseModal from "./ResponseModal";
import Card from "./Card";
import { styles } from "./styles";

const hero = require("./assets/images/spaceship-hero.jpeg");

export default function Spaceships() {
  const [spaceships, setSpaceships] = useState([]);
  const [items, setItems] = useState([]);

  const [swipedCard, setSwipedCard] = useState("");

  function onSwipe(name) {
    return () => {
      setSwipedCard(name);
    };
  }
  function onSearch(e) {
    setItems(
      spaceships.filter(
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
        "https://www.swapi.tech/api/starships?page=1&limit=60&expanded=true"
      );
      const json = await response.json();

      setSpaceships(json.results);
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
              onSwipe={onSwipe(item.properties.name)}
              key={index}
            >
              <View>
                <Text>Model: {item.properties.model}</Text>
                <Text>Manufacturer: {item.properties.manufacturer}</Text>
                <Text>Cost in Credits: {item.properties.cost_in_credits}</Text>
                <Text>Length: {item.properties.length}</Text>
                <Text>Crew: {item.properties.crew}</Text>
                <Text>Passengers: {item.properties.passengers}</Text>
                <Text>
                  Max Atmosphering Speed:{" "}
                  {item.properties.max_atmosphering_speed}
                </Text>
                <Text>
                  Hyperdrive Rating: {item.properties.hyperdrive_rating}
                </Text>
                <Text>Cargo Capacity: {item.properties.cargo_capacity}</Text>
                <Text>Consumables: {item.properties.consumables}</Text>
              </View>
            </Card>
          );
        })}
      </ScrollView>
    </>
  );
}
