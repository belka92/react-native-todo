import { StyleSheet } from "react-native";

export const useStyles = () => {
  const styles = StyleSheet.create({
    container: {
      height: 50,
      width: 335,
      borderWidth: 1,
      borderRadius: 6,
      alignSelf: "center",
      flexDirection: "row",
      borderColor: "black",
      alignItems: "center",
      backgroundColor: "#edf4f5",
    },

    input: {
      flex: 1,
      width: 280,
      fontSize: 14,
      paddingHorizontal: 10,
      alignItems: "center",
    },

    icon: {
      paddingRight: 15,
    },
  });

  return {
    styles,
  };
};
