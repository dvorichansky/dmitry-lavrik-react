import React from "react";
import BasketClass from "~/components/BasketClass";

import cartModel from "~/store/cart";
import { observer } from "mobx-react";

import { routesMap } from "~/routes/routes";
import { Link } from "react-router-dom";

@observer
class Cart extends React.Component {
  render() {
    const productsTr = cartModel.products.map(
      ({ id, current } = product, i) => {
        return (
          <tr key={id}>
            <td>{title}</td>
            <td>${price}</td>
            <td>
              <BasketClass
                min={1}
                max={5}
                cnt={current}
                onChange={() => 0}
              />
            </td>
            <td>${1 * current}</td>
            <td>
              <button type="button" onClick={() => cartModel.remove(id)}>
                delete
              </button>
            </td>
          </tr>
        );
      }
    );

    return (
      <div>
        <div>
          <hr></hr>
          <h2>Cart</h2>
          <hr></hr>
          <table className="table table-bordered">
            <tbody>{productsTr}</tbody>
          </table>
          <strong>${cartModel.total}</strong>
          <hr></hr>
          <Link to={routesMap.order} className="btn btn-primary">
            Send
          </Link>
        </div>
      </div>
    );
  }
}

export default Cart;
