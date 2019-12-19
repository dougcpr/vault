import React from 'react';
import styled from 'styled-components'

const GridCardLayout = styled.div`
	margin: 76px 100px;
	display: grid;
	grid-template-columns: 33% 33% 33%;
	justify-items: center;
	
	@media (max-width : 425px) {
    margin: 0;
		grid-template-columns: 100%;
		height: 50vh;
  }
`;

export default (props) => (
	<GridCardLayout>{props.children}</GridCardLayout>
);
