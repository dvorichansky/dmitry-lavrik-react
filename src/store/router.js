import React from "react";
import { observable, computed, action } from "mobx";

import Cart from "~/pages/Cart/Cart";
import Order from "~/pages/Order/Order";
import Result from "~/pages/Result/Result";

class Router {
  products = {
    cart: () => <Cart />,
    order: () => <Order />,
    result: () => <Result />
  };

  @observable activeRoute = "cart";

  @computed get component() {
    return this.products[this.activeRoute]();
  }

  @action moveTo(route) {
    this.activeRoute = route;
  }
}

export default new Router();
