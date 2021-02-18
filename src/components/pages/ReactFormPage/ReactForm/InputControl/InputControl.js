import { useEffect, useRef } from "react";
import classes from "./InputControl.module.css";

function InputControl({ name, changeHandler, inputValue }) {
  const inputRef = useRef();

  useEffect(() => {
    if (name === "username") {
      inputRef.current.focus();
    }
  }, []);

  const label = name.charAt(0).toUpperCase() + name.slice(1);

  const labelStyle = [classes.Label];

  const addFocusStyle = () => {
    labelStyle.push(classes.InputFocusLabel);
  };

  return (
    <div className={classes.InputControl}>
      <label className={labelStyle.join(" ")} htmlFor={name}>
        {label}
      </label>
      <input
        onChange={changeHandler}
        onFocus={() => addFocusStyle}
        className="Input"
        ref={inputRef}
        name={name}
        type="text"
        // value={inputValue}
      />
    </div>
  );
}

export default InputControl;