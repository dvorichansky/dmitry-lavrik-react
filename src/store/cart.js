import { observable, computed, action } from "mobx";
import productsStore from "./products";

class Cart {
  @observable products = [{ id: 1, cnt: 2 }];

  @computed get total() {
    return this.products.reduce((t, pr) => {
      let product = productsStore.getById(pr.id);
      return t + pr.price * pr.current;
    }, 0);
  }

  @action add(id) {
    this.products.push({ id, cnt: 1 });
  }

  @action change(id, cnt) {
    let index = this.products.findIndex(pr => pr.id === id);

    if (index !== -1) {
      this.products[index].current = cnt;
    }
  }

  @action remove(id) {
    let index = this.products.findIndex(pr => pr.id === id);

    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}

export default new Cart();
