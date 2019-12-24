import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card';
import Input from '../components/Input'
import Dropdown from '../components/Dropdown';
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
			<Dashboard>
				<GridLayout>
					<Card />
					<Card><Dropdown /></Card>
					<Card>
						<Input label='Player Name'/>
						<Input label='Race'/>
						<Input label='Class'/>
					</Card>
				</GridLayout>
			</Dashboard>
		</DashboardContainer>
	)
}
