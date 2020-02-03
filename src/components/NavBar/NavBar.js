import React  from 'react';
import styled from 'styled-components';

import {Dashboard, Settings, Person} from 'styled-icons/material'
import {Sword} from 'styled-icons/remix-fill/Sword';
import NavBarItem from './NavBarItem';

const NavBar = styled.div`
 background-color:  ${({ theme }) => theme.colors.background_color_nav};
 box-sizing: border-box;
 margin: 0;
 height: 100%;
`;

const IconContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	margin: 0 auto;
	grid-template-rows: 5% 1rem 20% 2rem 2rem 2rem 20%;
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
				<div />
				<NavBarItem path={'/combat'}><Sword/></NavBarItem>
				<NavBarItem path={'/quests'}><Person/></NavBarItem>
				<NavBarItem path={'/settings'}><Settings/></NavBarItem>
				<div />
			</IconContainer>
		</NavBar>
	)
}
