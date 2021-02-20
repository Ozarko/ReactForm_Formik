import React, { useState } from 'react'
import classes from './ReactForm.module.css'
import ReactForm from './ReactForm/ReactForm'

function ReactFormPage() {

  const [compReg, setCompReg] = useState(false)

  const completeReg = (formIsValide) => {
    setCompReg(formIsValide)
  }
  return (
    <div className={classes.ReactFormPage}>
      <div className={classes.ReactFormContainer}>
        {!compReg ? <ReactForm completeReg={completeReg} />: <p>dfdf</p>}
      </div>
    </div>
  );
}

export default ReactFormPage;