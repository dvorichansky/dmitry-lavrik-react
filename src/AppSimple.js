import React from "react";
import update from "react-addons-update";
// import BasketClass from "./BasketClass";
import Input from "./Input/Input";

export default class extends React.Component {
  state = {
    inputOne: "",
    inputTwo: ""
  };

  render() {
    return (
      <div>
        <h2>Lazy input</h2>
        {this.state.inputOne}
        <Input
          nativeProps={{ type: "text", className: "some" }}
          value={this.state.inputOne}
          onChange={e => this.setState({ inputOne: e.target.value })}
        />

        <h2>Lazy input no Lazy</h2>
        {this.state.inputTwo}
        <Input
          nativeProps={{
            type: "text",
            className: "some",
            onChange: e =>
              this.setState({
                inputTwo: e.target.value
              })
          }}
          value={this.state.inputTwo}
        />
      </div>
    );
  }
}
