import { View, Text } from "react-native";
import React from "react";
import { useStyles } from "./useStyles";

const Header = () => {
  const { styles } = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Todo App</Text>
    </View>
  );
};

export default Header;
