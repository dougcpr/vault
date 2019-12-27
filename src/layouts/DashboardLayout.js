import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
	display: grid;
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
