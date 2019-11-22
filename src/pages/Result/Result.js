import React from "react";
import { Button } from "react-bootstrap";
import styles from "./Result.module.css";

import cartModel from "~/store/cart";
import orderModel from "~/store/order";

import { observer } from "mobx-react";

import { routesMap, urlBuilder } from "~/routes/routes";
import { Link } from "react-router-dom";

@observer
class Result extends React.Component {
  render() {
    let postTmp = [1, 2, 3];
    let links = postTmp.map(post => {
      return (
        <div>
          <Link to={urlBuilder('post', {url: post})}>Post {post}</Link>
        </div>
      );
    });

    return (
      <div>
        <hr></hr>
        <h2>Order</h2>
        <hr></hr>
        <div>Name: {orderModel.formData.name.value}</div>
        <div>Email: {orderModel.formData.email.value}</div>
        <div>Phone: {orderModel.formData.phone.value}</div>
        <div>Total: ${cartModel.total}</div>
        <br></br>
        <Link to={routesMap.cart} className="btn btn-warning">
          Back to the basket
        </Link>
        <hr></hr>
        <div>{links}</div>
      </div>
    );
  }
}

export default Result;
