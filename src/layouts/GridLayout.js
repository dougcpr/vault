import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-column-gap: 1rem;
	grid-row-gap: 1rem;
`;

export default (props) => {
	return(
		<Grid>
			{props.children}
		</Grid>
	)
}
