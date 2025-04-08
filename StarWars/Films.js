import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import Search from "./Search";

export default function Films() {
  const [items, setItems] = useState([]);
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
      {items.map((item, index) => {
        return (
          <View style={styles.filmCard} key={index}>
            <Text style={styles.filmTitle}>
              {"Episode " +
                item.properties.episode_id +
                " - " +
                item.properties.title}
            </Text>
            <View style={styles.filmDetails}>
              <Text>Director: {item.properties.director}</Text>
              <Text>Producers: {item.properties.producer}</Text>
              <Text>Release Date: {item.properties.release_date}</Text>
              <Text>
                Opening Crawl:{" "}
                {"\r\t" +
                  item.properties.opening_crawl.replaceAll("\n", "\n\t")}
              </Text>
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
  filmCard: {
    padding: 10,
    margin: 10,
    backgroundColor: "#fefefe",
    borderRadius: 10,
  },
  filmTitle: {
    fontSize: 20,
    color: "#0066ff",
  },
});
