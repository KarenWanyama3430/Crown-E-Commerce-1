import React from "react";
import "./FormInput.scss";
const FormInput = ({ handleChange, label, ...otheProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otheProps} onChange={handleChange} />
      {label ? (
        <label
          className={`${
            otheProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
