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

import { styles } from "./styles";

export default function Details(props) {
  const item = props.route.params.item;
  return (
    <View style={styles.container}>
      <ConnectionStatus />
      <ScrollView>
        <Text style={styles.detailsHeader}>{item.properties.name}</Text>
        <View style={styles.detailsContainer}>
          <View style={styles.detail}>
            <Text style={styles.detailTitle}>Climate:</Text>
            <Text style={styles.detailInfo}>{item.properties.climate}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailTitle}>Terrain:</Text>
            <Text style={styles.detailInfo}>{item.properties.terrain}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailTitle}>Surface Water:</Text>
            <Text style={styles.detailInfo}>
              {item.properties.surface_water}
            </Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailTitle}>Gravity:</Text>
            <Text style={styles.detailInfo}>{item.properties.gravity}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailTitle}>Diameter:</Text>
            <Text style={styles.detailInfo}>{item.properties.diameter}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailTitle}>Orbital Period:</Text>
            <Text style={styles.detailInfo}>
              {item.properties.orbital_period}
            </Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailTitle}>Rotation Period:</Text>
            <Text style={styles.detailInfo}>
              {item.properties.rotation_period}
            </Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailTitle}>Population:</Text>
            <Text style={styles.detailInfo}>{item.properties.population}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
