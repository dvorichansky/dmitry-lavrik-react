import { observable, computed, action } from "mobx";

class Order {
  @observable formData = {
    name: {
      label: "Your Name",
      value: ""
    },
    email: {
      label: "Email",
      value: ""
    },
    phone: {
      label: "Phone",
      value: ""
    }
  };

  @action change(name, value) {
    this.formData[name].value = value;
  }

}

export default new Order();
