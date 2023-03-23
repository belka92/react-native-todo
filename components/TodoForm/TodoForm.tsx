import React, { useState } from "react";
import { View, TextInput, GestureResponderEvent } from "react-native";

import { ITodo } from "../../types/types";
import useAddTodo from "../../hooks/useAddTodo";
import useEditTodo from "../../hooks/useEditTodo";

import shortid from "shortid";
import { useStyles } from "./useStyles";
import { MaterialIcons } from "@expo/vector-icons";

const TodoForm = ({ isEditing, setIsEditing, todo }: TodoFormProps) => {
  const { styles } = useStyles();

  const [userInput, setUserInput] = useState(isEditing ? todo?.todo : "");

  const { addTodo } = useAddTodo();
  const { editTodo } = useEditTodo();

  const handleSubmit = async (e: GestureResponderEvent) => {
    e.preventDefault();
    if (isEditing && userInput?.trim() && todo && setIsEditing) {
      editTodo(todo.id, userInput);
      setIsEditing(false);
    } else {
      if (userInput?.trim()) {
        await addTodo({
          id: shortid.generate(),
          todo: userInput,
          completed: false,
          userId: 1,
        });
      }
      setUserInput("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        multiline={true}
        onChangeText={(value) => setUserInput(value)}
        value={userInput}
        style={styles.input}
        numberOfLines={1}
        placeholder="Add Todo"
      />
      {!isEditing ? (
        <MaterialIcons
          name="library-add"
          size={30}
          color="green"
          style={styles.icon}
          onPress={handleSubmit}
        />
      ) : (
        <MaterialIcons
          name="update"
          size={30}
          color="black"
          style={styles.icon}
          onPress={handleSubmit}
        />
      )}
    </View>
  );
};

export default TodoForm;

export type TodoFormProps = {
  isEditing?: boolean;
  setIsEditing?: (e: boolean) => void;
  todo?: ITodo;
};
