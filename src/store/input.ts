import { observable } from 'mobx';

export default class InputStore {
  root: any;

  @observable title: string = '';

  constructor(root: any) {
    this.root = root;
  }
}
