import React from "react";

import cartModel from "~/store/cart";
import { observer } from "mobx-react";

@observer
class Product extends React.Component {
  render() {
    const productId = this.props.match.params.id;

    const { img, title, description, price } = cartModel.products.find(
      x => x.id == productId
    );

    return (
      <div>
        <div className="row">
          <div className="col-6">
            <img
              src={img}
              alt="Generic placeholder image"
              width="300"
              className="ml-lg-5 order-1 order-lg-2 mb-2"
            ></img>
          </div>

          <div className="col-6">
            <div className="media-body order-2 order-lg-1">
              <h5 className="mt-0 font-weight-bold mb-2">{title}</h5>
              <p className="font-italic text-muted mb-2 small">{description}</p>
              <div className="media justify-content-between">
                <h6 className="font-weight-bold mt-1 my-2">${price}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
