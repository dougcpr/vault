import styled from 'styled-components';
import React from 'react';

const Sidebar = styled.div`
	width: 15rem;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.white};
	
	@media (max-width : 425px) {
		display: none;
	}
`;

export default (props) => {
	return (
		<Sidebar>{props.children}</Sidebar>
	)
}
