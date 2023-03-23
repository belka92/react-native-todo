import { useAppDispatch } from "./redux";
import { editToDos } from "../store/todoSlice";

const useEditTodo = () => {
  const dispatch = useAppDispatch();

  const editTodo = (id: number | string, editedTodo: string) => {
    dispatch(editToDos({ id, todo: editedTodo }));
  };

  return {
    editTodo,
  };
};

export default useEditTodo;
