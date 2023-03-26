import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[calc, setCalc] = useState("");
  const[result, setResult] = useState("");
  const ops = ['/','*','+','-','.']
  const calculate = () => {
    setCalc(eval(calc).toString());
  }
  const deleteLast = () => {
    if (calc == '') {
      return;
    }
    const value = calc.slice(0,-1);
    setCalc(value);
  }
  const updateCalc = value => {
    if(
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    )
    {return;}
    setCalc(calc+value);

    if (!ops.includes(value)){
      setResult(eval(calc + value).toString())
    }
  }
  const createDigits = () => {
    const digits =[];
    for (let digit_counter =1;digit_counter<10;digit_counter++){
      digits.push(
        <button onClick={() => updateCalc(digit_counter.toString())} key={digit_counter}>{digit_counter}</button>
      )
    }
    return digits;
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span id='res'>({result})</span> : ''}
          {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>

          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          
          <button onClick={calculate}>=</button>

        </div>
      </div>
    </div>
  )
}

export default App
