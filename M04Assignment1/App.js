import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";

StatusBar.setBarStyle("dark-content");

export default () => (
  <View style={styles.container}>
    <MapView
      style={styles.mapView}
      showsPointsOfInterest={false}
      showsUserLocation={true}
      followUserLocation={true}
      initialRegion={{
        latitude: 41.727976,
        longitude: -86.290148,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      <Marker
        title="Chick-fil-A"
        description="Eat Mor Chikin"
        coordinate={{
          latitude: 41.727976,
          longitude: -86.290148,
        }}
      />
    </MapView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "ghostwhite",
  },

  mapView: {
    alignSelf: "stretch",
    height: 450,
    margin: 30,
  },
});
