import { useEffect } from "react";
import { useAppDispatch } from "./redux";
import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getToDos } from "../store/todoSlice";

export const useTodo = () => {
  const dispatch = useAppDispatch();
  const getAllTodo = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/todos");

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const { isRefetching, isLoading, isError, data, refetch, fetchNextPage } =
    useInfiniteQuery(["todos.dummyJson"], getAllTodo, {
      getNextPageParam: (lastPage) => lastPage.next,
      getPreviousPageParam: (firstPage) => firstPage.prev,
    });

  return {
    isRefetching,
    isLoading,
    isError,
    // The query returns this structure
    data: data?.pages[0]?.todos,
    refetch,
    fetchNextPage,
  };
};
