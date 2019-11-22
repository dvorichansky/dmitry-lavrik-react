import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "~/routes/routes";
import { observer } from "mobx-react";
import Sidebar from "./components/Sidebar/Sidebar";

@observer
class App extends React.Component {
  render() {
    let routesMap = routes.map(route => {
      return (
        <Route
          path={route.url}
          component={route.component}
          exact={route.exact}
          key={route.url}
        />
      );
    });

    return (
      <Router>
        <Container>
          <Row>
            <Col xs={3}>
              <Sidebar />
            </Col>
            <Col xs={9}>
              <Switch>{routesMap}</Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
