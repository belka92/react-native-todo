import { completedToDos } from "../store/todoSlice";
import { useAppDispatch } from "./redux";

const useCompletedTodo = () => {
  const dispatch = useAppDispatch();

  const toggleCompletedTodo = (id: number | string) => {
    dispatch(completedToDos(id));
  };
  return {
    toggleCompletedTodo,
  };
};

export default useCompletedTodo;
