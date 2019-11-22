import React, { useState } from "react";
import PropTypes from 'prop-types';

export default function Basket(props) {
  const _validate = arg => {
    const re = /^[0-9\b]+$/;
    return re.test(arg);
  };

  let { max, min } = props;

  let [cnt, setCnt] = useState(1);
  let [errorMessage, errorMessageSet] = useState("");

  let increase = () => {
    if (cnt < max) {
      setCnt(cnt + 1);
    }
  };
  let reduce = () => {
    if (cnt > min) {
      setCnt(cnt - 1);
    }
  };

  let current = e => {
    const value = +e.target.value;
    if (_validate(value)) {
      if (value >= min && value <= max) {
        setCnt(value);
        errorMessageSet("");
      } else {
        error(`Введите значение больше ${min} и меньше ${max}.`);
      }
    } else {
      error("Введите в цифровом формате!");
    }
  };

  let error = message => {
    errorMessageSet(message);
  };

  return (
    <div>
      <div>
        <button onClick={reduce}>-</button>
        <input type="text" onChange={current} value={cnt}></input>
        <button onClick={increase}>+</button>
      </div>
      <div className="error" style={{ color: "red" }}>
        {errorMessage}
      </div>
    </div>
  );
}

Basket.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number
}