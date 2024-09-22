import React, { useState, useEffect } from "react";
import "./styles.css";

const Checkbox = ({ label, onChange, state, category }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(state === category);
  }, [state, category]);

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
