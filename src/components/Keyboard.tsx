import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";

import { SCREEN_WIDTH } from "../utils/constants";

const keys: string[][] = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["Enter", "z", "x", "c", "v", "b", "n", "m", "<"]
];
const styles = StyleSheet.create({
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
  }
});

const Keyboard = () => {
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
                      flex: key === "<" || key === "Enter" ? 2 : 1,
                      backgroundColor: "#505050"
                    }
                  ]}
                >
                  {key === "<" ? (
                    <Icon name="chevron-left" size={28} color={"#FFF"} />
                  ) : (
                    <Text
                      style={[
                        styles.keyboardKey,
                        { fontSize: key === "Enter" ? 14 : 18 }
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
};

export default Keyboard;
