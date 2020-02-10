export interface InputState {
  title: string;
  changeInput(name: string, value: string): void;
  addTodo(): void;
}

export interface TodosState {
  todos: Todo[];
  removeTodo(id: number): void;
}

export interface RootState {
  input: InputState;
  todos: TodosState;
}

export enum InputNames {
  TITLE = 'title',
}

export interface Todo {
  id: number;
  todo: string;
}
