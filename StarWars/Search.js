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

export default function Search() {
  const [submittedText, setSubmittedText] = useState("");
  const modalProps = {
    animationType: "fade",
    transparent: true,
    visible: Boolean(submittedText),
  };
  return (
    <>
      <TextInput
        style={styles.search}
        placeholder="Search..."
        onSubmitEditing={(e) => {
          setSubmittedText(e.nativeEvent.text);
        }}
        onFocus={() => {
          setSubmittedText("");
        }}
      />
      <Modal {...modalProps}>
        <View style={styles.modalContainer}>
          <View style={styles.modalInner}>
            <View style={styles.modalTitleContainer}>
              <Text style={styles.modalTitle}>
                {'Results for "' + submittedText + '"'}
              </Text>
            </View>
            <ScrollView style={styles.modalContent}>
              <Text>{"no results"}</Text>
            </ScrollView>
          </View>
          <TouchableOpacity
            style={styles.modalClose}
            onPress={() => {
              setSubmittedText("");
            }}
          >
            <Text style={styles.modalCloseText}>{"Close"}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  search: {
    height: 35,
    borderColor: "#dedede",
    borderWidth: 1,
    paddingLeft: 10,
    backgroundColor: "#fefefe",
    margin: 10,
    marginBottom: 0,
  },
  modalContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#0008",
    justifyContent: "center",
    alignItems: "center",
  },
  modalInner: {
    width: 300,
    height: 400,
    borderRadius: 10,
    backgroundColor: "#fefefe",
    justifyContent: "top",
    alignItems: "left",
  },
  modalTitleContainer: {
    width: "100%",
    minHeight: 40,
    justifyContent: "center",
    alignItems: "left",
    backgroundColor: "#eeeeee",
    borderWidth: 1,
    borderColor: "#dedede",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
  },
  modalTitle: {
    fontSize: 16,
    color: "#0066ff",
    padding: 10,
  },
  modalContent: {
    width: "100%",
    height: "100%",
    padding: 10,
  },
  modalClose: {
    width: 300,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0066ff",
    borderRadius: 9,
    marginTop: 10,
  },
  modalCloseText: {
    fontSize: 16,
    color: "#fefefe",
  },
});
