import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { ITodo } from "../types/types";
import useRemoveTodo from "../hooks/useRemoveTodo";
import useCompletedTodo from "../hooks/useCompletedTodo";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";

const TodoItem = ({ todo }: { todo: ITodo }) => {
  const [isEditing, setIsEditing] = useState(false);

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
          <View style={styles.text}>
            {!todo?.completed ? (
              <Text numberOfLines={3}>{todo?.todo}</Text>
            ) : (
              <Text
                style={{
                  textDecorationLine: "line-through",
                  textDecorationStyle: "solid",
                }}
              >
                {todo?.todo}
              </Text>
            )}
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
  },
});
