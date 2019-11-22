import React from "react";
import { Form, Modal, Button } from "react-bootstrap";
import styles from "./Order.module.css";

import orderModel from "~/store/order";
import { observer } from "mobx-react";

import { routesMap } from "~/routes/routes";
import { Link } from "react-router-dom";

@observer
class Order extends React.Component {
  nameRef = React.createRef();
  emailRef = React.createRef();
  phoneRef = React.createRef();

  state = {
    showModal: false
  };

  show = () => {
    this.setState({ showModal: true });
  };

  hide = () => {
    this.setState({ showModal: false });
  };

  confirm = () => {
    this.hide();
    this.props.history.push(routesMap.result)
  };

  render() {
    let formFields = [];

    for (let name in orderModel.formData) {
      let field = orderModel.formData[name];

      formFields.push(
        <Form.Group key={name} controlId={"order-form-" + name}>
          <Form.Label>{field.label}</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={field.value}
            onChange={e => orderModel.change(name, e.target.value)}
            ref={this.nameRef}
          />
        </Form.Group>
      );
    }
    
    return (
      <div>
        <hr></hr>
        <h2>Order</h2>
        <hr></hr>
        <Form className={styles.boxForm}>
          {formFields}

          <Button variant="primary" onClick={this.show}>
            Submit
          </Button>
        </Form>
        <br></br>
        <Link to={routesMap.cart} className="btn btn-primary">
          Back
        </Link>

        <Modal show={this.state.showModal} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Check information</Modal.Title>
          </Modal.Header>
          <Modal.Body>content</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hide}>
              Close
            </Button>
            <Button variant="primary" onClick={() => this.confirm()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Order;
