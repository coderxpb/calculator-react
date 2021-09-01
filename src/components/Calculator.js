import React from 'react';
import {CalcContainer} from './calcContainer';
import {CalcScreen,PrevScreen,CurScreen} from './calcScreen';
import {CalcButton} from './calcButtons';

function Calculator(props){
	return (
		<div>
			<CalcContainer>
				<CalcScreen>
					<PrevScreen>123+234+3</PrevScreen>
					<CurScreen>223 + 2</CurScreen>
				</CalcScreen>
				<CalcButton gridSize buttonColor="light">AC</CalcButton>
				<CalcButton buttonColor="light">DEL</CalcButton>
				<CalcButton buttonColor="op">%</CalcButton>
				<CalcButton>4</CalcButton>
				<CalcButton>5</CalcButton>
				<CalcButton>6</CalcButton>
				<CalcButton buttonColor="op">x</CalcButton>
				<CalcButton>8</CalcButton>
				<CalcButton>9</CalcButton>
				<CalcButton>9</CalcButton>
				<CalcButton buttonColor="op">-</CalcButton>
				<CalcButton>9</CalcButton>
				<CalcButton>9</CalcButton>
				<CalcButton>9</CalcButton>
				<CalcButton buttonColor="op">+</CalcButton>
				<CalcButton buttonColor="light">.</CalcButton>
				<CalcButton>9</CalcButton>
				<CalcButton gridSize buttonColor="op">=</CalcButton>
			</CalcContainer>
		</div>
	)
}

export default Calculator;