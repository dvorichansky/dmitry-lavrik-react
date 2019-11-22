import React from "react";
import PropTypes from "prop-types";
import styles from './Input.module.css';

export default class extends React.Component {
  static defaultProps = {
    onChange: function e() {},
    nativeProps: {}
  };

  static PropTypes = {
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func,
    nativeProps: PropTypes.object
  };

  checkChange = e => {
    if (this.props.value.toString() !== e.target.value) {
      this.props.onChange(e);
    }
  };

  render() {
    return (
      <div>
        <input className={style.input}
          {...this.props.nativeProps}
          defaultValue={this.props.value}
          onBlur={this.checkChange}
        ></input>
      </div>
    );
  }
}
