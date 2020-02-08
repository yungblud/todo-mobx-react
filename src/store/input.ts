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

  constructor(root: any) {
    this.root = root;
  }
}
