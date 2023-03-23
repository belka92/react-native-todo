import React, { useEffect, useMemo } from "react";
import {
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from "react-native";

import Header from "../Header/Header";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";

import { useTodo } from "../../hooks/useTodo";
import { getToDos } from "../../store/todoSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useStyles } from "./useStyles";

const TodoList = () => {
  const { data, fetchNextPage, isRefetching, refetch, isLoading } = useTodo();
  const { styles } = useStyles();
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

export default TodoList;
