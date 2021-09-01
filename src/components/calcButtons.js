import styled from 'styled-components';

export const CalcButton = styled.button`
	grid-column: ${props=> props.gridSize? "span 2":"span 1"};
	margin: 3px;
	outline: none;
	border: none;
	border-radius: 8px;

	cursor: pointer;

	background-color: ${props=>{
		if(props.buttonColor === "op"){
			return ("rgba(110,70,180,0.6)");
		}
		else if(props.buttonColor === "light"){
			return ("rgba(200, 80, 150, 0.70)");
		}
		else{
			return ("rgba(100,100,255,0.35)");
		}
	}};

	font-size: 2rem;

	&:hover{
		background-color: ${props => {
		if (props.buttonColor === "op") {
			return ("rgba(110,70,180,0.8)");
		}
		else if(props.buttonColor==="light"){
			return ("rgba(230, 80, 150, 0.90)");
		}
		else {
			return ("rgba(100,100,255,0.6);");
		}
	}};
		
	}
`