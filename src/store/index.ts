import InputStore from './input';

class RootStore {
  input: InputStore;

  constructor() {
    this.input = new InputStore(this);
  }
}

export default RootStore;
