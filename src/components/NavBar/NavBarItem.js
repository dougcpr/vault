import React  from 'react';
import styled, {css} from 'styled-components';
import { useRouter } from 'next/router'

const isActive = ({active}) => {
	const activeNavItem = css`
		border-left: 2px solid white;
		color: white;
		cursor: pointer;
	`;
	return active ? activeNavItem : null;
};

const NavBarItem = styled.div`
	color: ${({ theme }) => theme.colors.disabled_NavBar_Item};
	width: 2rem;
	height: 2rem;
	padding: 0 1rem;
	&:hover {
		color: white;
		cursor: pointer;
	}
	${(props) => isActive(props)};
`;
export default (props) => {
	const {path, ...RemainingProps} = props;
	const router = useRouter();
	return (
		<NavBarItem
			onClick={async () => {await router.push(path)}}
			active={path === router.pathname}
			{...RemainingProps}>
			{props.children}
		</NavBarItem>
	)
}
