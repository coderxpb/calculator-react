import styled from 'styled-components'

export const CalcScreen = styled.div`
	grid-column: 1 / -1;
	display: flex;
	flex-direction: column;
	justify-content: space-around;

	padding: 10px;
	border-top-left-radius: 12px;
	border-top-right-radius: 12px;

	wrod-wrap: break-word;
	word-break: break-all;
	text-align: right;
	
	background: rgba(120, 147, 255, 0.7);

`

export const PrevScreen = styled.div`
	color: rgba(255,255,255,0.7);
	font-size: 1.5rem;
`

export const CurScreen = styled.div`
	color: white;
	font-size: 2.5rem;
`
