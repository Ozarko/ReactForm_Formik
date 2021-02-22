import React from 'react';
import { Field, Formik, Form } from "formik";
import { TextField, Button, Checkbox } from "@material-ui/core";
import classes from "./FormikAndYup.module.css";

function FormikAndYup() {
  return (
    <div className={classes.FormikAndYup}>
      <Formik
        initialValues={{
          email: "",
          password: "",
          terms: false,
        }}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <Field name="email" type="input"/>
            <Field name="password" type="input"/>
            <Field name="terms" type="checkbox" as={Checkbox} />
            <div>
              <button>dsfsdf</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
} 

export default FormikAndYup;