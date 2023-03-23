import React, { useEffect, useMemo } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  RefreshControl,
  ActivityIndicator,
} from "react-native";

import Header from "./Header";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

import { useTodo } from "../hooks/useTodo";
import { getToDos } from "../store/todoSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

const TodoList = () => {
  const { data, fetchNextPage, isRefetching, refetch, isLoading } = useTodo();
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getToDos(data));
  }, []);

  const toDos = useMemo(() => {
    return (
      <FlatList
        data={todos}
        maxToRenderPerBatch={5}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Header />
            <TodoForm />
          </View>
        )}
        onEndReachedThreshold={0.4}
        removeClippedSubviews={true}
        showsVerticalScrollIndicator={false}
        onEndReached={() => fetchNextPage()}
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => <TodoItem todo={item} />}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={() => refetch()}
          />
        }
      />
    );
  }, [isRefetching, isLoading, todos]);

  return (
    <View>
      {!isLoading && toDos}
      {isLoading && <ActivityIndicator />}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgba(255,255,255,0.9)",
    paddingBottom: 14,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export default TodoList;
