import React from "react";
import { StyleSheet, View } from "react-native";

import { Board } from "../components";

const styles = StyleSheet.create({
  container: { backgroundColor: "lime", flex: 1, paddingVertical: 30 }
});

export const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Board />
    </View>
  );
};
