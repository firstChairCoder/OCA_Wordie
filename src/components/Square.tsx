import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { SCREEN_WIDTH } from "../utils/constants";

const styles = StyleSheet.create({
  squareContainer: {
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1.5,
    height: SCREEN_WIDTH / 6.5,
    justifyContent: "center",
    width: SCREEN_WIDTH / 6.5
  },

  letter: {
    fontFamily: "ExtraBold",
    fontSize: SCREEN_WIDTH / 12,
    textTransform: "uppercase"
  }
});

interface SquareProps {
  letter: string;
}
const Square = ({ letter }: SquareProps) => {
  return (
    <View style={styles.squareContainer}>
      <Text style={styles.letter}>{letter}</Text>
    </View>
  );
};

export default Square;
