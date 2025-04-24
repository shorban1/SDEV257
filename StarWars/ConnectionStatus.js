import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { styles } from "./styles";
const connectedMap = {
  none: false,
  unknown: false,
  wifi: true,
  cell: true,
  mobile: true,
};

export default function ConnectionStatus() {
  const [connected, setConnected] = useState("");
  useEffect(() => {
    function onNetworkChange(connection) {
      setConnected(connectedMap[connection.type]);
    }
    const unsubscribe = NetInfo.addEventListener(onNetworkChange);
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    !connected && (
      <Text style={styles.offlineWarning}>
        {"You are offline. \n Some features may not work as expected."}
      </Text>
    )
  );
}
