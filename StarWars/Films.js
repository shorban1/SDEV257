import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import ConnectionStatus from "./ConnectionStatus";
import HeroImage from "./HeroImage";
import Search from "./Search";
import ResponseModal from "./ResponseModal";
import Card from "./Card";
import { styles } from "./styles";

const hero = require("./assets/images/film-hero.jpeg");

export default function Films() {
  const [films, setFilms] = useState([]);
  const [items, setItems] = useState([]);

  const [swipedCard, setSwipedCard] = useState("");

  function onSwipe(name) {
    return () => {
      setSwipedCard(name);
    };
  }
  function onSearch(e) {
    setItems(
      films.filter(
        (i) =>
          e.nativeEvent.text.length === 0 ||
          i.properties.title
            .toLowerCase()
            .includes(e.nativeEvent.text.toLowerCase())
      )
    );
  }

  useEffect(() => {
    async function fetchCourses() {
      const response = await fetch("https://www.swapi.tech/api/films");
      const json = await response.json();

      setFilms(json.result);
      setItems(json.result);
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
              title={item.properties.title}
              onSwipe={onSwipe(item.properties.title)}
              key={index}
            >
              <View>
                <Text>Director: {item.properties.director}</Text>
                <Text>Producers: {item.properties.producer}</Text>
                <Text>Release Date: {item.properties.release_date}</Text>
                <Text>
                  Opening Crawl:{" "}
                  {"\r\t" +
                    item.properties.opening_crawl.replaceAll("\n", "\n\t")}
                </Text>
              </View>
            </Card>
          );
        })}
      </ScrollView>
    </>
  );
}
