import React, { Component } from "react";
import CheckBoxControl from "./CheckBoxControl/CheckBoxControl";
import InputControl from "./InputControl/InputControl";
import classes from "./ReactForm.module.css";
import SubmitBtn from "./SubmitBtn/SubmitBtn";

class ReactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: [
        { type: "email", name: "email", value: "", isValide: "" },
        { type: "password", name: "password", value: "", isValide: "" },
      ],
      policeChecked: false,
      isFormValide: false,
    }
  }

  inputHanler = (event) => {
    const currentInput = this.state.input.find(
      (input) => input.name === event.target.name
    );
    currentInput.value = event.target.value.trim();
    currentInput.isValide = this.isValide(
      event.target.name,
      event.target.value
    );
    this.setState({
      ...this.state.input,
    });
  };

  isValide = (name, value) => {
    switch (name) {
      case "email":
        if (value) {
          const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return regex.test(value);
        }
        break;
      case "password":
        if (value.length >= 3 && value.length <= 13) {
          return true;
        } else {
          return false;
        }
        break;
      default:
        break;
    }
  };

  checkedHandler = (event) => {
    this.setState({
      policeChecked: event.target.checked
    })
  };

  isFormValide= () => {
    const inputValide = this.state.input.every(input => input.isValide)
    if(inputValide && this.state.policeChecked) {
      return true
    }
  }

  submitHandler= (event) => {
    event.preventDefault()
    if(this.isFormValide()) {
      this.setState({
        isFormValide: true
      })
    }
    this.props.completeReg(this.state.isFormValide)
  }

  render() {
    return (
      <form onSubmit={this.submitHandler} className={classes.ReactForm}>
        <h2>Login Form</h2>
        {this.state.input.map((input, index) => (
          <InputControl
            key={index + input.name}
            {...input}
            valueFromInput={this.inputHanler}
          />
        ))}
        <CheckBoxControl isChecked={this.checkedHandler} checkedState={this.state.policeChecked}/>
        <SubmitBtn formSubmit={this.submitHandler} />
      </form>
    );
  }
}

export default ReactForm;
