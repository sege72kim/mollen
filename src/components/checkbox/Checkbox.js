import React, { useState } from "react";
import "./styles.css";

const Checkbox = ({ label, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className={`custom-checkbox ${isChecked ? "checked" : ""}`}></span>
      {label}
    </label>
  );
};

export default Checkbox;
