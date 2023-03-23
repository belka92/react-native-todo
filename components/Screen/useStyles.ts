import { StyleSheet } from "react-native";

export const useStyles = () => {
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
    },
  });

  return {
    styles,
  };
};
