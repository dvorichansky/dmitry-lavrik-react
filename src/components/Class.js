import React from 'react';

export default class extends React.Component {
  state = {
    cnt: 1
  }

  increase = () => {
    this.setState({
      cnt: this.state.cnt + 1
     })
  }

  render() {
    return (
      <div>
        <strong>{this.state.cnt}</strong>
        <button onClick={this.increase}>+</button>
      </div>
    )
  }
}