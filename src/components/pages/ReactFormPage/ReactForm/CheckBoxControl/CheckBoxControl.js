import classes from "./CheckBoxControl.module.css";

function CheckBoxControl({isChecked, policeChecked}) {
  return (
    <div className={classes.CheckBoxControl}>
      <p>I accept the privacy policy and the terms of use</p>
      <input type="checkbox" checked={policeChecked} onChange={isChecked} />
    </div>
  );
}

export default CheckBoxControl;