import React from 'react'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar';
import Card from '../components/Card'
import GridLayout from '../layouts/GridLayout';

const DashboardContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.defaultBackgroundColor};
	display: flex;
	height: 100vh;
`;
const Dashboard = styled.div`
	margin: 5rem;
	width: 100%;
	
	@media (max-width : 425px) {
		margin: 0;
		flex-direction: row;
	}
`;
export default () => {
	return (
		<DashboardContainer>
			<Sidebar />
			<Dashboard>
				<GridLayout>
					<Card>Hello Card</Card>
					<Card>Hello Card</Card>
					<Card>Hello Card</Card>
					<Card>Hello Card</Card>
				</GridLayout>
			</Dashboard>
		</DashboardContainer>
	)
}
