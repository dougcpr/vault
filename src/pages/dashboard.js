import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input'
import Dropdown from '../components/Dropdown';
import GridLayout from '../layouts/GridLayout';
import Center from '../layouts/CenterLayout';

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
	const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];
	return (
		<DashboardContainer>
			<Dashboard>
					<Card>
						<GridLayout>
							<Dropdown label='Select a Category' items={categories} />
							<Input label='Item Name'/>
							<Input label='Location'/>
							<Button block>+</Button>
						</GridLayout>
					</Card>
			</Dashboard>
		</DashboardContainer>
	)
}
