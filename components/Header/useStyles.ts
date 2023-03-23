import { StyleSheet } from "react-native";

export const useStyles = () => {
  const styles = StyleSheet.create({
    container: {
      alignSelf: "center",
      paddingBottom: 10,
    },
    text: {
      fontSize: 20,
      fontWeight: "600",
    },
  });

  return {
    styles,
  };
};
