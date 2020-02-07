import React from 'react';
import styled from 'styled-components'
import CenterLayout from './CenterLayout';
import Card from '../components/Card';
import NavBar from '../components/NavBar/NavBar';

const DashboardLayout = styled.div`
	column-gap: 1rem;
	display: grid;
	grid-template-columns: ${({theme}) => theme.style.gridColumns.dashboardLayout};
	width: 64.375rem;
	height: 33.56rem;
	/* mobile responsiveness */
	@media (max-width : 812px) {
		grid-template-columns: 1fr;
		box-shadow: ${({theme}) => theme.style.box_shadow[0]};
		overflow: scroll;
  }
`;

export default (props) => (
	<CenterLayout>
		<Card borderRadius={1} boxShadow={2} padding={false}>
			<DashboardLayout>
				<NavBar/>
				{props.children}
			</DashboardLayout>
		</Card>
	</CenterLayout>
);
