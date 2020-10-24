import { observable, action } from 'mobx';

export default class AccountStore {
  @observable count = 0;

  @action onPlus () {
    this.count += 1;
  }
}
