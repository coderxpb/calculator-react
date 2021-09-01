import React from 'react';
import {CalcContainer} from './calcContainer';
import {CalcScreen,PrevScreen,CurScreen} from './calcScreen';

function Calculator(props){
	return (
		<div>
			<CalcContainer>
				<CalcScreen>
					<PrevScreen>123+234+3</PrevScreen>
					<CurScreen>223 + 2</CurScreen>
				</CalcScreen>
			</CalcContainer>
		</div>
	)
}

export default Calculator;