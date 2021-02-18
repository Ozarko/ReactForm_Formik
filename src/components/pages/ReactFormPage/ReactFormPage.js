import React from 'react'
import classes from './ReactForm.module.css'
import ReactForm from './ReactForm/ReactForm'

function ReactFormPage() {
  return (
    <div className={classes.ReactFormPage}>
      <div className={classes.ReactFormContainer}>
        <ReactForm />
      </div>
    </div>
  );
}

export default ReactFormPage;