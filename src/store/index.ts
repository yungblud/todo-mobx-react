import InputStore from './input';
import TodosStore from './todos';

class RootStore {
  input: InputStore;

  todos: TodosStore;

  constructor() {
    this.input = new InputStore(this);
    this.todos = new TodosStore(this);
  }
}

export default RootStore;
