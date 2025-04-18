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
import { styles } from "./styles";

export default function Card(props) {
  function onScroll(e) {
    Math.abs(e.nativeEvent.contentOffset.x) > 100 && props.onSwipe();
  }

  const scrollProps = {
    horizontal: true,
    pagingEnabled: true,
    showsHorizontalScrollIndicator: false,
    scrollEventThrottle: 20,
    onScroll,
  };
  return (
    <ScrollView style={styles.swipeArea} {...scrollProps}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{props.title}</Text>
        {props.children}
      </View>
    </ScrollView>
  );
}
