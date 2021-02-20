import classes from "./SubmitBtn.module.css";

function SubmitBtn({formSubmit}) {
  return (
    <button className={classes.SubmitBtn} type='submit' onClick={formSubmit}>Submit</button>
  )
}

export default SubmitBtn