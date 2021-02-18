import React, {Component} from 'react'
import CheckBoxControl from './CheckBoxControl/CheckBoxControl';
import InputControl from "./InputControl/InputControl";
import classes from "./ReactForm.module.css";
import SubmitBtn from './SubmitBtn/SubmitBtn';

class ReactForm extends Component {
  state = {
    input: {},
    errorStatus: {},
  };

  changeHandler = (event) => {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({
      input,
    });
  };

  formValidate =() => {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["email"]) {
      isValid = false;
      errors["email"] = true;
    }

    if (typeof input["email"] !== "undefined") {
      let regexp = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!regexp.test(input["email"])) {
        isValid = false;
        errors["email"] = true;
      }
    }

    

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(e);

    if (this.formValidate()) {
      let input = {};
      input["email"] = "";
      input["password"] = "";
      this.setState({ input: input });

      alert("Demo Form is submited");
    }
  };

  render() {
    return (
      <form onSubmit={this.submitHandler} className={classes.ReactForm}>
        <h2>Login Form</h2>
        <InputControl
          changeHandler={this.changeHandler}
          name={"email"}
          inputValue={this.state.input.email}
        />
        <InputControl
          changeHandler={this.changeHandler}
          name={"password"}
          inputValue={this.state.input.password}
        />
        <CheckBoxControl />
        <SubmitBtn submitHandler={this.submitHandler} />
      </form>
    );
  }
}

export default ReactForm