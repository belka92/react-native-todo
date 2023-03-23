import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Todo App</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
});
