import styled from 'styled-components';

export const CalcContainer = styled.div`
	display: grid;
	justify-content: center;
	align-content: center;

	width:400px;
	margin: 40px auto;

	grid-template-columns: repeat(4,100px);
	grid-template-rows: minmax(120px, auto) repeat(5, 100px);
	box-shadow: 4px 4px 12px #342;
	border-radius: 12px;
`