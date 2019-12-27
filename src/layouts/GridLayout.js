import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 50% 100px;
	grid-gap: 1rem 1rem;
	
	@media (max-width : 425px) {
		grid-template-columns: 1fr;
	}
`;

export default (props) => {
	return(
		<Grid>
			{props.children}
		</Grid>
	)
}
