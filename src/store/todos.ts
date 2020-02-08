import { observable } from 'mobx';
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

  constructor(root: any) {
    this.root = root;
  }
}
