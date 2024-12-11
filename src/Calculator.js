import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNumber, divideNumber, moduloNumber, multiplyNumber, powerNumber, subtractNumber } from './Redux/action';

function Calculator() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const dispatch = useDispatch();
  const addResult= useSelector(state => state.add?.result);
  const subtractResult= useSelector(state => state.subtract?.result);
  const multiplyResult= useSelector(state => state.multiply?.result);
  const divisionResult= useSelector(state => state.divide?.result);
  const modulusResult= useSelector(state => state.modulo?.result);
  const powerResult= useSelector(state => state.power?.result);

  const handleInput1= (e) => { setInput1(e.target.value)}
  const handleInput2= (e) => { setInput2(e.target.value)}

  const handleAdd= () => {
    const value1= Number(input1);
    const value2= Number(input2);
    if(!isNaN(value1) && !isNaN(value2)){
      dispatch(addNumber(value1+value2));
      setInput1('');
      setInput2('');
    }
  }

  const handleSubtract= () => {
    const value1= Number(input1);
    const value2= Number(input2);
    if(!isNaN(value1) && !isNaN(value2)){
      dispatch(subtractNumber(value1-value2));
      setInput1('');
      setInput2('');
    }
  }

  const handleMultiply= () => {
    const value1= Number(input1);
    const value2= Number(input2);
    if(!isNaN(value1) && !isNaN(value2)){
      dispatch(multiplyNumber(value1*value2));
      setInput1('');
      setInput2('');
    }
  }

  const handleDivide= () => {
    const value1= Number(input1);
    const value2= Number(input2);
    if(!isNaN(value1) && !isNaN(value2)){
      dispatch(divideNumber(value1/value2));
      setInput1('');
      setInput2('');
    }
  }

  const handleModulus= () => {
    const value1= Number(input1);
    const value2= Number(input2);
    if(!isNaN(value1) && !isNaN(value2)){
      dispatch(moduloNumber(value1%value2));
      setInput1('');
      setInput2('');
    }
  }

  const handlePower= () => {
    const value1= Number(input1);
    const value2= Number(input2);
    if(!isNaN(value1) && !isNaN(value2)){
      dispatch(powerNumber(value1**value2));
      setInput1('');
      setInput2('');
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Redux Calcualtor</h1>
        <div>
            <input type="number" value={input1} onChange={handleInput1} placeholder="Enter first number" style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <input type="number" value={input2} onChange={handleInput2} placeholder="Enter second number" style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
        </div>

        <div>
            <button onClick={handleAdd} style={{ padding: '10px 20px', fontSize: '16px', margin: '5px' }}>
                Add
            </button>
            <button onClick={handleSubtract} style={{ padding: '10px 20px', fontSize: '16px', margin: '5px' }}>
                Subtract
            </button>
            <button onClick={handleMultiply} style={{ padding: '10px 20px', fontSize: '16px', margin: '5px' }}>
                Multiply
            </button>
            <button onClick={handleDivide} style={{ padding: '10px 20px', fontSize: '16px', margin: '5px' }}>
                Divide
            </button>
            <button onClick={handleModulus} style={{ padding: '10px 20px', fontSize: '16px', margin: '5px' }}>
                Modulus
            </button>
            <button onClick={handlePower} style={{ padding: '10px 20px', fontSize: '16px', margin: '5px' }}>
                Power
            </button>
        </div>

        <div style={{ marginTop: '20px' }}>
            <h2>Addition Result: {addResult}</h2>
            <h2>Subtraction Result: {subtractResult}</h2>
            <h2>Multiplication Result: {multiplyResult}</h2>
            <h2>Division Result: {divisionResult}</h2>
            <h2>Modulus Result: {modulusResult}</h2>
            <h2>Power Result: {powerResult}</h2>
        </div>
    </div>
  );
}

export default Calculator