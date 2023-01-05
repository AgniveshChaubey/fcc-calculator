import React from 'react';
import './Calculator.css';

const Calculator = () => {
  return (
    <div className='' style={{backgroundColor: ''}}>
      <div className="container mt-5" style={{ backgroundColor: 'orange', maxWidth: '25em' }}>
        <div className="row">
          <div id='display' className="col-12 col-md-12">{'A'}</div>
        </div>
        <div className="row">
          <div className="col col-6 col-md-6 pt-3 pb-3">AC</div>
          <div className="col col-3 col-md-3 pt-3 pb-3 operators">/</div>
          <div className="col col-3 col-md-3 pt-3 pb-3 operators">x</div>
          <div className="col col-3 col-md-3 pt-3 pb-3">7</div>
          <div className="col col-3 col-md-3 pt-3 pb-3">8</div>
          <div className="col col-3 col-md-3 pt-3 pb-3">9</div>
          <div className="col col-3 col-md-3 pt-3 pb-3 operators">-</div>
          <div className="col col-3 col-md-3 pt-3 pb-3">4</div>
          <div className="col col-3 col-md-3 pt-3 pb-3">5</div>
          <div className="col col-3 col-md-3 pt-3 pb-3">6</div>
          <div className="col col-3 col-md-3 pt-3 pb-3 operators">+</div>
          <div className="col col-3 col-md-3 pt-3 pb-3">1</div>
          <div className="col col-3 col-md-3 pt-3 pb-3">2</div>
          <div className="col col-3 col-md-3 pt-3 pb-3">3</div>
          <div className="col col-3 col-md-3 pt-3 pb-3">=</div>
          <div className="col col-6 col-md-6 pt-3 pb-3">0</div>
          <div className="col col-3 col-md-3 pt-3 pb-3">.</div>
          <div className="col col-3 col-md-3 pt-3 pb-3">🔥</div>
        </div>
      </div>
    </div>
  )
}

export default Calculator;