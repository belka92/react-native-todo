import React, { useState } from "react";
import { View, Text, Button, Pressable } from "react-native";

import TodoForm from "../TodoForm/TodoForm";
import useRemoveTodo from "../../hooks/useRemoveTodo";
import useCompletedTodo from "../../hooks/useCompletedTodo";

import { useStyles } from "./useStyles";
import { ITodo } from "../../types/types";
import { MaterialIcons, Feather } from "@expo/vector-icons";

const TodoItem = ({ todo }: { todo: ITodo }) => {
  const [isEditing, setIsEditing] = useState(false);

  const { styles } = useStyles(todo);
  const { removeTodo } = useRemoveTodo();

  const deleteTodo = (id: number | string) => {
    removeTodo(id);
  };

  const handleUpdate = () => setIsEditing(true);
  const { toggleCompletedTodo } = useCompletedTodo();

  const toggleCompleted = async (id: number | string) => {
    await toggleCompletedTodo(id);
  };

  return (
    <View style={{ padding: 8 }}>
      {isEditing ? (
        <TodoForm
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          todo={todo}
        />
      ) : (
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>{todo?.todo}</Text>
          </View>

          <Pressable onPress={handleUpdate}>
            <Feather name="edit-3" size={18} color="black" />
          </Pressable>
          <MaterialIcons
            name="delete-forever"
            size={20}
            color="#d41919"
            onPress={() => deleteTodo(todo.id)}
          />
          <Button
            onPress={() => {
              toggleCompleted(todo.id);
            }}
            title={todo?.completed ? "Done" : "New"}
          />
        </View>
      )}
    </View>
  );
};

export default TodoItem;
