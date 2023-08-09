import React from 'react';

import './Calculator.css';

const Calculator = () => (
  <div className="container-calc">
    <div>
      <input type="text" className="input" id="name" placeholder="0" />
      <div className="parent">
        <button type="button" className="button">
          AC
        </button>
        <button type="button" className="button">
          +/-
        </button>
        <button type="button" className="button">
          %
        </button>
        <button type="button" className="button-color">
          /
        </button>
        <button type="button" className="button">
          7
        </button>
        <button type="button" className="button">
          8
        </button>
        <button type="button" className="button">
          9
        </button>
        <button type="button" className="button-color">
          x
        </button>
        <button type="button" className="button">
          4
        </button>
        <button type="button" className="button">
          5
        </button>
        <button type="button" className="button">
          6
        </button>
        <button type="button" className="button-color">
          -
        </button>
        <button type="button" className="button">
          1
        </button>
        <button type="button" className="button">
          2
        </button>
        <button type="button" className="button">
          3
        </button>
        <button type="button" className="button-color">
          +
        </button>
        <button type="button" className="button-zero">
          0
        </button>
        <button type="button" className="button">
          .
        </button>
        <button type="button" className="button-color">
          =
        </button>
      </div>
    </div>
  </div>
);

export default Calculator;
