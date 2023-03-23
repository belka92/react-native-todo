import { deleteTodo } from "../store/todoSlice";
import { useAppDispatch } from "./redux";

const useRemoveTodo = () => {
  const dispatch = useAppDispatch();

  const removeTodo = (id: number | string) => {
    dispatch(deleteTodo(id));
  };
  return {
    removeTodo,
  };
};

export default useRemoveTodo;
