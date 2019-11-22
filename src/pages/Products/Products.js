import React from "react";

import cartModel from "~/store/cart";
import { observer } from "mobx-react";

import { routesMap, urlBuilder } from "~/routes/routes";
import { Link } from "react-router-dom";

@observer
class Products extends React.Component {
  render() {

    const productsList = cartModel.products.map(
      ({ id, title, price, description, img } = product, i) => {
        return (
          <div className="col-6" key={id}>
            <div className="list-group-item shadow mb-3">
              <img
                src={img}
                alt="Generic placeholder image"
                width="200"
                className="ml-lg-5 order-1 order-lg-2 mb-2"
              ></img>
              <div className="media-body order-2 order-lg-1">
                <h5 className="mt-0 font-weight-bold mb-2">{title}</h5>
                <p className="font-italic text-muted mb-2 small">
                  {description}
                </p>
                <div className="media justify-content-between">
                  <h6 className="font-weight-bold mt-1 my-2">${price}</h6>
                  <Link to={urlBuilder('product', {id: id})} className="btn btn-success">
                    Buy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      }
    );

    return (
      <div>
        <div className="row">{productsList}</div>
      </div>
    );
  }
}

export default Products;
