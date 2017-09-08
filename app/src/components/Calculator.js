import React, { Component } from 'react'
import calculatorImg from './calculator.png'

class Calculator extends Component {
  constructor(){
    super();

    this.state = {
      header: "Scott's Calculator",
      displayNum: "0",
      operator: "",
      tempNum: 0,
      placeHolderDisplay: false
    }
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  headerChanged(newValue){
    this.setState({
      //header: "Scott's Calc"
      header: newValue
    })
  }

  updateDisplay(num){
    // Takes in new numbers and concatenates them to the displayNum
    // Makes sure to clear the place holder '0' for the first entry
    // Also prevents only zeros from concatenating
    // Only takes 13 characters won't concatenate past this

    let display = (this.state.displayNum === '0' || this.state.placeHolderDisplay) ? num : this.state.displayNum +num ;

    this.setState({
      displayNum: (this.state.displayNum.length < 13) ? display : this.state.displayNum,
      placeHolderDisplay: false
    })
  }

  setOperator(operator){
    if(!this.state.operator){
      this.setState({
        tempNum: Number(this.state.displayNum),
        displayNum: "0",
        operator: operator
      })
    }
  }

  calculate(){
    if(!this.state.operator){
      return;
    }
    var result;
    switch (this.state.operator) {
      case '*':
        result = this.state.tempNum * Number(this.state.displayNum);
        break;
      case '/':
        result = this.state.tempNum / Number(this.state.displayNum);
        break;
      case '-':
        result = this.state.tempNum - Number(this.state.displayNum);
        break;
      case '+':
        result = this.state.tempNum + Number(this.state.displayNum);
        break;
    }
    this.setState({
      displayNum: String(result),
      placeHolderDisplay: true,
      //tempNum: 0, //allows one to use the current total as the next value to calculate
      operator: ""
    })
  }

  clearDisplay(){
    this.setState({
      header: "Scott's Calculator",
      displayNum: "0",
      operator: "",
      tempNum: 0,
      placeHolderDisplay: false
    })
  }

  render(){
    console.log(this.state)
    return (
      <div id="calculator-container">
        <input id="header-input" onChange={ (e)=> this.headerChanged(e.target.value) }/>
        <h1 id="header"> { this.state.header }</h1>
        <img className="remove-highlight" src={calculatorImg} alt="calculator" />
        <div id="calculator-mask" className="remove-highlight">
          <div className="output">
            <span className="total">
              { this.state.displayNum }
            </span>
          </div>

          <div className="btn clear" onClick={ ()=> this.clearDisplay() }></div>

          <div className="btn zero" onClick={ ()=> this.updateDisplay("0") }></div>
          <div className="btn one" onClick={ ()=> this.updateDisplay("1") }></div>
          <div className="btn two" onClick={ ()=> this.updateDisplay("2") }></div>
          <div className="btn three" onClick={ ()=> this.updateDisplay("3") }></div>
          <div className="btn four" onClick={ ()=> this.updateDisplay("4") }></div>
          <div className="btn five" onClick={ ()=> this.updateDisplay("5") }></div>
          <div className="btn six" onClick={ ()=> this.updateDisplay("6") }></div>
          <div className="btn seven" onClick={ ()=> this.updateDisplay("7") }></div>
          <div className="btn eight" onClick={ ()=> this.updateDisplay("8") }></div>
          <div className="btn nine" onClick={ ()=> this.updateDisplay("9") }></div>

          <div className="btn equal" onClick={ ()=> this.calculate() }></div>
          <div className="btn multiply" onClick={ ()=> this.setOperator("*") }></div>
          <div className="btn divide" onClick={ ()=> this.setOperator("/") }></div>
          <div className="btn subtract" onClick={ ()=> this.setOperator("-") }></div>
          <div className="btn add" onClick={ ()=> this.setOperator("+") }></div>
        </div>
      </div>
    )
  }
}

export default Calculator;
