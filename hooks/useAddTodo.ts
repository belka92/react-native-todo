import { setToDos } from "../store/todoSlice";
import { ITodo } from "../types/types";
import { useAppDispatch } from "./redux";

const useAddTodo = () => {
  const dispatch = useAppDispatch();

  const addTodo = (newTodo: ITodo) => {
    dispatch(setToDos(newTodo));
  };
  return {
    addTodo,
  };
};

export default useAddTodo;
