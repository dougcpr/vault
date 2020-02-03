import React from 'react';
import styled from 'styled-components'
import CenterLayout from './CenterLayout';
import Card from '../components/Card';
import NavBar from '../components/NavBar/NavBar';

const DashboardLayout = styled.div`
	column-gap: 1rem;
	display: grid;
	grid-template-columns: 4rem 1fr 25%;
	width: 80vw;
	height: 80vh;
`;

export default (props) => (
	<CenterLayout>
		<Card borderRadius={1} boxShadow={1} padding={false}>
			<DashboardLayout>
				<NavBar/>
				{props.children}
			</DashboardLayout>
		</Card>
	</CenterLayout>
);
