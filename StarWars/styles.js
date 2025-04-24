import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  swipeArea: {
    flex: 1,
  },
  card: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: "#fefefe",
    borderRadius: 10,
    width: 350,
  },
  cardTitle: {
    fontSize: 20,
    color: "#0066ff",
  },
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
  offlineWarning: {
    backgroundColor: "#ff5555",
    color: "#ffffff",
    fontSize: 16,
    padding: 10,
    textAlign: "center",
  },
});
