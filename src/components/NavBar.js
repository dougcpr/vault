import React  from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
 background-color:  ${({ theme }) => theme.colors.background_color_nav};
 box-sizing: border-box;
 margin: 0;
 min-width: 6.25rem;
 height: 100%;
}
`;

export default (props) => {
	const {...RemainingProps} = props;
	return (
		<NavBar
			{...RemainingProps}>
					{props.children}
		</NavBar>
	)
}
