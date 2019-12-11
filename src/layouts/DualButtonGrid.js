import React from 'react';
import styled from 'styled-components'

const DualButtonGrid = styled.div`
	display: grid;
	grid-template-columns: 45% auto 45%;
`;

export default (props) => {
	return (
		<DualButtonGrid>{props.children}</DualButtonGrid>
	)
}
