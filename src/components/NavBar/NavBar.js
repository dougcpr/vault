import React  from 'react';
import styled from 'styled-components';

import {Dashboard, Settings, Exit} from 'styled-icons/material'
import {Scroll} from 'styled-icons/fa-solid/Scroll';
import {LogOutCircle} from 'styled-icons/boxicons-regular/LogOutCircle';
import {Sword} from 'styled-icons/remix-fill/Sword';
import NavBarItem from './NavBarItem';

const NavBar = styled.div`
 background-color:  ${({ theme }) => theme.colors.blue};
 box-sizing: border-box;
 margin: 0;
 height: 100%;
`;

const IconContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	margin: 0 auto;
	grid-template-rows: 5% 2rem 2rem 2rem 2rem 1fr 2rem 5%;
	row-gap: 1rem;
	height: 100%;
	width: 100%;
`;

export default (props) => {
	const {...RemainingProps} = props;
	return (
		<NavBar
			{...RemainingProps}>
			<IconContainer>
				<div />
				<NavBarItem path={'/dashboard'}><Dashboard/></NavBarItem>
				<NavBarItem path={'/combat'}><Sword/></NavBarItem>
				<NavBarItem path={'/quests'}><Scroll/></NavBarItem>
				<NavBarItem path={'/settings'}><Settings/></NavBarItem>
				<div />
				<NavBarItem path={'/'}><LogOutCircle/></NavBarItem>
				<div />
			</IconContainer>
		</NavBar>
	)
}
