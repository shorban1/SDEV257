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

export default function Films() {
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
      const response = await fetch("https://www.swapi.tech/api/films");
      const items = await response.json();
      setItems(items.result);
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
  );
}
