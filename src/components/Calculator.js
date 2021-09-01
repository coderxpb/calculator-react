import React, {useState} from 'react';
import {CalcContainer} from './calcContainer';
import {CalcScreen,PrevScreen,CurScreen} from './calcScreen';
import {CalcButton} from './calcButtons';

function Calculator(props){
	const [curValue, setCurValue] = useState('');

	const appendValue = (e) =>{
		e.preventDefault();

		const value = (e.target.getAttribute('data-val'));
		if(value === '.' && curValue.includes('.')) return
		setCurValue(curValue + value)
	}

	return (
		<div>
			<CalcContainer>
				<CalcScreen>
					<PrevScreen>123+234+3</PrevScreen>
					<CurScreen>{curValue}</CurScreen>
				</CalcScreen>
				<CalcButton gridSize buttonColor="light">AC</CalcButton>
				<CalcButton buttonColor="light">DEL</CalcButton>
				<CalcButton buttonColor="op">%</CalcButton>
				<CalcButton data-val={'7'} onClick={appendValue}>7</CalcButton>
				<CalcButton data-val={'8'} onClick={appendValue}>8</CalcButton>
				<CalcButton data-val={'9'} onClick={appendValue}>9</CalcButton>
				<CalcButton buttonColor="op">x</CalcButton>
				<CalcButton data-val={'4'} onClick={appendValue}>4</CalcButton>
				<CalcButton data-val={'5'} onClick={appendValue}>5</CalcButton>
				<CalcButton data-val={'6'} onClick={appendValue}>6</CalcButton>
				<CalcButton buttonColor="op">-</CalcButton>
				<CalcButton data-val={'1'} onClick={appendValue}>1</CalcButton>
				<CalcButton data-val={'2'} onClick={appendValue}>2</CalcButton>
				<CalcButton data-val={'3'} onClick={appendValue}>3</CalcButton>
				<CalcButton buttonColor="op">+</CalcButton>
				<CalcButton data-val={'.'} onClick={appendValue} buttonColor="light">.</CalcButton>
				<CalcButton data-val={'0'} onClick={appendValue}>0</CalcButton>
				<CalcButton gridSize buttonColor="op">=</CalcButton>
			</CalcContainer>
		</div>
	)
}

export default Calculator;