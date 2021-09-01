import React, {useState} from 'react';
import {CalcContainer} from './calcContainer';
import {CalcScreen,PrevScreen,CurScreen} from './calcScreen';
import {CalcButton} from './calcButtons';

function Calculator(props){
	const [curValue, setCurValue] = useState('');
	const [prevValue, setPrevValue] = useState('');
	const [operator, setOperator] = useState('');

	const appendValue = (e) =>{
		e.preventDefault();

		const value = (e.target.getAttribute('data-val'));
		if(value === '.' && curValue.includes('.')) return
		setCurValue(curValue + value)
	}

	const delValue = (e) =>{
		e.preventDefault();
		if(curValue !==''){
			let tempVal = curValue;
			tempVal = tempVal.substring(0,tempVal.length-1);
			setCurValue(tempVal);
		}
	}

	const allClear = (e) =>{
		e.preventDefault();
		setCurValue('');
		setPrevValue('');
		setOperator('');
	}

	const calculateVal = () =>{
		let floatPrev = parseFloat(prevValue);
		let floatCur = parseFloat(curValue);
		switch(operator){
			case '+': return (floatPrev+floatCur);
			case '-': return (floatPrev-floatCur);
			case 'x': return (floatPrev*floatCur);
			case '/': return (floatPrev/floatCur);
			default: return null;
		}
	}

	const operatorClicked = (e) =>{
		e.preventDefault();
		let curOperator = e.target.getAttribute('data-val');
		if(curValue !== ''){
			if(prevValue !== ''){
				let newValue = String(calculateVal());
				if (curOperator !=='='){
					setPrevValue(newValue);
					setOperator(curOperator);
					setCurValue('');
				}
				else{
					setPrevValue('');
					setCurValue(newValue);
					setOperator('');
				}
			}
			else{
				if(curOperator !== '='){
					setPrevValue(curValue);
					setOperator(e.target.getAttribute('data-val'));
					setCurValue('');
				}
			}
		}
	}

	return (
		<div>
			<CalcContainer>
				<CalcScreen>
					<PrevScreen>{prevValue} {operator}</PrevScreen>
					<CurScreen>{curValue}</CurScreen>
				</CalcScreen>
				<CalcButton onClick = {allClear} gridSize buttonColor="light">AC</CalcButton>
				<CalcButton onClick = {delValue} buttonColor="light">DEL</CalcButton>
				<CalcButton data-val={'/'} onClick={operatorClicked} buttonColor="op">/</CalcButton>
				<CalcButton data-val={'7'} onClick={appendValue}>7</CalcButton>
				<CalcButton data-val={'8'} onClick={appendValue}>8</CalcButton>
				<CalcButton data-val={'9'} onClick={appendValue}>9</CalcButton>
				<CalcButton data-val={'x'} onClick={operatorClicked} buttonColor="op">x</CalcButton>
				<CalcButton data-val={'4'} onClick={appendValue}>4</CalcButton>
				<CalcButton data-val={'5'} onClick={appendValue}>5</CalcButton>
				<CalcButton data-val={'6'} onClick={appendValue}>6</CalcButton>
				<CalcButton data-val={'-'} onClick={operatorClicked} buttonColor="op">-</CalcButton>
				<CalcButton data-val={'1'} onClick={appendValue}>1</CalcButton>
				<CalcButton data-val={'2'} onClick={appendValue}>2</CalcButton>
				<CalcButton data-val={'3'} onClick={appendValue}>3</CalcButton>
				<CalcButton data-val={'+'} onClick={operatorClicked} buttonColor="op">+</CalcButton>
				<CalcButton data-val={'.'} onClick={appendValue} buttonColor="light">.</CalcButton>
				<CalcButton data-val={'0'} onClick={appendValue}>0</CalcButton>
				<CalcButton data-val={'='} onClick={operatorClicked} gridSize buttonColor="op">=</CalcButton>
			</CalcContainer>
		</div>
	)
}

export default Calculator;