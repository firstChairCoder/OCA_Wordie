import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";

import { guesses, SCREEN_HEIGHT, SCREEN_WIDTH } from "../utils/constants";

const styles = StyleSheet.create({
  board: {
    alignItems: "center",
    height: SCREEN_HEIGHT,
    justifyContent: "space-evenly",
    width: SCREEN_WIDTH
  },
  keyboardContainer: {
    alignItems: "center"
  },
  keyboardRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 4
  },
  keyboardKey: {
    color: "#FFF",
    fontFamily: "ExtraBold",
    textTransform: "uppercase"
  },
  keyWrapper: {
    alignItems: "center",
    borderRadius: 4,
    justifyContent: "center",
    margin: 2
  },
  squareContainer: {
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1.5,
    height: SCREEN_WIDTH / 6.5,
    justifyContent: "center",
    width: SCREEN_WIDTH / 6.5
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

export const GameScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "lime", paddingVertical: 30 }}>
      <Board />
    </View>
  );
};

const keys: string[][] = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["Enter", "z", "x", "c", "v", "b", "n", "m", "<"]
];
function Keyboard() {
  return (
    <View style={styles.keyboardContainer}>
      {/* <Text>Keboard</Text> */}
      {keys.map((row, index) => {
        return (
          <View
            key={index}
            style={[
              styles.keyboardRow,
              { width: index === 1 ? SCREEN_WIDTH * 0.95 : SCREEN_WIDTH }
            ]}
          >
            {row.map((key) => {
              const rowLength = row.length + 2; //2 accounts for margin
              return (
                <Pressable
                  key={key}
                  style={[
                    styles.keyWrapper,
                    {
                      height: SCREEN_WIDTH / rowLength + 2 + 16,
                      flex: key == "<" || key == "Enter" ? 2 : 1,
                      backgroundColor: "#505050"
                    }
                  ]}
                >
                  {key == "<" ? (
                    <Icon name="chevron-left" size={28} color={"#FFF"} />
                  ) : (
                    <Text
                      style={[
                        styles.keyboardKey,
                        { fontSize: key == "Enter" ? 14 : 18 }
                      ]}
                    >
                      {key}
                    </Text>
                  )}
                </Pressable>
              );
            })}
          </View>
        );
      })}
    </View>
  );
}

interface SquareProps {
  letter: string;
}
function Square({ letter }: SquareProps) {
  return (
    <View style={styles.squareContainer}>
      <Text>{letter}</Text>
    </View>
  );
}

function Board() {
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
}
