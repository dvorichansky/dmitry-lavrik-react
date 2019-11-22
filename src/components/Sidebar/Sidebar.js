import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import routes from "~/routes/routes";
import { routesMap } from "~/routes/routes";
import { observer } from "mobx-react";

@observer
class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <ul className="sidebar-list list-group">
          <li className="sidebar-list__item list-group-item">
            <Link to={routesMap.products}>Products</Link>
          </li>
          <li className="sidebar-list__item list-group-item">
            <Link to={routesMap.cart}>Cart</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
