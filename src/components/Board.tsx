import React from "react";
import { StyleSheet, View } from "react-native";

import { guesses, SCREEN_HEIGHT, SCREEN_WIDTH } from "../utils/constants";
import Keyboard from "./Keyboard";
import Square from "./Square";

const styles = StyleSheet.create({
  board: {
    alignItems: "center",
    height: SCREEN_HEIGHT,
    justifyContent: "space-evenly",
    width: SCREEN_WIDTH
  },
  blockWrapper: {
    alignItems: "center",
    justifyContent: "space-evenly",
    width: SCREEN_WIDTH * 0.9
  },
  squareWrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 8,
    width: "100%"
  }
});

const Board = () => {
  return (
    <View style={styles.board}>
      <View style={styles.blockWrapper}>
        {guesses.map((guess) => {
          return (
            <View key={guess.id} style={styles.squareWrapper}>
              {guess.letters.map((letter, index) => {
                return <Square key={index} letter={letter} />;
              })}
            </View>
          );
        })}
      </View>
      <Keyboard />
    </View>
  );
};

export default Board;
