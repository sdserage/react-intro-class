import React, { Component } from 'react'
import calculatorImg from './calculator.png'

class Calculator extends Component {
  constructor(){
    super();

    this.state = {
      header: "Scott's Calculator",
      displayNum: "0",
      operator: "",
      tempNum: 0
    }
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
    let display = (this.state.displayNum === '0') ? num : this.state.displayNum +num ;
    this.setState({
      displayNum: (this.state.displayNum.length < 13) ? display : this.state.displayNum
    })
  }

  render(){
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

          <div className="btn clear"></div>

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

          <div className="btn equal"></div>
          <div className="btn multiply"></div>
          <div className="btn divide"></div>
          <div className="btn subtract"></div>
          <div className="btn add"></div>
        </div>
      </div>
    )
  }
}

export default Calculator;
