import { StyleSheet } from "react-native";
import { ITodo } from "../../types/types";

export const useStyles = (todo: ITodo) => {
  const styles = StyleSheet.create({
    container: {
      gap: 5,
      flex: 1,
      padding: 10,
      borderWidth: 1,
      borderRadius: 6,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#d7f8fc",
    },

    text: {
      width: 200,
      textDecorationLine: todo.completed ? "line-through" : "none",
    },
  });

  return {
    styles,
  };
};
