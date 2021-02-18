import classes from "./CheckBoxControl.module.css";

function CheckBoxControl() {
  return (
    <div className={classes.CheckBoxControl}>
      <p>I accept the privacy policy and the terms of use</p>
      <input type="checkbox" />
    </div>
  );
}

export default CheckBoxControl;