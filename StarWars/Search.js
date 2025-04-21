import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";

import ResponseModal from "./ResponseModal";
import { styles } from "./styles";

export default function Search() {
  const [submittedText, setSubmittedText] = useState("");
  const modalProps = {
    animationType: "fade",
    transparent: true,
    visible: Boolean(submittedText),
  };

  const AnimatedTouchableOpacity =
    Animated.createAnimatedComponent(TouchableOpacity);

  const modalWidth = useSharedValue(300);
  const modalHeight = useSharedValue(400);
  const modalCloseWidth = useSharedValue(300);
  const modalCloseHeight = useSharedValue(40);

  const modalAnimatedStyles = useAnimatedStyle(() => ({
    width: modalWidth.value,
    height: modalHeight.value,
  }));
  const modalCloseAnimatedStyles = useAnimatedStyle(() => ({
    width: modalCloseWidth.value,
    height: modalCloseHeight.value,
  }));
  return (
    <>
      <TextInput
        style={styles.search}
        placeholder="Search..."
        onSubmitEditing={(e) => {
          setSubmittedText(e.nativeEvent.text);
          modalWidth.value = 0;
          modalHeight.value = 0;
          modalCloseWidth.value = 0;
          modalCloseHeight.value = 0;
          modalWidth.value = withSpring(300);
          modalHeight.value = withSpring(400);
          modalCloseWidth.value = withSpring(300);
          modalCloseHeight.value = withSpring(40);
        }}
        onFocus={() => {
          setSubmittedText("");
        }}
      />
      <ResponseModal
        title={'Results for "' + submittedText + '"'}
        dependency={submittedText}
        resetDependency={() => {
          setSubmittedText("");
        }}
      >
        <Text>{"no results"}</Text>
      </ResponseModal>
    </>
  );
}
