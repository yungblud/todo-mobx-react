export interface InputState {
  title: string;
  changeInput(name: string, value: string): void;
}

export interface TodosState {
  todos: Todo[];
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
