import { observable, action } from 'mobx';
import { RootState, InputNames } from './types';

export default class InputStore {
  root: RootState;

  @observable title: string = '';

  @action
  changeInput = (name: InputNames, value: string) => {
    const { input } = this.root;
    input[name] = value;
  };

  @action
  addTodo = () => {
    this.root.todos.todos.push({
      id: this.root.todos.todos[this.root.todos.todos.length - 1].id + 1,
      todo: this.title,
    });
    this.title = '';
  };

  constructor(root: any) {
    this.root = root;
  }
}
