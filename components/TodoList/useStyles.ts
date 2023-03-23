import { StyleSheet } from "react-native";

export const useStyles = () => {
  const styles = StyleSheet.create({
    header: {
      backgroundColor: "rgba(255,255,255,0.9)",

      paddingBottom: 14,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
    },
  });

  return {
    styles,
  };
};
