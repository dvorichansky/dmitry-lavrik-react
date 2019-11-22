import Products from "~/pages/Products/Products";
import Product from "~/pages/Product/Product";
import Cart from "~/pages/Cart/Cart";
import Order from "~/pages/Order/Order";
import Result from "~/pages/Result/Result";
import Post from "~/pages/Post/Post";
import PageError404 from "~/pages/error404/error404";

let routes = [  
  {
    name: "products",
    url: "/",
    component: Products,
    exact: true
  },
  {
    name: "product",
    url: "/product/:id",
    component: Product,
    exact: true
  },
  {
    name: "cart",
    url: "/cart",
    component: Cart,
    exact: true
  },
  {
    name: "order",
    url: "/order",
    component: Order,
    exact: true
  },
  {
    name: "result",
    url: "/result",
    component: Result,
    exact: true
  },
  {
    name: "post",
    url: "/post/:url",
    component: Post,
    exact: true
  },
  {
    name: "**",
    component: PageError404
  }
];

let routesMap = {};

routes.forEach(route => {
  if (route.hasOwnProperty("name")) {
    routesMap[route.name] = route.url;
  }
});

let urlBuilder = function(name, params) {
  if (!routesMap.hasOwnProperty(name)) {
    return null;
  }

  let url = routesMap[name]; // post/:url

  for (let key in params) {
    url = url.replace(":" + key, params[key]);
  }

  return url;
};

export default routes;
export { routesMap, urlBuilder };
