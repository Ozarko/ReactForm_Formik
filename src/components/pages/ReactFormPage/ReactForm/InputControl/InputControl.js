import { useState } from "react";
import classes from "./InputControl.module.css";

function InputControl({type, name, value, valueFromInput}) {

  return (
    <div className={classes.InputControl}>
      <label htmlFor={name}>{name}</label>
      <input onChange={valueFromInput} type={type} name={name} value={value}/>
    </div>
  );
}

export default InputControl;