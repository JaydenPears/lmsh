import React, { useState } from "react";
import Button from './../../UI/Button/Button';
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CreditCardForm = () => {
  const [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    var result;
    if (name == "number") {
        let removedSpacesText = value
        .split(" ")
        .join("");
        result = '';
        for (var i = 0; i < removedSpacesText.length; i++) {
            result += removedSpacesText[i];
            if ((i + 1) % 4 === 0 && i + 1 !== removedSpacesText.length) {
                result += ' ';
            }
        }
    }
    else {
        result = value;
    }
    setState((prev) => ({ ...prev, [name]: result }));
  };

  const handleInputFocus = (e) => {
    setState((prev) => ({ ...prev, focus: e.target.name }));
  };

  return (
    <div>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <div className="mt-3">
        <form>
          <div className="mb-3">
            <input
            //   type="number"
              name="number"
              className="form-control"
              placeholder="Card Number"
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
            />
          </div>
          <div className="row">
            <div className="col-6 mb-3">
              <input
                type="number"
                name="expiry"
                className="form-control"
                placeholder="Valid Thru"
                pattern="\d\d/\d\d"
                value={state.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
              />
            </div>
            <div className="col-6 mb-3">
              <input
                type="number"
                name="cvc"
                className="form-control"
                placeholder="CVC"
                pattern="\d{3,4}"
                value={state.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
              />
            </div>
          </div>

          <div className="d-grid">
            <Button outline isCaps={false} to="/confirm">Принять</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreditCardForm;