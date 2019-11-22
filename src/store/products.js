import { observable, computed, action } from "mobx";

class Products {
  @observable items = getProducts();

  @computed get productMap() {
    let map = {};

    this.items.forEach((pr, i) => {
      map[pr.id.toString()] = i;
    });

    return map;
  }

  getById() {
    let index = this.productMap[id];

    return index === undefined ? null : this.items[index];
  }
}

export default new Products();

function getProducts() {
  return [
    {
      id: 1,
      title: "iPhone 11 Pro",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
      img:
        "https://i.citrus.ua/uploads/shop/3/6/36a537b7e456c7930ea6e94e6c09dcb5.jpg",
      price: 1500,
      rest: 89
    },
    {
      id: 2,
      title: "iPhone 11 Pro Max",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
      img:
        "https://i.citrus.ua/uploads/shop/6/b/6b43ee14654f2a6f4a8b26f3da56094e.jpg",
      price: 2000,
      rest: 95
    },
    {
      id: 3,
      title: "iPhone 11",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
      img:
        "https://i.citrus.ua/uploads/shop/0/9/09b50ab1617f7d174fda7e370c9f374f.jpg",
      price: 1000,
      rest: 150
    }
  ];
}
