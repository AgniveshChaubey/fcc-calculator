import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {

  const [input, setInput] = useState('');
  const [output, setOutput] = useState(0);

  const display = (symbol) => {
    setInput(previous => previous + symbol);
    if(input[input.length-1]== '='){
      if(/0-9/.test(symbol)){
        setInput(symbol)
      }else{
        setInput(output + symbol);
      }
    }
  };

  const allClear = () => {
    setInput('');
    setOutput(0);
  }

  const compute = () => {
    setOutput(eval(input));
    setInput(previous => previous+'=');
  }
  console.log(input)

  const emptyInput = ()=>{
    if(!input){
      return true
    }
    return false
  }

  return (

    <div className="container mt-5 rounded" style={{ backgroundColor: 'green', maxWidth: '35em' }}>
      <div id='display' className="row">
        <div id='output' className="col-12 col-md-12">{output}</div>
        <input id='input' type='text' value={input} placeholder='0' className="col-12 col-md-12" disabled />
      </div>
      <div className="row p-2">
        <div onClick={allClear} id='ac' className="col col-6 col-md-6 border pt-3 pb-3">
          AC
        </div>
        <div id='divide' onClick={() => display('/')} className="col col-3 col-md-3 border pt-3 pb-3 operators">
          /
        </div>
        <div id='multiply' onClick={() => display('x')} className="col col-3 col-md-3 border pt-3 pb-3 operators">
          x
        </div>
        <div id='seven' onClick={() => display('7')} className="col col-3 col-md-3 border pt-3 pb-3">
          7
        </div>
        <div id='eight' onClick={() => display('8')} className="col col-3 col-md-3 border pt-3 pb-3">
          8
        </div>
        <div id='nine' onClick={() => display('9')} className="col col-3 col-md-3 border pt-3 pb-3">
          9
        </div>
        <div id='subtract' onClick={() => display('-')} className="col col-3 col-md-3 border pt-3 pb-3 operators">
          -
        </div>
        <div id='four' onClick={() => display('4')} className="col col-3 col-md-3 border pt-3 pb-3">
          4
        </div>
        <div id='five' onClick={() => display('5')} className="col col-3 col-md-3 border pt-3 pb-3">
          5
        </div>
        <div id='six' onClick={() => display('6')} className="col col-3 col-md-3 border pt-3 pb-3">
          6
        </div>
        <div id='add' onClick={() => display('+')} className="col col-3 col-md-3 border pt-3 pb-3 operators">
          +
        </div>
        <div id='one' onClick={() => display('1')} className="col col-3 col-md-3 border pt-3 pb-3">
          1
        </div>
        <div id='two' onClick={() => display('2')} className="col col-3 col-md-3 border pt-3 pb-3">
          2
        </div>
        <div id='three' onClick={() => display('3')} className="col col-3 col-md-3 border pt-3 pb-3">
          3
        </div>
        <div className="col col-3 col-md-3 border pt-3 pb-3 operators">
          🔥
        </div>
        <div id='zero' onClick={() => display('0')} className="col col-6 col-md-6 border pt-3 pb-3">
          0
        </div>
        <div onClick={() => display('.')} className="col col-3 col-md-3 border pt-3 pb-3">
          .
        </div>
        <button onClick={compute}  id='equals' className="col col-3 col-md-3 border pt-3 pb-3">
          =
        </button>
      </div>
    </div>

  )
}

export default Calculator;