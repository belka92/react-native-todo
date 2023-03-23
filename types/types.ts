export interface ITodo {
  id: string;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface ITodoState {
  todos: ITodo[];
}
