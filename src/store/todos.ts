import { observable, action } from 'mobx';
import { RootState, Todo } from './types';

export default class TodosStore {
  root: RootState;

  @observable todos: Todo[] = [
    {
      id: 1,
      todo: '잠 자기',
    },
    {
      id: 2,
      todo: 'React Conf 보기',
    },
  ];

  @action
  removeTodo = (id: number) => {
    this.todos = this.todos.filter(todo => todo.id !== id);
  };

  constructor(root: any) {
    this.root = root;
  }
}
